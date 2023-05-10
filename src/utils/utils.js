export const collectIdsandDocs = doc => ({
	id: doc.id,
	...doc.data()
})