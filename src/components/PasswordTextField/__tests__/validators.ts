import { passwordValidators } from '../validators'

describe('passwordValidators', () => {
	test('validates leastOneUpperCase', () => {
		const validator = passwordValidators.find(
			v => v.key === 'leastOneUpperCase'
		)

		expect(validator?.isValid('Password1!')).toBe(true)
		expect(validator?.isValid('password')).toBe(false)
		expect(validator?.isValid('12345678')).toBe(false)
	})

	test('validates leastOneLowerCase', () => {
		const validator = passwordValidators.find(
			v => v.key === 'leastOneLowerCase'
		)

		expect(validator?.isValid('Password1!')).toBe(true)
		expect(validator?.isValid('PASSWORD')).toBe(false)
		expect(validator?.isValid('12345678')).toBe(false)
	})

	test('validates leastOneNumber', () => {
		const validator = passwordValidators.find(v => v.key === 'leastOneNumber')

		expect(validator?.isValid('Password1!')).toBe(true)
		expect(validator?.isValid('password')).toBe(false)
		expect(validator?.isValid('!@#$%^&*()')).toBe(false)
	})

	test('validates leastOneSpecialCharacter', () => {
		const validator = passwordValidators.find(
			v => v.key === 'leastOneSpecialCharacter'
		)

		expect(validator?.isValid('Password1!')).toBe(true)
		expect(validator?.isValid('password')).toBe(false)
		expect(validator?.isValid('12345678')).toBe(false)
	})

	test('validates longerThanCharacter', () => {
		const validator = passwordValidators.find(
			v => v.key === 'longerThanCharacter'
		)
		const longPassword = 'a'.repeat(9)
		const shortPassword = 'a'.repeat(7)

		expect(validator?.isValid(longPassword)).toBe(true)
		expect(validator?.isValid(shortPassword)).toBe(false)
	})
})
