import { NEWSLETTER_QUERY_KEY } from "@/constants";
import { setSubscription } from "@/services";
import { useMutation } from "@tanstack/react-query";

export const useNewsletter = () =>
  useMutation({
    mutationKey: NEWSLETTER_QUERY_KEY,
    mutationFn: setSubscription,
  });
