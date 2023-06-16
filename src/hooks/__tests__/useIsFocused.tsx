import useIsFocused from '../useIsFocused'
import { act, renderHook } from '@testing-library/react-hooks'
import { expect } from 'vitest'

describe('useIsFocused', () => {
	test('should be focus when event hooks are called', () => {
		const { result } = renderHook(() => useIsFocused())
		expect(result.current.isFocused).toBe(false)

		act(() => {
			result.current.listenFocusProps.onFocus()
		})
		expect(result.current.isFocused).toBe(true)

		act(() => {
			result.current.listenFocusProps.onBlur()
		})
		expect(result.current.isFocused).toBe(false)

		act(() => {
			result.current.listenFocusProps.onClick()
		})
		expect(result.current.isFocused).toBe(true)
	})
})
