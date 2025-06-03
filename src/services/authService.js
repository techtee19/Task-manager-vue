import api, { API_URL } from './api'

export default {
  async login(usernameOrEmail, password) {
    try {
      // First check if the endpoint is accessible
      console.log('Checking API endpoint...')
      try {
        const testResponse = await api.get('/users')
        console.log('API endpoint accessible. Found', testResponse.data.length, 'users')
      } catch (testError) {
        console.error('API endpoint test failed:', testError)
        throw new Error(`API endpoint not accessible: ${testError.message}`)
      }

      // Try to find user by email
      console.log(`Looking for user with email: ${usernameOrEmail}`)
      const emailResponse = await api.get('/users', {
        params: { email: usernameOrEmail },
      })

      let user = emailResponse.data[0]

      // If not found by email, try to find by username
      if (!user) {
        console.log(`No user found with email, trying username: ${usernameOrEmail}`)
        const usernameResponse = await api.get('/users', {
          params: { username: usernameOrEmail },
        })
        user = usernameResponse.data[0]
      }

      // If user still not found, throw error
      if (!user) {
        console.log('No user found with provided credentials')
        throw new Error('User not found')
      }

      console.log('User found, checking password')
      // Check password
      if (user.password !== password) {
        throw new Error('Invalid password')
      }

      // Don't return the password to the client
      const { password: _, ...userWithoutPassword } = user

      // Store user data in localStorage for persistence
      localStorage.setItem('user', JSON.stringify(userWithoutPassword))

      return userWithoutPassword
    } catch (error) {
      console.error('Login error:', error)
      throw error // Re-throw the error for the calling code to handle
    }
  },

  async signup(userData) {
    try {
      // First check if users collection exists by getting all users
      console.log('Checking if users collection exists...')
      let existingUsers = []
      try {
        const testResponse = await api.get('/users')
        existingUsers = testResponse.data || []
        console.log('Users collection accessible. Found', existingUsers.length, 'users')
      } catch (testError) {
        console.error('Users collection test failed:', testError)
        throw new Error(`Users collection not accessible: ${testError.message}`)
      }

      // Check if user already exists by email (using manual filtering)
      console.log('Checking if email already exists:', userData.email)
      const emailExists = existingUsers.some(
        (user) => user.email && user.email.toLowerCase() === userData.email.toLowerCase(),
      )

      if (emailExists) {
        throw new Error('Email already in use')
      }

      // Check if username exists (if provided)
      if (userData.username) {
        console.log('Checking if username already exists:', userData.username)
        const usernameExists = existingUsers.some(
          (user) =>
            user.username && user.username.toLowerCase() === userData.username.toLowerCase(),
        )

        if (usernameExists) {
          throw new Error('Username already taken')
        }
      }

      // Create a new user
      const newUser = {
        name: userData.name,
        email: userData.email,
        username: userData.username || userData.email.split('@')[0],
        password: userData.password,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name)}&background=random`,
        createdAt: new Date().toISOString(),
      }

      console.log('Creating new user:', newUser)
      const response = await api.post('/users', newUser)
      console.log('User created successfully')

      // Don't return the password to the client
      const { password: _, ...userWithoutPassword } = response.data

      // Store user data in localStorage for persistence
      localStorage.setItem('user', JSON.stringify(userWithoutPassword))

      return userWithoutPassword
    } catch (error) {
      console.error('Signup error:', error)
      throw error
    }
  },

  // logs out the current user
  logout() {
    localStorage.removeItem('user')
  },

  // checks if user is authenticated
  getCurrentUser() {
    const userJson = localStorage.getItem('user')
    return userJson ? JSON.parse(userJson) : null
  },

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.getCurrentUser()
  },
}
