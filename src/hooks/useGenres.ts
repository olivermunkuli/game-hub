import { useData } from "./useData";

interface Genre {
    id: number;
    name: string;
    image_background: string;
}


export const useGenres = () => useData<Genre>("/genres");