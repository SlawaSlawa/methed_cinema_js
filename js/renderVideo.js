import { getTrends } from './services.js'

const filmWeek = document.querySelector('.film-week')
const IMG_PATH = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/'

const firstRender = data => {
	const { backdrop_path, original_title, title, original_name, name, vote_average, video } = data
	
	filmWeek.innerHTML = `
		<div class="container film-week__container" 
			 data-rating="${vote_average}">
            <div class="film-week__poster-wrapper">
                <img class="film-week__poster" 
                	 src="${IMG_PATH}${backdrop_path}"
                	 alt="постер ${title || name}">
                <p class="film-week__title_origin">
                	${original_title || original_name}
                </p>
            </div>
            <h2 class="film-week__title">${title || name}</h2>
            ${video ? '<a class="film-week__watch-trailer tube" href="https://youtu.be/V0hagz_8L3M" aria-label="смотреть трейлер"></a>' : ''}
        </div>
	`
}

const renderVideo = async () => {
	const data = await getTrends()
	firstRender(data.results[0])
}

export default renderVideo

