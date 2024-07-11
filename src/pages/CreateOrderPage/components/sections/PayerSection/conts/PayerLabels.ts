import type { Payer } from '@store/hooks/useCreateOrderStore';

export const PayerLabels: { [key in Payer]: string } = {
  RECEIVER: 'Получатель',
  SENDER: 'Отправитель'
};
