import { z } from 'zod';

export const addressSectionSchema = z.object({
  firstname: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(1, { message: 'Имя должно иметь минимум 1 букву' }),
  lastname: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(1, { message: 'Фамилия должна иметь минимум 1 букву' }),
  middlename: z.string().optional(),
  phone: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(11, { message: 'Номер должен иметь минимум 11 цифр' })
});

export type AddressSectionSchema = z.infer<typeof addressSectionSchema>;
