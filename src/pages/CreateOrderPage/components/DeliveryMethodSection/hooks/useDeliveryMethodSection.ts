import { useCreateOrderStore } from '@store/hooks/useCreateOrderStore.ts';

export const useDeliveryMethodSection = () => {
  const { options, setOption } = useCreateOrderStore();

  return {
    state: {
      options
    },
    functions: {
      setOption
    }
  };
};
