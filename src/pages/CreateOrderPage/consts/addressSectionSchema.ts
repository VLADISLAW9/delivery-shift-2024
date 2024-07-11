import { z } from 'zod';

export const addressSectionSchema = z.object({
  street: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(1, { message: 'Поле должно иметь минимум 1 букву' })
    .max(100, { message: 'Поле должно иметь максимум 100 букв' })
    .regex(/^[a-zA-Z0-9\s\/\\'`:;\-_.,#]*$/, { message: 'Имя содержит запрещенные символы' }),
  house: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(1, { message: 'Поле дол иметь минимум 1 букву' })
    .max(100, { message: 'Поле должно иметь максимум 100 букв' })
    .regex(/^[a-zA-Z0-9\s\/\\'`:;\-_.,#]*$/, { message: 'Имя содержит запрещенные символы' }),
  apartment: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(1, { message: 'Поле дол иметь минимум 1 букву' })
    .max(100, { message: 'Поле должно иметь максимум 100 букв' })
    .regex(/^[a-zA-Z0-9\s\/\\'`:;\-_.,#]*$/, { message: 'Имя содержит запрещенные символы' }),
  comment: z.string().optional()
});

export type AddressSectionSchema = z.infer<typeof addressSectionSchema>;
