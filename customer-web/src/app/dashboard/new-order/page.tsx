'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Address {
  id: string;
  title: string;
  address: string;
}

interface ServiceItem {
  id: string;
  name: string;
  price: number;
  unit?: string;
}

interface Service {
  id: string;
  name: string;
  icon: string;
  items: ServiceItem[];
}

export default function NewOrderPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [order, setOrder] = useState({
    addressId: '',
    serviceType: '',
    items: [] as ServiceItem[],
    pickupDate: '',
    pickupTime: '',
    total: 0,
  });

  const addresses: Address[] = [
    { id: '1', title: 'Ev', address: 'Bağdat Cad. No:123, Kadıköy' },
    { id: '2', title: 'İş', address: 'Atatürk Cad. No:45, Beşiktaş' },
  ];

  const services: Service[] = [
    { id: 'dry-cleaning', name: 'Kuru Temizleme', icon: '👔', items: [
      { id: '1', name: 'Gömlek', price: 25 },
      { id: '2', name: 'Pantolon', price: 30 },
      { id: '3', name: 'Takım Elbise', price: 80 },
      { id: '4', name: 'Elbise', price: 50 },
    ]},
    { id: 'ironing', name: 'Ütü', icon: '🔥', items: [
      { id: '5', name: 'Ütü (kg)', price: 40, unit: 'kg' },
    ]},
  ];

  const handlePlaceOrder = () => {
    if (order.total < 150) {
      alert('❌ Minimum sipariş tutarı 150 TL');
      return;
    }

    alert(`✅ Sipariş alındı!\n\nToplam: ${order.total} TL\nTeslimat: ${order.pickupDate} ${order.pickupTime}\n\nSipariş numaranız: #${Math.floor(Math.random() * 10000)}`);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <a href="/dashboard" className="text-gray-600 hover:text-gray-900">←</a>
            <span className="font-bold text-xl">Yeni Sipariş</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress */}
        <div className="flex items-center justify-between mb-8">
          {['Adres', 'Hizmet', 'Zaman', 'Onay'].map((label, idx) => (
            <div key={idx} className="flex-1 flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step > idx + 1 ? 'bg-green-500 text-white' :
                step === idx + 1 ? 'bg-orange-500 text-white' :
                'bg-gray-200 text-gray-500'
              }`}>
                {step > idx + 1 ? '✓' : idx + 1}
              </div>
              <div className={`flex-1 h-1 ${idx < 3 ? (step > idx + 1 ? 'bg-green-500' : 'bg-gray-200') : ''}`} />
            </div>
          ))}
        </div>

        {/* Step 1: Address */}
        {step === 1 && (
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Teslimat Adresi Seçin</h2>
            <div className="space-y-3">
              {addresses.map((addr) => (
                <button
                  key={addr.id}
                  onClick={() => {
                    setOrder({...order, addressId: addr.id});
                    setStep(2);
                  }}
                  className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-orange-500 transition"
                >
                  <div className="font-bold">{addr.title}</div>
                  <div className="text-sm text-gray-600">{addr.address}</div>
                </button>
              ))}
              <a href="/dashboard/addresses" className="block text-center py-4 text-orange-600 hover:underline">
                + Yeni Adres Ekle
              </a>
            </div>
          </div>
        )}

        {/* Step 2: Service */}
        {step === 2 && (
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Hizmet Seçin</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setOrder({...order, serviceType: service.id})}
                  className={`p-6 border-2 rounded-lg transition ${
                    order.serviceType === service.id 
                      ? 'border-orange-500 bg-orange-50' 
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                >
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <div className="font-bold">{service.name}</div>
                </button>
              ))}
            </div>

            {order.serviceType && (
              <>
                <h3 className="font-bold mb-3">Ürünler:</h3>
                {services
                  .find(s => s.id === order.serviceType)
                  ?.items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 border-b">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-600">
                          {item.price} TL{item.unit ? `/${item.unit}` : ''}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300">-</button>
                        <span className="w-8 text-center font-bold">0</span>
                        <button 
                          onClick={() => setOrder({...order, total: order.total + item.price})}
                          className="w-8 h-8 bg-orange-500 text-white rounded hover:bg-orange-600"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                
                <div className="mt-6 flex gap-3">
                  <button onClick={() => setStep(1)} className="px-6 py-3 bg-gray-200 rounded-lg">
                    Geri
                  </button>
                  <button 
                    onClick={() => setStep(3)}
                    disabled={order.total === 0}
                    className="flex-1 py-3 bg-orange-500 text-white rounded-lg font-semibold disabled:opacity-50"
                  >
                    Devam ({order.total} TL)
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* Step 3: Time */}
        {step === 3 && (
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Alış Zamanı</h2>
            <div className="space-y-4">
              <div>
                <label className="block font-medium mb-2">Tarih</label>
                <input
                  type="date"
                  value={order.pickupDate}
                  onChange={(e) => setOrder({...order, pickupDate: e.target.value})}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Saat Aralığı</label>
                <select
                  value={order.pickupTime}
                  onChange={(e) => setOrder({...order, pickupTime: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg"
                >
                  <option value="">Seçin</option>
                  <option value="09:00-13:00">09:00 - 13:00</option>
                  <option value="14:00-18:00">14:00 - 18:00</option>
                </select>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(2)} className="px-6 py-3 bg-gray-200 rounded-lg">
                  Geri
                </button>
                <button 
                  onClick={() => setStep(4)}
                  disabled={!order.pickupDate || !order.pickupTime}
                  className="flex-1 py-3 bg-orange-500 text-white rounded-lg font-semibold disabled:opacity-50"
                >
                  Devam
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Confirm */}
        {step === 4 && (
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Sipariş Özeti</h2>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">Teslimat Adresi</div>
                <div className="font-medium">{addresses.find(a => a.id === order.addressId)?.address}</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">Alış Zamanı</div>
                <div className="font-medium">{order.pickupDate} • {order.pickupTime}</div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Toplam</span>
                  <span className="text-2xl font-bold text-orange-600">{order.total} TL</span>
                </div>
                <div className="text-xs text-gray-600 mt-1">Teslimat ücreti: 30 TL (Kadıköy)</div>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep(3)} className="px-6 py-3 bg-gray-200 rounded-lg">
                Geri
              </button>
              <button 
                onClick={handlePlaceOrder}
                className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold"
              >
                Siparişi Onayla
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
