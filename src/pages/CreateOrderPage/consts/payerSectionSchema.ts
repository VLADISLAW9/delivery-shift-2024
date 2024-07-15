import { z } from 'zod';

export const payerSectionSchema = z.object({
  payer: z.string({ required_error: 'Поле обязательно для заполнения' })
});

export type PayerSectionSchema = z.infer<typeof payerSectionSchema>;
