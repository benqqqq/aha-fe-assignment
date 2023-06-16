import type { ReactElement } from 'react'
import { useCallback, useState } from 'react'
import Head from '../components/Common/Head'
import { PasswordTextField } from '../components/PasswordTextField'
import { AhaDatePicker } from '../components/AhaDatePicker'
import type { Dayjs } from 'dayjs'

export default function HomePage(): ReactElement {
	const [datePickerValue, setDatePickerValue] = useState<Dayjs | null>()
	const handleDatePickerValueChange = useCallback((value: Dayjs | null) => {
		setDatePickerValue(value)
	}, [])

	return (
		<>
			<Head title='AHA Front-End Assignment Exam 1' />
			<div className='h-screen w-full bg-greyscaleBgDark text-white'>
				<div className='flex justify-center p-2'>
					<h1 className='text-2xl'>AHA Front-End Assignment Exam 1</h1>
				</div>
				<div className='flex'>
					<div className='mt-10 flex h-screen w-1/2 justify-center'>
						<div>
							<h2 className='m-10 pr-8 text-center text-xl'>Password Input</h2>
							<PasswordTextField />
						</div>
					</div>
					<div className='mt-10 flex h-screen w-1/2 justify-center'>
						<div>
							<h2 className='m-10 pr-8 text-center text-xl'>Date Picker</h2>
							<AhaDatePicker
								defaultValue={datePickerValue}
								onChange={handleDatePickerValueChange}
								slotProps={{
									textField: {
										label: 'Birthday'
									}
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
