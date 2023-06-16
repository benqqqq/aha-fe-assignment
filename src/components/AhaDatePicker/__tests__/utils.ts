import { describe } from 'vitest'
import {
	calculatePageAttribute,
	calculateWhichPageShouldDisplay
} from '../utils'

// YEARS_PER_PAGE = 20

describe('calculateWhichPageShouldDisplay', () => {
	test('should calculate the correct page number', () => {
		expect(
			calculateWhichPageShouldDisplay({
				valueYear: 2020,
				todayYear: 2022,
				minYear: 2000,
				maxYear: 2030
			})
		).toBe(101) // 2020 / 20
	})

	test('should use default values when necessary', () => {
		expect(
			calculateWhichPageShouldDisplay({
				todayYear: 2022
			})
		).toBe(101) // 2022 / 20
	})

	test('should limit the display year within the allowed range', () => {
		expect(
			calculateWhichPageShouldDisplay({
				valueYear: 1995,
				todayYear: 2022,
				minYear: 2000,
				maxYear: 2030
			})
		).toBe(100) // 2000 / 20

		expect(
			calculateWhichPageShouldDisplay({
				valueYear: 2055,
				todayYear: 2022,
				minYear: 2000,
				maxYear: 2030
			})
		).toBe(101) // 2030 / 20
	})
})

describe('calculatePageAttribute', () => {
	test('should calculate the correct page attributes', () => {
		const result = calculatePageAttribute({
			page: 2,
			minYear: 2000,
			maxYear: 2015
		})

		expect(result.startYear).toBe(2000) // 2 * 20 + 1 = 41 , 41 < 2000
		expect(result.endYear).toBe(2015) // 2000 + 20 - 1 = 2019 > 2015
		expect(result.isNextDisabled).toBe(true) // endYear (2015) >= maxYear (2015)
		expect(result.isPreviousDisabled).toBe(true) // startYear (2000) <= minYear (2000)
	})

	test('should handle default values correctly', () => {
		const result = calculatePageAttribute({
			page: 0
		})

		expect(result.startYear).toBe(1) // 0 * 20 + 1 = 1
		expect(result.endYear).toBe(20) // 1 + 20 - 1 = 20
		expect(result.isNextDisabled).toBe(false) // endYear (20) < default maxYear
		expect(result.isPreviousDisabled).toBe(true) // startYear (1) <= default minYear
	})
})
