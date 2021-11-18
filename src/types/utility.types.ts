export interface Paginated<T> {
  count: number;
  results: T[];
}

export interface ListFilters {
  page?: number;
  search?: string;
  limit?: number;
}
