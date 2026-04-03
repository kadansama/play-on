import { UniversalFilter } from "../UniversalFilter";
import { dateFilterConfig } from "./lib/config";
import { findDateIdByRange, idToDateRange } from "./lib/formatDate";
import { DateToQuery } from "./types";

interface Props {
  value: DateToQuery | null;
  onChange: (v: DateToQuery) => void;
}

export const DateFilter = ({ value, onChange }: Props) => {
  const currentId = value ? findDateIdByRange(value) : null;

  const handleChange = (id: number | null) => {
    const newRange = idToDateRange(id);
    onChange(newRange);
  };
  return (
    <UniversalFilter
      config={dateFilterConfig}
      value={currentId}
      onChange={handleChange}
    />
  );
};
