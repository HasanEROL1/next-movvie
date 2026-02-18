"use client"

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchMovies } from "@/utils/service";
import Movies from "./components/Movies";

export default function Page() {
  const searchParams = useSearchParams();
  const genreParam = searchParams?.get("genre") || "popular";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies(genreParam);
      setMovies(data);
    };
    getMovies();
  }, [genreParam]);

  return (
    <div>
  
      <div className="flex flex-wrap justify-center gap-3">
        {movies.map((movie) => (
          <Movies key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
