import { useData } from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}


export const usePlatforms = () => useData<Platform>("/platforms/lists/parents");