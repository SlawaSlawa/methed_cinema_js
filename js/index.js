'use strict'
import slideMenu from './menu.js'
import renderVideo from './renderVideo.js'
import menuLink from './menuLink.js'
import search from './search.js'

slideMenu({
		openBtn: '.header__burger-btn',
		menu: '.navigation',
		classActiveMenu: 'navigation_active',
		closeTrigger: ['.navigation__close', '.navigation__link']
	})

renderVideo()
menuLink()
search()