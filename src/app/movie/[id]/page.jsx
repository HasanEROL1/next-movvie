import { fetchMovieDetail } from "@/utils/service"
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }) => {
    const { id } = await params;
    const MovieDetail = await fetchMovieDetail(id)
    const imgUrl = "https://image.tmdb.org/t/p/original"
    console.log(MovieDetail, "detay")
    return (
        <div className="relative w-full h-screen">
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
                <div className="relative z-50 flex items-center justify-start h-full">
                    <div className="bg-transparent backdrop:blur-lg rounded-xl p-12 max-w-3xl shadow-2xl brightness-90">
                        <h1 className="text-7xl font-bold text-red-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-center">
                            {MovieDetail.title}
                        </h1>

                        <p className="text-gray-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] mt-4 text-center max-w-2xl mx-auto  text-xl">
                            {MovieDetail.overview}
                        </p>
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
