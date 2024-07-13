/* eslint-disable @typescript-eslint/no-unnecessary-condition -- Use deprecated `addListener` and `removeListener` to support Safari < 14 */
import { useState } from 'react'
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect'

interface UseMediaQueryOptions {
	defaultValue?: boolean
	initializeWithValue?: boolean
}

const IS_SERVER = typeof window === 'undefined'

export function useMediaQuery(
	query: string,
	{
		defaultValue = false,
		initializeWithValue = true,
	}: UseMediaQueryOptions = {},
): boolean {
	const getMatches = (q: string): boolean => {
		if (IS_SERVER) {
			return defaultValue
		}
		return window.matchMedia(q).matches
	}

	const [matches, setMatches] = useState<boolean>(() => {
		if (initializeWithValue) {
			return getMatches(query)
		}
		return defaultValue
	})

	// Handles the change event of the media query.
	function handleChange(): void {
		setMatches(getMatches(query))
	}

	useIsomorphicLayoutEffect(() => {
		const matchMedia = window.matchMedia(query)

		// Triggered at the first client-side load and if query changes
		handleChange()

		if (matchMedia.addListener) {
			matchMedia.addListener(handleChange)
		} else {
			matchMedia.addEventListener('change', handleChange)
		}

		return () => {
			if (matchMedia.removeListener) {
				matchMedia.removeListener(handleChange)
			} else {
				matchMedia.removeEventListener('change', handleChange)
			}
		}
	}, [query])

	return matches
}
