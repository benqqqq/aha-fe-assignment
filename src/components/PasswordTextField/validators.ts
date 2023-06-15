const PASSWORD_LENGTH_THRESHOLD = 8

interface IValidator<T> {
	key: string
	isValid: (value: T) => boolean
	message: string
}

export const passwordValidators: IValidator<string>[] = [
	{
		key: 'leastOneUpperCase',
		isValid: (value: string): boolean => /[A-Z]/.test(value),
		message: 'Have at least one uppercase letter'
	},
	{
		key: 'leastOneLowerCase',
		isValid: (value: string): boolean => /[a-z]/.test(value),
		message: 'Have at least one lowercase letter'
	},
	{
		key: 'leastOneNumber',
		isValid: (value: string): boolean => /\d/.test(value),
		message: 'Have at least one number'
	},
	{
		key: 'leastOneSpecialCharacter',
		isValid: (value: string): boolean =>
			/[!"#$%&'*+,./:;<=>?@[\\\]_`{|}~]/.test(value),
		message: 'Have at least one special character (!@#$...etc)'
	},
	{
		key: 'longerThanCharacter',
		isValid: (value: string): boolean =>
			value.length > PASSWORD_LENGTH_THRESHOLD,
		message: `Longer than ${PASSWORD_LENGTH_THRESHOLD} characters`
	}
]

export default passwordValidators
