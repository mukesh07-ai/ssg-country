import { Border } from './border.model';
import { CountryRequest } from './country-request.model';

export interface CountryDetail
  extends Pick<
    CountryRequest,
    | 'name'
    | 'population'
    | 'cca3'
    | 'coatOfArms'
    | 'area'
    | 'region'
    | 'subregion'
    | 'flag'
  > {
  capital: string;
  demonym: string;
  continents: string;
  isInMultipleContinents: boolean;
  currencies: string;
  hasMultipleCurrencies: boolean;
  languages: string;
  hasMultipleLanguages: boolean;
  borders: Border[] | null;
}
