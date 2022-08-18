import { atom } from "recoil"
import { recoilPersist } from "recoil-persist";


export interface urlCard {
    originalUrl: string;
    shortenedUrl: string;
}

const { persistAtom } = recoilPersist({
    key: 'recoil-persist',
    storage: localStorage,
});

export const urlState = atom({
    key: "urlState",
    default: [] as urlCard[],
    effects_UNSTABLE: [persistAtom],
});