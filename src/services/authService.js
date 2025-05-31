import axios from 'axios'

const API_URL = 'http://localhost:3000'

export default {
  async login(usernameOrEmail, password) {
    try {
      // find user by username or email
      const response = await axios.get(`${API_URL}/users?username=${usernameOrEmail}`)
      const user = response.data[0]

      if (!user) {
        // if not found by username, try by email
        const emailResponse = await axios.get(`${API_URL}/users?email=${usernameOrEmail}`)
        const userByEmail = emailResponse.data[0]

        if (!userByEmail) {
          throw new Error('User not found')
        }

        // checks password
        if (userByEmail.password !== password) {
          throw new Error('Invalid password')
        }

        //   Don't return the password to the client
        const { password: _, ...userWithoutPassword } = userByEmail

        //   store user data in localStorage for persistence
        localStorage.setItem('user', JSON.stringify(userWithoutPassword))

        return userWithoutPassword
      }

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

  async signup(userData) {
    try {
      // Check if user already exists
      const existingEmail = await axios.get(`${API_URL}/users?email=${userData.email}`)
      if (existingEmail.data.length > 0) {
        throw new Error('Email already in use')
      }

      // Check if username exists (if provided)
      if (userData.username) {
        const existingUsername = await axios.get(`${API_URL}/users?username=${userData.username}`)
        if (existingUsername.data.length > 0) {
          throw new Error('Username already taken')
        }
      }

      // Create a new user
      const newUser = {
        name: userData.name,
        email: userData.email,
        username: userData.username || userData.email.split('@')[0], // Use email prefix as username if not provided
        password: userData.password, // In a real app, you would hash this
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name)}&background=random`,
        createdAt: new Date().toISOString(),
      }

      const response = await axios.post(`${API_URL}/users`, newUser)

      // Don't return the password to the client
      const { password: _, ...userWithoutPassword } = response.data

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
