import { getVideo } from './services.js'

const listCard = document.querySelector('.other-films__list')
const imgPath = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2'

const renderCard = async (data) => {
    listCard.textContent = ''

    Promise.all(data.map(async (item) => {
    	const { vote_average, poster_path, title, name } = item
		const video = await getVideo(item.id, item.media_type)
		const key = video.results[0]?.key

        const card = document.createElement('li')
        card.classList.add('other-films__item')
        card.innerHTML = `
			<a class="other-films__link" 
				data-rating="${vote_average}"
				${key ? 
					`href="https://youtu.be/${key}"`: 
					''
				}
			>
	            <img class="other-films__img" 
	            	 src="
	            	 ${poster_path ?
	            	 `${imgPath}${poster_path}` :
	            	 './img/poster_none.png'
	            	}"
	            	 alt="постер ${title || name}"
	            >
	        </a>
		`

		if (vote_average === 0) {
			const link = card.querySelector('.other-films__link')
			link.removeAttribute('data-rating')
		}

        
        return card
    })).then(cards => listCard.append(...cards))
}

export default renderCard