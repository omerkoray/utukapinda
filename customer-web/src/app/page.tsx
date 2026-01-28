export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl">👔</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Ütü Kapında
          </h1>
          <p className="text-xl text-gray-600">
            Kuru Temizleme ve Ütü Servisi
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">🎉 Hoş Geldiniz!</h2>
          <p className="text-gray-600 mb-6">
            Kıyafetlerinizi kapıdan alıyor, profesyonelce temizleyip geri getiriyoruz.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/register" className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600">
              Sipariş Ver
            </a>
            <a href="/login" className="px-6 py-3 bg-white border-2 border-orange-500 text-orange-500 rounded-lg font-semibold hover:bg-orange-50">
              Giriş Yap
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: '🧺', title: 'Kapıdan Alış' },
            { icon: '✨', title: 'Profesyonel Temizlik' },
            { icon: '🚚', title: 'Hızlı Teslimat' },
            { icon: '💳', title: 'Kolay Ödeme' },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow">
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}