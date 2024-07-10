import { z } from 'zod';

export const userSectionSchema = z.object({
  firstname: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .max(60, { message: 'Имя должно иметь максимум 60 букв' })
    .min(1, { message: 'Имя должно иметь минимум 1 букву' })
    .regex(/^[^~!@#$%^&*()_+\=\[\]{};:"|\\,.<>\/?]*$/, {
      message: 'Имя содержит запрещенные символы'
    }),
  lastname: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .max(60, { message: 'Фамилия должно иметь максимум 60 букв' })
    .min(1, { message: 'Фамилия должна иметь минимум 1 букву' })
    .regex(/^[^~!@#$%^&*()_+\=\[\]{};:"|\\,.<>\/?]*$/, {
      message: 'Имя содержит запрещенные символы'
    }),
  middlename: z.string().optional(),
  phone: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(11, { message: 'Номер должен иметь минимум 11 цифр' })
});

export type UserSectionSchema = z.infer<typeof userSectionSchema>;
