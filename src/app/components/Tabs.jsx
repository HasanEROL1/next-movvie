"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
    const searchParams = useSearchParams();
    const genreParam = searchParams?.get("genre") || "popular";

    const tabs = [
        { id: 1, name: "En Popüler", url: "popular" },
        { id: 2, name: "En Sevilenler", url: "top_rated" },
        { id: 3, name: "Yakında Vizyona Girecekler", url: "upcoming" },
        { id: 4, name: "Şimdi Sinemalarda", url: "now_playing" },
    ];

    return (
        <div className="p-5 m-5 flex items-center justify-center gap-7 bg-gray-100 dark:bg-gray-900">
            {tabs.map((tab) => (
                <Link
                    key={tab.id}
                    href={`/?genre=${tab.url}`}
                    className={`cursor-pointer hover:opacity-75 transition-opacity ${tab.url === genreParam
                            ? "underline underline-offset-8 text-amber-600"
                            : ""
                        }`}
                >
                    {tab.name}
                </Link>
            ))}
        </div>
    );
};

export default Tabs;
