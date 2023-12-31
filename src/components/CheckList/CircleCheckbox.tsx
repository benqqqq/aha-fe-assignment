import type { ReactElement } from 'react'

export default function CircleCheckbox({
	checked
}: {
	checked: boolean
}): ReactElement {
	return checked ? (
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
			className='fill-primary-light'
		>
			<path d='M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z' />
		</svg>
	) : (
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className='stroke-greyscale-700'
		>
			<circle cx='10' cy='10' r='9' strokeWidth='2' />
			<path
				d='M5.90918 9.99966L8.63645 13.1815L14.5455 7.27238'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
