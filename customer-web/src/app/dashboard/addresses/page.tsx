'use client';

import { useState } from 'react';

interface Address {
  id: string;
  title: string;
  fullAddress: string;
  district: string;
  city: string;
  isDefault: boolean;
}

export default function AddressesPage() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: '1',
      title: 'Ev',
      fullAddress: 'Bağdat Caddesi, No: 123, Daire: 5',
      district: 'Kadıköy',
      city: 'İstanbul',
      isDefault: true,
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    title: 'Ev',
    street: '',
    buildingNo: '',
    apartmentNo: '',
    district: 'Kadıköy',
    city: 'İstanbul',
    directions: '',
  });

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    
    const address: Address = {
      id: Date.now().toString(),
      title: newAddress.title,
      fullAddress: `${newAddress.street}, No: ${newAddress.buildingNo}, Daire: ${newAddress.apartmentNo}`,
      district: newAddress.district,
      city: newAddress.city,
      isDefault: addresses.length === 0,
    };

    setAddresses([...addresses, address]);
    setShowAddForm(false);
    setNewAddress({
      title: 'Ev',
      street: '',
      buildingNo: '',
      apartmentNo: '',
      district: 'Kadıköy',
      city: 'İstanbul',
      directions: '',
    });

    alert('✅ Adres başarıyla eklendi!');
  };

  const deleteAddress = (id: string) => {
    if (confirm('Bu adresi silmek istediğinizden emin misiniz?')) {
      setAddresses(addresses.filter(addr => addr.id !== id));
      alert('🗑️ Adres silindi');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a href="/dashboard" className="text-gray-600 hover:text-gray-900">←</a>
            <span className="font-bold text-xl">Adreslerim</span>
          </div>
          <a href="/dashboard" className="text-sm text-gray-600 hover:underline">
            Geri
          </a>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Add Button */}
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="mb-6 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          + Yeni Adres Ekle
        </button>

        {/* Add Form */}
        {showAddForm && (
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Yeni Adres</h3>
            <form onSubmit={handleAddAddress} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adres Başlığı
                </label>
                <select
                  value={newAddress.title}
                  onChange={(e) => setNewAddress({...newAddress, title: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                >
                  <option value="Ev">Ev</option>
                  <option value="İş">İş</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    İl
                  </label>
                  <select
                    value={newAddress.city}
                    onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="İstanbul">İstanbul</option>
                    <option value="Ankara">Ankara</option>
                    <option value="İzmir">İzmir</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    İlçe
                  </label>
                  <select
                    value={newAddress.district}
                    onChange={(e) => setNewAddress({...newAddress, district: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="Kadıköy">Kadıköy</option>
                    <option value="Beşiktaş">Beşiktaş</option>
                    <option value="Şişli">Şişli</option>
                    <option value="Üsküdar">Üsküdar</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sokak/Cadde
                </label>
                <input
                  type="text"
                  value={newAddress.street}
                  onChange={(e) => setNewAddress({...newAddress, street: e.target.value})}
                  placeholder="Bağdat Caddesi"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bina No
                  </label>
                  <input
                    type="text"
                    value={newAddress.buildingNo}
                    onChange={(e) => setNewAddress({...newAddress, buildingNo: e.target.value})}
                    placeholder="123"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Daire No
                  </label>
                  <input
                    type="text"
                    value={newAddress.apartmentNo}
                    onChange={(e) => setNewAddress({...newAddress, apartmentNo: e.target.value})}
                    placeholder="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tarif (Opsiyonel)
                </label>
                <textarea
                  value={newAddress.directions}
                  onChange={(e) => setNewAddress({...newAddress, directions: e.target.value})}
                  placeholder="Yeşil apartman, güvenliğin yanında..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  rows={3}
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600"
                >
                  Kaydet
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300"
                >
                  İptal
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Address List */}
        <div className="space-y-4">
          {addresses.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">📍</div>
              <p className="text-gray-600">Henüz adres eklemediniz</p>
            </div>
          ) : (
            addresses.map((address) => (
              <div
                key={address.id}
                className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100 hover:border-orange-200 transition"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{address.title}</h3>
                      {address.isDefault && (
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                          Varsayılan
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-1">{address.fullAddress}</p>
                    <p className="text-sm text-gray-500">{address.district}, {address.city}</p>
                  </div>
                  <button
                    onClick={() => deleteAddress(address.id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}