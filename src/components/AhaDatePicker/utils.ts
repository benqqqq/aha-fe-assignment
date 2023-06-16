interface ICalculatePageAttributeReturn {
	startYear: number
	endYear: number
	isNextDisabled: boolean
	isPreviousDisabled: boolean
}

const YEARS_PER_PAGE = 20 // 5 rows * 4 columns
const ONE = 1 // XXX: although this looks unnecessary, we need this to prevent 'no-magic-number' eslint rule
const SYS_MIN_YEAR = 1
const SYS_MAX_YEAR = 9999

export const calculateWhichPageShouldDisplay = ({
	valueYear,
	todayYear,
	minYear: userMinYear,
	maxYear: userMaxYear
}: {
	valueYear?: number
	todayYear: number
	minYear?: number
	maxYear?: number
}): number => {
	const minYear = Math.max(userMinYear ?? SYS_MIN_YEAR, SYS_MIN_YEAR)
	const maxYear = Math.min(userMaxYear ?? SYS_MAX_YEAR, SYS_MAX_YEAR)

	let displayYear = valueYear ?? todayYear
	displayYear = Math.max(displayYear, minYear)
	displayYear = Math.min(displayYear, maxYear)

	return Math.floor(displayYear / YEARS_PER_PAGE)
}

export const calculatePageAttribute = ({
	page,
	minYear: userMinYear,
	maxYear: userMaxYear
}: {
	page: number
	minYear?: number
	maxYear?: number
}): ICalculatePageAttributeReturn => {
	const minYear = Math.max(userMinYear ?? SYS_MIN_YEAR, SYS_MIN_YEAR)
	const maxYear = Math.min(userMaxYear ?? SYS_MAX_YEAR, SYS_MAX_YEAR)

	const startYear = Math.max(page * YEARS_PER_PAGE + ONE, minYear)
	const endYear = Math.min(startYear + YEARS_PER_PAGE - ONE, maxYear)

	const isNextDisabled = endYear >= maxYear
	const isPreviousDisabled = startYear <= minYear
	return { startYear, endYear, isNextDisabled, isPreviousDisabled }
}

/**
 * transfer year number to correct dayjs input format
 * dayjs('1') = 2000 (incorrect)
 * dayjs('0001') = 0001 (correct)
 * @param year
 */
export const yearToDayjsInput = (year: number): string => {
	const PAD = 4
	return year.toString().padStart(PAD, '0')
}
