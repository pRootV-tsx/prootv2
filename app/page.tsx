'use client'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

// Registration

import { monument } from '@/lib/fonts'
const HomePage = () => {
	useEffect(() => {
		// Register Plugin
		gsap.registerPlugin(ScrollTrigger, TextPlugin)
		const staggerItems = document.querySelectorAll('.stagger-item')
		console.log(staggerItems)

		// Animation

		gsap.to(staggerItems, {
			y: 200,
			opacity: 0,
			duration: 2,
			stagger: 0.2,
			ease: 'power2.in'
		})
	}, [])
	return (
		<section className="bg-black text-2xl  p-6   h-screen w-full text-white">
			<h1 className={`${monument.className} 4 font-bold text-xl`}>
				<span className="stagger-item">Hello,</span>
				<span className="stagger-item">World</span>
				<span className="stagger-item">World</span>
				<span className="stagger-item">World</span>
				<span className="stagger-item">World</span>
			</h1>
		</section>
	)
}

export default HomePage
