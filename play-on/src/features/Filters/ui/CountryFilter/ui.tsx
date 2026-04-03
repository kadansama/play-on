import { countryFilterConfig } from "features/Filters/model/config";
import { UniversalFilter } from "../UniversalFilter";

interface CountryFilterProps {
  onChange: (id: number | null) => void;
  value: number | null
}

export const CountryFilter = ({ onChange, value }: CountryFilterProps) => (
  <UniversalFilter 
    config={countryFilterConfig}
    onChange={onChange}
    value={value}
  />
);
