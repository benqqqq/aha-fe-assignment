import type { ReactElement } from 'react'
import Head from '../components/Head'

export default function HomePage(): ReactElement {
	return (
		<>
			<Head title='AHA Front-End Assignment Exam 1' />
			<div className='h-screen w-full bg-greyscaleBgDark text-white'>
				<div className='flex justify-center p-2'>
					<h1 className='text-2xl'>AHA Front-End Assignment Exam 1</h1>
				</div>
			</div>
		</>
	)
}
