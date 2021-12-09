const listCard = document.querySelector('.other-films__list')
const imgPath = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2'

const renderCard = async (data) => {
    listCard.textContent = ''

    const cards = data.map(item => {
    	const { vote_average, poster_path, title, name } = item

        const card = document.createElement('li')
        card.classList.add('other-films__item')
        card.innerHTML = `
			<a class="other-films__link" data-rating="${vote_average}">
	            <img class="other-films__img" 
	            	 src="${imgPath}${poster_path}"
	            	 alt="постер ${title || name}"
	            >
	        </a>
		`
        listCard.append(card)
        return card
    })

}

export default renderCard