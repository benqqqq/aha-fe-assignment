import type { ReactElement } from 'react'
import Head from '../components/Head'
import { TextField } from '@mui/material'

export default function HomePage(): ReactElement {
	return (
		<>
			<Head title='AHA Front-End Assignment Exam 1' />
			<div className='h-screen w-full bg-greyscaleBgDark text-white'>
				<div className='flex justify-center p-2'>
					<h1 className='text-2xl'>AHA Front-End Assignment Exam 1</h1>
				</div>
				<div className='mt-10 flex w-1/2 justify-center'>
					<TextField label='Password' />
				</div>
			</div>
		</>
	)
}
