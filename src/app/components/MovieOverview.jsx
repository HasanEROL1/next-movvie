export default function MovieOverview({ text }) {
  // Eğer film açıklaması API'den boş geldiyse çirkin durmasın diye alternatif metin koyduk
  if (!text) {
    return (
      <p className="text-gray-400 italic text-center mt-6 text-lg">
        Bu filmin henüz bir açıklaması bulunmamaktadır.
      </p>
    );
  }

  return (
    <div className="mt-6 max-w-2xl mx-auto backdrop-blur-[2px] bg-black/10 p-4 rounded-xl">
      <p className="text-gray-200 text-center text-xl leading-relaxed tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] first-letter:text-3xl first-letter:font-bold first-letter:text-red-300">
        {text}
      </p>
    </div>
  );
}