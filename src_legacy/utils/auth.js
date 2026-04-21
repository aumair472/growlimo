// Auth utility functions

const TOKEN_KEY = 'growlimo_admin_token'

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}

export const isAuthenticated = () => {
  return !!getToken()
}

export const getAuthHeaders = () => {
  const token = getToken()
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  }
}

export const getAuthHeadersMultipart = () => {
  const token = getToken()
  return {
    ...(token && { Authorization: `Bearer ${token}` }),
  }
}

