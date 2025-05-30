import axios from 'axios'

const API_URL = 'http://localhost:3000'

export default {
  async login(username, password) {
    try {
      // find user by username
      const response = await axios.get(`${API_URL}/users?username=${username}`)

      if (response.data.length === 0) {
        throw new Error('User not found')
      }

      const user = response.data[0]

      // checks password
      if (user.password !== password) {
        throw new Error('Invalid password')
      }

      //   Don't return the password to the client
      const { password: _, ...userWithoutPassword } = user

      //   store user data in localStorage for persistence
      localStorage.setItem('user', JSON.stringify(userWithoutPassword))

      return userWithoutPassword
    } catch (error) {
      throw error
    }
  },

  //   logs out the current user
  logout() {
    localStorage.removeItem('user')
  },

  //   checks if user is authenticated
  getCurrentUser() {
    const userJson = localStorage.getItem('user')
    return userJson ? JSON.parse(userJson) : null
  },
}
