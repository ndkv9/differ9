const getSentences = paragraph => {
	const regex = /[^.!?]*[A-Za-z][^.!?]*[.!?]/g
	const sentences = paragraph.match(regex).map(s => s.trim())

	return sentences
}

const fillDiff = (
	combine,
	commonsArray,
	arr1,
	arr2,
	isOrigin = false,
) => {
	let pre, mid, post

	const indexArray1 = commonsArray.map(item => arr1.indexOf(item))
	const indexArray2 = arr2
		? commonsArray.map(item => arr2.indexOf(item))
		: []

	if (indexArray1[0] !== 0) {
		pre = arr1.slice(0, indexArray1[0])
		indexArray2[0]
			? combine.splice(1, 0, pre)
			: combine.splice(0, 0, pre)
	}

	indexArray1.map((item, index) => {
		if (
			index < indexArray1.length - 1 &&
			indexArray1[index + 1] - item !== 1
		) {
			mid = arr1.slice(item + 1, indexArray1[index + 1])
			combine.splice(combine.indexOf(commonsArray[index]) + 1, 0, mid)
		}
	})

	if (arr1[arr1.length - 1] !== indexArray1[indexArray1.length - 1]) {
		post = arr1.slice(indexArray1[indexArray1.length - 1] + 1)
		isOrigin
			? combine.splice(combine.length - 1, 0, post)
			: combine.push(post)
	}

	return combine
}

const combine = (s1, s2) => {
	if (s1 === s2) return s1

	const arr1 = s1.split(' ')
	const arr2 = s2.split(' ')

	const commons = arr1.filter(item => arr2.includes(item))

	if (commons.length === 0) {
		return arr1.concat(arr2).join(' ')
	}

	let combine = [...commons]

	combine = fillDiff(combine, commons, arr2)
	combine = fillDiff(combine, commons, arr1, arr2, true)

	return combine.flat().join(' ')
}
