import { REGIONS } from '@constants/index';
import { Border } from './border.model';

export interface CountryRequest {
  name: Name;
  tld?: string[];
  cca3: string;
  currencies?: { [key: string]: Currency };
  capital?: string[];
  languages?: { [key: string]: string };
  area: number;
  flag: string;
  maps: Maps;
  population: number;
  timezones: string[];
  continents: Continent[];
  region: Region;
  subregion: string;
  flags: Flags;
  coatOfArms: CoatOfArms;
  borders?: string[];
  demonyms?: { eng: { m: string } };
}

export interface CountryRequestWithBorders
  extends Omit<CountryRequest, 'borders'> {
  borders: Border[] | null;
}

interface Name {
  common: string;
  official: string;
}

interface Currency {
  name: string;
  symbol: string;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export const continents = [
  'Africa',
  'Antarctica',
  'Asia',
  'Europe',
  'North America',
  'Oceania',
  'South America',
] as const;
type Continent = (typeof continents)[number];

type Region = (typeof REGIONS)[number];

interface CoatOfArms {
  png?: string;
  svg?: string;
}

interface Flags {
  png: string;
  svg: string;
  alt?: string;
}
