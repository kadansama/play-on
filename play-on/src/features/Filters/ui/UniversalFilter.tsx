import { useMemo } from "react";
import { Select } from "shared/ui/Select";
import { BaseFilterOption, FilterConfig } from "shared/ui/Select/types";
import { DateToQuery } from "./DateFilter/types";

interface BaseItemId {
  id: number;
}

interface BaseItemFields {
  [key: string]: string;
}

interface BaseDataItem<T = BaseItemId & BaseItemFields> {
  data?: T[];
  isLoading: boolean;
}

interface UniversalFilterProps<T> {
  config: FilterConfig<T>;
  onChange: (value: T) => void;
  value?: T | null
}

export const UniversalFilter = <T,>({ config, onChange, value }: UniversalFilterProps<T>) => {
  const { data = [], isLoading }: BaseDataItem = config.queryHook?.() || { data: [], isLoading: false };
  const options: BaseFilterOption[] = useMemo(() => {
    const baseOptions = config.staticData ||
      data.map(item => ({
        id: item.id,
        label: item.country || item.genre || item.date || item.toString()
      }));

    return config.allOptionLabel
      ? [{ id: null, label: config.allOptionLabel }, ...baseOptions]
      : baseOptions;
  }, [data, config.staticData, config.allOptionLabel]);

  const handleClick = (value: string) => {
    const transformedValue = config.transformValue(value, config.allOptionLabel);
    onChange(transformedValue as T);
  };

  const selectValue = useMemo(() => {
    if (value === null || value === undefined || value === 0) return "";
    if (typeof value === 'object' && 'yearFrom' in value && 'yearTo' in value) {
      const dateValue = value as DateToQuery;
      return `${dateValue.yearFrom}-${dateValue.yearTo}`;
    }
    if (typeof value === 'object') {
      return JSON.stringify(value);
    }

    return String(value);
  }, [value]);

  if (isLoading) return "Загрузка";

  return (
    <Select
      data={options}
      name={config.name}
      onClick={handleClick}
      value={selectValue}
    />
  );
};