const getSentences = paragraph => {
	const regex = /[^.!?]*[A-Za-z][^.!?]*[.!?]/g
	const sentences = paragraph.match(regex).map(s => s.trim())

	return sentences
}

const getCommon = (s1, s2) => {
	const arr1 = s1.split(' ')
	const arr2 = s2.split(' ')

	const commons = arr2.filter(item => arr1.includes(item))

	console.log(commons)
}
