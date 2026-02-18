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
        <div onClick={handleClick} className="min-w-[470px] relative imgContainer rounded overflow-hidden shadow-md hover:shadow-sm transition-shadow m-5 md:w- cursor-pointer">
            <Image
            style={{objectFit:"cover"}}
                width={470}
                height={280}
                loading="lazy"
                src={
                    movie?.poster_path
                        ? `${imgUrl}${movie?.backdrop_path || movie?.poster_path}`
                        : "/placeholder.png"
                }
                alt={movie.title}
            />
            <div className="absolute bottom-0 p-3 w-full h-1/2 flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-t from-black/50 to-transparent text-white ">
                <h3 className="font-bold text-3xl text-zinc-700">{movie.title}</h3>
                <div className="text-2xl font-bold text-zinc-700">
                    {movie?.release_date} - ⭐{movie.vote_average.toFixed(1)}
                </div>
            </div>
        </div>
    );
});

Movies.displayName = 'Movies';
export default Movies;
