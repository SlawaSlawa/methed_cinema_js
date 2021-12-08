const API_KEY = 'afa9c5a8e7978dc0658d80dc3cd1b9c2'
const BASE_URL = 'https://api.themoviedb.org/3/'
const LANGUAGE = '&language=ru-RU'

const getData = url => {
return	fetch(url)
		.then(response => {
			if (response.ok) {
				return response.json()
			}

			throw `Что-то пошло не так, ошибка ${response.status}`
		})
		.catch(err => console.error(err))
}


export const getTrends = async (type = 'all', period = 'week', page = 1) => {
	const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`
	return await getData(url)
}