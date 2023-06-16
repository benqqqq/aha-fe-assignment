import type { ChangeEvent, ReactElement, ReactNode, Ref } from 'react'
import { useCallback, useMemo, useState } from 'react'
import { TextField } from '@mui/material'
import { passwordValidators } from './validators'
import useIsFocused from '../../hooks/useIsFocused'
import { CheckListPopover } from '../CheckList'

export default function PasswordTextField(): ReactElement {
	const [password, setPassword] = useState('')
	const { isFocused, listenFocusProps } = useIsFocused()

	const handlePasswordChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setPassword(event.target.value)
		},
		[]
	)

	const checkListItems = useMemo(
		() =>
			passwordValidators.map(validator => ({
				key: validator.key,
				checked: validator.isValid(password),
				label: validator.message
			})),
		[password]
	)

	return (
		<CheckListPopover items={checkListItems} open={isFocused}>
			{(ref): ReactNode => (
				<TextField
					label='Password'
					type='password'
					value={password}
					onChange={handlePasswordChange}
					{...listenFocusProps}
					ref={ref as Ref<HTMLDivElement>}
				/>
			)}
		</CheckListPopover>
	)
}
