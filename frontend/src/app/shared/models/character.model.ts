import { Location } from "./location.model";
import { Origin } from "./origin.model";
import { Episode } from "./episode.model";

export interface Character {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  image?: string;
  url?: string;
  location?: Location;
  origin?: Origin;
  episode?: Episode;
}
