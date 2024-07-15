import { z } from 'zod';

const alphanumericRegex = /^[a-zA-Z0-9\s\/\\'`:;\-_.,#]+$/;
const specialCharRegex = /^[^\s\/\\'`:;\-_.,#].*[^\s\/\\'`:;\-_.,#]$/;

export const addressSectionSchema = z.object({
  street: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(1, { message: 'Поле должно иметь минимум 1 букву' })
    .max(100, { message: 'Поле должно иметь максимум 100 букв' })
    .regex(specialCharRegex, {
      message: 'Поле не должно начинаться или заканчиваться специальными символами'
    }),
  house: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(1, { message: 'Поле должно иметь минимум 1 букву' })
    .max(100, { message: 'Поле должно иметь максимум 100 букв' })
    .regex(alphanumericRegex, { message: 'Поле содержит запрещенные символы' })
    .regex(specialCharRegex, {
      message: 'Поле не должно начинаться или заканчиваться специальными символами'
    }),
  apartment: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(1, { message: 'Поле должно иметь минимум 1 букву' })
    .max(100, { message: 'Поле должно иметь максимум 100 букв' })
    .regex(alphanumericRegex, { message: 'Поле содержит запрещенные символы' })
    .regex(specialCharRegex, {
      message: 'Поле не должно начинаться или заканчиваться специальными символами'
    }),
  comment: z.string().optional()
});

export type AddressSectionSchema = z.infer<typeof addressSectionSchema>;
