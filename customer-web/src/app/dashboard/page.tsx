'use client';

import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const [user, setUser] = useState({
    firstName: 'Kullanıcı',
    phone: '',
  });

  useEffect(() => {
    // LocalStorage'dan kullanıcı bilgilerini al
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsed = JSON.parse(userData);
      setUser(parsed);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-xl">👔</span>
            </div>
            <span className="font-bold text-xl">Ütü Kapında</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Merhaba, {user.firstName}</span>
            <a href="/" className="text-sm text-orange-600 hover:underline">
              Çıkış
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Hoş Geldiniz! 👋
          </h1>
          <p className="text-gray-600">Ne yapmak istersiniz?</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <a
            href="/dashboard/new-order"
            className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 hover:shadow-xl transition"
          >
            <div className="text-3xl mb-3">🧺</div>
            <h3 className="text-xl font-bold mb-2">Yeni Sipariş</h3>
            <p className="text-orange-100 text-sm">Hemen sipariş oluşturun</p>
          </a>

          <a
            href="/dashboard/addresses"
            className="bg-white border-2 border-orange-200 rounded-2xl p-6 hover:shadow-lg transition"
          >
            <div className="text-3xl mb-3">📍</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Adreslerim</h3>
            <p className="text-gray-600 text-sm">Teslimat adreslerinizi yönetin</p>
          </a>

          <a
            href="/dashboard/orders"
            className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition"
          >
            <div className="text-3xl mb-3">📦</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Siparişlerim</h3>
            <p className="text-gray-600 text-sm">Geçmiş siparişlerinizi görün</p>
          </a>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Son Siparişler</h2>
          <div className="text-center py-8 text-gray-500">
            <div className="text-5xl mb-4">📭</div>
            <p className="mb-2">Henüz sipariş vermediniz</p>
            <a 
              href="/dashboard/new-order" 
              className="text-orange-600 hover:underline mt-2 inline-block"
            >
              İlk siparişinizi oluşturun →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}