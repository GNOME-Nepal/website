import { FAQS_QUERY_KEY } from "@/constants";
import { getFaqs } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useFaqs = () =>
  useQuery({
    queryKey: FAQS_QUERY_KEY,
    queryFn: getFaqs,
  });
