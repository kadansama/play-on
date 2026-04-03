import { genreFilterConfig } from "features/Filters/model/config";
import { UniversalFilter } from "../UniversalFilter";

interface GenreFilterProps {
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

