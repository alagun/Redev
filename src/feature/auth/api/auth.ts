import { TLoginForm } from '@/feature/login-form/models/login'
import { TRegistrationForm } from '@/feature/registration-form/models/registration'
import { API_AUTH_URL, API_REGISTER_URL } from '@/shared/config/api'
import { setToken } from '@/shared/lib/auth/token'
import axios from 'axios'

const calculateAge = (birthDate: Date | string): number => {
  const birthDateObj = new Date(birthDate)
  const today = new Date()
  let age = today.getFullYear() - birthDateObj.getFullYear()
  const monthDiff = today.getMonth() - birthDateObj.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
	  age--
  }

  return age
}

export const login = async ({ email, password }:TLoginForm) => {
  const response = await axios.post(`${API_AUTH_URL}/login`, { email, password })

  setToken(response.data.token)

  return response.data
}

export const register = async ({
  username,
  email,
  birthDate,
  confirmPassword,
  gender,
}:TRegistrationForm,
) => {
  const age = calculateAge(birthDate)

  const response = await axios.post(API_REGISTER_URL, {
    username,
    email,
    age,
    password : confirmPassword,
    gender,
  })

  setToken(response.data.token)

  return response.data
}