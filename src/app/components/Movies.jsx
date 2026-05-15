"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { memo, useCallback } from "react";

const Movies = memo(({ movie }) => {
    const imgUrl = "https://image.tmdb.org/t/p/w500";
    const router = useRouter();
    const handleClick = useCallback(() => {
        router.push(`/movie/${movie?.id}`);
    }, [movie?.id, router]);

    return (
        <div onClick={handleClick}
            className="group min-w-[470px] relative  rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow m-5 md:w- cursor-pointer">
            <Image
                style={{ objectFit: "cover" }}
                width={500}
                height={280}
                loading="lazy"
                src={
                    movie?.poster_path
                        ? `${imgUrl}${movie?.backdrop_path || movie?.poster_path}`
                        : "/placeholder.png"
                }
                alt={movie.title}
            />
            <div className="absolute bottom-0 left-0 right-0  p-4  h-1/2 flex flex-col justify-end  bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white ">
                <h3 className="w-max max-w-full font-bold text-2xl text-red-300 opacity-0 group-hover:opacity-100 transition-all duration-300 truncate">{movie.title}</h3>
                <div className="w-max max-w-full text-2xl font-bold text-red-200 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                    {movie?.release_date} - ⭐{movie.vote_average.toFixed(1)}
                </div>
            </div>
        </div>
    );
});

Movies.displayName = 'Movies';
export default Movies;



