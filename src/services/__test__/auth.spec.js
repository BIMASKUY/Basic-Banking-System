import authService from '../auth.service.js'
import jwt from 'jsonwebtoken'

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn()
}))

describe('AuthService', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getTokenByLogin', () => {
    it('should return a token with user id', () => {
      const user = { id: 1 }
      const mockToken = '123'
      jwt.sign.mockReturnValue(mockToken)

      const token = authService.getTokenByLogin(user)
      expect(token).toBe(mockToken)
    })
  })

  describe('getTokenByForgotPassword', () => {
    it('should return a token with user email', () => {
      const user = { email: 'mughie@gmail.com' }
      const mockToken = '123'
      jwt.sign.mockReturnValue(mockToken)

      const token = authService.getTokenByForgotPassword(user)
      expect(token).toBe(mockToken)
    })
  })
})