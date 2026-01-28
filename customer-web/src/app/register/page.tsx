'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Basit validasyon
    if (formData.password.length < 8) {
      alert('❌ Şifre en az 8 karakter olmalı!');
      setLoading(false);
      return;
    }

    if (!formData.phone.match(/^5\d{9}$/)) {
      alert('❌ Geçerli bir telefon numarası girin (5XX XXX XX XX)');
      setLoading(false);
      return;
    }

    // Simülasyon - Backend hazır olunca burası değişecek
    setTimeout(() => {
      console.log('Kayıt Bilgileri:', formData);
      
      // Kullanıcıyı localStorage'a kaydet (geçici - backend hazır olunca silinecek)
      localStorage.setItem('user', JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: `+90${formData.phone}`,
      }));
      
      alert(`✅ Kayıt başarılı!\n\nHoş geldiniz ${formData.firstName}!\n\nTelefon: +90${formData.phone}`);
      setLoading(false);
      
      // Dashboard'a yönlendir
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl">👔</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Kayıt Ol</h1>
          <p className="text-gray-600">İlk siparişinizde %20 indirim!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ad
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Ahmet"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Soyad
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Yılmaz"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Telefon Numarası
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-gray-700 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">
                +90
              </span>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})}
                className="w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="5XX XXX XX XX"
                maxLength={10}
                required
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Örnek: 5551234567</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Şifre
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="En az 8 karakter"
              minLength={8}
              required
            />
            <div className="flex items-center justify-between mt-1">
              <p className="text-xs text-gray-500">
                {formData.password.length}/8 karakter
              </p>
              {formData.password.length >= 8 && (
                <span className="text-xs text-green-600 font-medium">✓ Güçlü şifre</span>
              )}
            </div>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              <a href="#" className="text-orange-600 hover:underline">Kullanım Koşulları</a> ve{' '}
              <a href="#" className="text-orange-600 hover:underline">Gizlilik Politikası</a>'nı kabul ediyorum
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold transition ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Kaydediliyor...
              </span>
            ) : (
              'Kayıt Ol'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Zaten hesabınız var mı?{' '}
            <a href="/login" className="text-orange-600 font-semibold hover:underline">
              Giriş Yap
            </a>
          </p>
        </div>

        <div className="mt-4 text-center">
          <a href="/" className="text-sm text-gray-500 hover:text-gray-700">
            ← Ana Sayfaya Dön
          </a>
        </div>
      </div>
    </div>
  );
}