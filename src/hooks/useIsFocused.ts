import { useMemo, useState } from 'react'

interface IUseIsFocusedReturns {
	isFocused: boolean
	listenFocusProps: {
		onFocus: () => void
		onBlur: () => void
		onClick: () => void
	}
}

/**
 * A custom React hook that tracks the focus state of a component.
 *
 * @returns {IUseIsFocusedReturns} An object containing the focus state and event listeners.
 */
const useIsFocused = (): IUseIsFocusedReturns => {
	const [isFocused, setIsFocused] = useState(false)

	const listenFocusProps = useMemo(() => ({
			onFocus: () => setIsFocused(true),
			onBlur: () => setIsFocused(false),
			onClick: () => setIsFocused(true)
		}), [])

	return {
		isFocused,
		listenFocusProps
	}
}

export default useIsFocused
