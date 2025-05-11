import * as yup from 'yup'

export const registrationSchema = yup.object().shape({
  username: yup.string().required('Имя пользователя обязательно'),
  email: yup.string().email('Некорректный email').required('Email обязателен'),
  password: yup
    .string()
    .min(6, 'Пароль должен быть не менее 6 символов')
    .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
    .required('Пароль обязателен'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли должны совпадать')
    .required('Подтвердите пароль'),
  birthDate: yup.date().required('Дата рождения обязательна'),
  gender: yup.string().oneOf(['male', 'female'] as const).required('Укажите пол'),
  phone: yup.string().required('Номер телефона обязателен'),
})