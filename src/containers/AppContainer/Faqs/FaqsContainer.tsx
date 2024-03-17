import { getAllFaqs } from '@Api/App';
import { STORAGE_KEYS } from '@Constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

export default function useFaqsContainer() {

  const {data: getFaqsData, isLoading: getFaqsDataLoading} = useQuery(
    [STORAGE_KEYS.GET_FAQS],
    () => getAllFaqs(),
    {cacheTime: 0, staleTime: 0},
  );

  return {
    getFaqsData,
    getFaqsDataLoading
  };
}
