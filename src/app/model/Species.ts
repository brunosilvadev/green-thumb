import { Care } from "./Care";

export interface Species {
    speciesId: number;
    commonName: string;
    scientificName: string;
    cares: Care[];
  }  