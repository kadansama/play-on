import { genreFilterConfig } from "features/Filters/model/config";
import { UniversalFilter } from "../UniversalFilter";

export interface GenreFilterProps {
  onChange: (id: number | null) => void;
  value: number | null;
}

export const GenreFilter = ({ onChange, value }: GenreFilterProps) => (
  <UniversalFilter 
    config={genreFilterConfig}
    onChange={onChange}
    value={value}
  />
);

