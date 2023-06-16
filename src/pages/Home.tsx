import type { ReactElement } from 'react'
import Head from '../components/Head'
import { TextField } from '@mui/material'
import CheckList from '../components/CheckList'

export default function HomePage(): ReactElement {
	const items = [
		{
			// eslint-disable-next-line @typescript-eslint/no-magic-numbers
			key: 1,
			checked: true,
			label: 'Item 1'
		},
		{
			// eslint-disable-next-line @typescript-eslint/no-magic-numbers
			key: 2,
			checked: false,
			label: 'Item 2'
		},
		{
			// eslint-disable-next-line @typescript-eslint/no-magic-numbers
			key: 3,
			checked: true,
			label: 'Item 3'
		}
	]
	return (
		<>
			<Head title='AHA Front-End Assignment Exam 1' />
			<div className='h-screen w-full bg-greyscaleBgDark text-white'>
				<div className='flex justify-center p-2'>
					<h1 className='text-2xl'>AHA Front-End Assignment Exam 1</h1>
				</div>
				<div className='mt-10 flex w-1/2 justify-center'>
					<TextField label='Password' />
					<CheckList items={items} />
				</div>
			</div>
		</>
	)
}
