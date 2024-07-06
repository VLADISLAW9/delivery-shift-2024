import { z } from 'zod';

export const phoneSchema = z.object({
  phone: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(11, { message: 'Номер должен иметь минимум 11 цифр' })
});

export type PhoneSchema = z.infer<typeof phoneSchema>;
