export interface BaseFilterOption {
  id: number | null;
  label: string;
}

export interface FilterConfig<T> {
  name: string;
  allOptionLabel?: string;
  queryHook?: () => { data?: any[]; isLoading: boolean };
  staticData?: BaseFilterOption[];
  transformValue: (value: string, allOptionLabel?: string) => T;
}

export interface SelectOption {
  id: number | null;
  label: string;
}

export interface SelectProps {
  data: SelectOption[];
  name: string;
  onClick: (value: string) => void;
  value? : string | null
}