import * as yup from 'yup'
import { loginSchema } from '../lib/ValidationSchema'

export type TLoginForm = yup.InferType<typeof loginSchema>;