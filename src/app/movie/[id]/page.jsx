import MovieOverview from "@/app/components/MovieOverview";
import { fetchMovieDetail } from "@/utils/service"
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }) => {
    const { id } = await params;
    const MovieDetail = await fetchMovieDetail(id)
    const imgUrl = "https://image.tmdb.org/t/p/original"
    console.log(MovieDetail, "detay")
    return (
        <div className="relative w-full min-h-screen lg:h-screen flex flex-col md:flex-row items-center pt-32 pb-10 md:pt-0 px-6 öd:px-16  overflow-y-auto bg-zinc-950 z-50">
            <Image
                style={{ objectFit: "cover" }}
                fill
                priority
                src={
                    MovieDetail.poster_path
                        ? `${imgUrl}${MovieDetail?.backdrop_path || MovieDetail.poster_path}`
                        : "/placeholder.png"
                }
                alt={MovieDetail.title} className="opacity-60 brightness-30"
            />
            <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-black/40 inset-0  px-10 space-y-2">
                <div className="relative z-50 flex items-center justify-center h-full">
                    <div className="bg-transparent  rounded-xl p-12 max-w-3xl shadow-xl brightness-90">
                        <h1 className="text-7xl font-bold text-red-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-center">
                            {MovieDetail.title}
                        </h1>

                        <MovieOverview text={MovieDetail.overview} />
                        <div className="flex flex-row justify-between text-lg font-bold text-gray-400 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] mt-8">
                            <p> <span> 📅  Vizyona Giriş: </span>
                                {MovieDetail?.release_date?.split("-")[0]} </p>
                            <p className="text-xl ">    <span className="text-xl">⭐</span>
                                <span className="ml-2">{MovieDetail?.vote_average.toFixed(1)}</span></p>
                        </div>

                        <Link href="#" className="mt-10 flex justify-center "><span className="px-10 py-4 bg-transparent rounded-lg text-zinc-200 font-bold text-2xl   hover:bg-zinc-200 hover:text-black/80 transition-colors duration-300">Trailer</span></Link>

                    </div>



                </div>

            </div>


        </div>
    )
}

export default Page
