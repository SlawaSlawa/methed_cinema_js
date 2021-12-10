import { getTrends, getVideo } from './services.js'
import renderCard from './renderCard.js'


const filmWeek = document.querySelector('.film-week')
const IMG_PATH = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/'

const firstRender = (data, video) => {
	const { 
			backdrop_path: backdropPath, 
			original_title: originalTitle, 
			title, 
			original_name: originalName, 
			name, 
			vote_average: voteAverage
			} = data
	// const { key } = video
	// console.log(keyVideo)
	filmWeek.innerHTML = `
		<div class="container film-week__container" 
			 data-rating="${voteAverage}">
            <div class="film-week__poster-wrapper">
                <img class="film-week__poster" 
                	 src="${IMG_PATH}${backdropPath}"
                	 alt="постер ${title || name}">
                <p class="film-week__title_origin">
                	${originalTitle || originalName}
                </p>
            </div>
            <h2 class="film-week__title">${title || name}</h2>
            ${video ?
            	`<a class="film-week__watch-trailer tube" 
            		href="https://youtu.be/${video.key}" 
            		aria-label="смотреть трейлер"></a>` :
            	''}
        </div>
	`
}

const renderVideo = async () => {
	const data = await getTrends()

	const [ firstCard, ...otherCard ] = data.results
	otherCard.length = 12

	const video = await getVideo(firstCard.id, firstCard.media_type)
	
	firstRender(firstCard, video.results[0])
	renderCard(otherCard)
}

export default renderVideo

