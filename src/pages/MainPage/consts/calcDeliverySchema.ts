import { z } from 'zod';

export const calcDeliverySchema = z.object({
  package: z.string({ required_error: 'Поле обязательно для заполнения' }),
  senderPoint: z.string({ required_error: 'Поле обязательно для заполнения' }),
  receiverPoint: z.string({ required_error: 'Поле обязательно для заполнения' })
});

export type CalcDeliverySchema = z.infer<typeof calcDeliverySchema>;
