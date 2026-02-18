"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Movies from "@/app/components/Movies";
import { fetchSearchMovies } from "@/utils/service";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword"); // ?keyword=Batman gibi alır
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (keyword) {
      setLoading(true);
      fetchSearchMovies(keyword).then((res) => {
        setMovies(res);
        setLoading(false);
      });
    }
  }, [keyword]);

  if (!keyword) return <div>Keyword bulunamadı</div>;

  return (
    <div className="py-8">
      <h1 className="text-4xl text-white font-bold mb-4">
        Arama Sonuçları: <span className="text-red-500">{keyword}</span>
      </h1>

      {loading ? (
        <p className="text-gray-400">Yükleniyor...</p>
      ) : movies.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-3">
          {movies.map((movie) => (
            <Movies key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-xl mt-16 text-center">
          "{keyword}" için film bulunamadı
        </p>
      )}
    </div>
  );
};

export default SearchPage;
