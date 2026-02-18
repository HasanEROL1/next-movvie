export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

if (!API_KEY) {
    console.warn("⚠️ TMDB API Key tanımlanmamış! .env.local dosyasında NEXT_PUBLIC_TMDB_API_KEY ayarlandığından emin olun.");
}

export const fetchMovies = async (genre = "popular") => {
    try {
        const res = await fetch(`${BASE_URL}/movie/${genre}?api_key=${API_KEY}&language=tr-TR&page=1`);
        if (!res.ok) {
            const err = await res.text();
            console.error("TMDB API Hatası:", err);
            throw new Error("API error");
        }
        const data = await res.json();
        return data.results || [];
    } catch (err) {
        console.error(err);
        return [];
    }
};

export const fetchMovieDetail = async (id) => {
    try {
        // ID'yi trim et ve validate et
        const cleanId = String(id).trim();
        
        if (!cleanId || isNaN(cleanId)) {
            throw new Error(`Geçersiz film ID'si: ${id}`);
        }
        
        // API key kontrolü
        if (!API_KEY) {
            throw new Error("API Key tanımlanmamış!");
        }
        
        const url = `${BASE_URL}/movie/${cleanId}?api_key=${API_KEY}&language=tr-TR`;
        console.log("API İsteği:", url);
        
        const res = await fetch(url);
        
        console.log("API Yanıt Durumu:", res.status, res.statusText);
        
        if (!res.ok) {
            const err = await res.text();
            console.error("TMDB API Hatası(detay):", err);
            throw new Error(`API error: ${res.status} - ${err}`);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("fetchMovieDetail Hata:", err);
        throw err;
    }
};

export const fetchSearchMovies = async (keyword) => {
    try {
        if (!keyword || keyword.trim() === "") {
            return [];
        }

        const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=tr-TR&query=${encodeURIComponent(keyword)}&page=1`;
        
        const res = await fetch(url);
        
        if (!res.ok) {
            const err = await res.text();
            console.error("TMDB Arama Hatası:", err);
            throw new Error("Search API error");
        }
        
        const data = await res.json();
        return data.results || [];
    } catch (err) {
        console.error("fetchSearchMovies Hata:", err);
        return [];
    }
};
