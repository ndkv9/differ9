const getSentences = paragraph => {
	const regex = /[^.!?]*[A-Za-z][^.!?]*[.!?]/g
	const sentences = paragraph.match(regex).map(s => s.trim())

	return sentences
}
