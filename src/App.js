import React, { useState } from 'react'

const getSentences = paragraph => {
	const regex = /[^.!?]*[A-Za-z][^.!?]*[.!?]/g
	const sentences = paragraph.match(regex).map(s => s.trim())

	return sentences
}

const App = () => {
	const getCommon = (s1, s2) => {
		const arr1 = s1.split(' ')
		const arr2 = s2.split(' ')

		const commons = arr2.filter(item => arr1.includes(item))

		const indexs1 = commons.map(item => arr1.indexOf(item))
		const indexs2 = commons.map(item => arr2.indexOf(item))

		console.log('indexs1', indexs1)
		console.log('indexs2', indexs2)
	}

	getCommon(
		'This is a hard coding exercise.',
		'This is not a coding exorcist',
	)

	const [temp, setTemp] = useState(0)

	return (
		<div className='App'>
			<h3>hello world</h3>
		</div>
	)
}

export default App
