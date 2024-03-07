/**
 * Fonts - Neue Montreal, Monument Extended
 *  */

import localFont from 'next/font/local'

export const montreal = localFont({
	src: [
		{
			path: '../public/fonts/Neue_Montreal/NM_Bold_700.woff2',
			weight: '700',

			style: 'normal'
		},
		{
			path: '../public/fonts/Neue_Montreal/NM_Bold_Italic_700.woff2',
			weight: '700',
			style: 'italic'
		},
		{
			path: '../public/fonts/Neue_Montreal/NM_Medium_500.woff2',
			weight: '500',
			style: 'normal'
		},
		{
			path: '../public/fonts/Neue_Montreal/NM_Medium_Italic_500.woff2',
			weight: '500',
			style: 'italic'
		},

		{
			path: '../public/fonts/Neue_Montreal/NM_Regular_400.woff2',
			weight: '400',
			style: 'normal'
		},
		{
			path: '../public/fonts/Neue_Montreal/NM_Italic_400.woff2',
			weight: '400',
			style: 'italic'
		},
		{
			path: '../public/fonts/Neue_Montreal/NM_Light_Italic_300.woff2',
			weight: '300',
			style: 'italic'
		}
	],
	variable: '--font-montreal'
})

export const monument = localFont({
	src: [
		{
			path: '../public/fonts/PPMonumentExtended/PPMonumentExtended-Black-BF645465a1e687b.woff2',
			weight: '700',
			style: 'black'
		},
		{
			path: '../public/fonts/PPMonumentExtended/PPMonumentExtended-BlackItalic-BF645465a213d75.woff2',
			weight: '700',
			style: 'italic'
		},
		{
			path: '../public/fonts/PPMonumentExtended/PPMonumentExtended-Regular-BF645465a253250.woff2',
			weight: '400',
			style: 'regular'
		}
	],
	variable: '--font-monument'
})
