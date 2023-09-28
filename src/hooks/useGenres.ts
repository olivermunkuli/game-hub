import data from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

export const useGenres = () => ({ data, isLoading: false, error: null });
