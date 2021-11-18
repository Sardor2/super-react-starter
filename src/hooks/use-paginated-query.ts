import { QueryKey, useInfiniteQuery } from 'react-query';

import qs from 'qs';
import request from '../services/request';
import { ListFilters, Paginated } from '../types/utility.types';

interface Details extends Omit<ListFilters, 'page'> {
  path: string;
}

const usePaginatedQuery = <T>(queryKey: QueryKey, details: Details) =>
  useInfiniteQuery(
    queryKey,
    async ({ pageParam = 1 }) => {
      const data = await request
        .get<Paginated<T>>(
          details.path +
            qs.stringify(
              {
                page: pageParam,
                limit: details.limit ?? 10,
                search: details.search,
              },
              { addQueryPrefix: true }
            )
        )
        .then((res) => res.data);
      return {
        ...data,
        nextPage: pageParam + 1,
        totalPages: Math.ceil(Number(data.count) / (details?.limit ?? 10)),
      };
    },
    {
      getNextPageParam(lastPage) {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    }
  );

export default usePaginatedQuery;
