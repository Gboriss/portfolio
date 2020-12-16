    const hamburgerBtn = document.querySelector('.hamburger-btn')
    const navMenu = document.querySelector('.nav-menu')
    const closeNavBtn = document.querySelector('.close-nav-menu')

    hamburgerBtn.addEventListener('click', showNavMenu)

    closeNavBtn.addEventListener('click', hideNavMenu)

    function showNavMenu () {
        navMenu.classList.add('open')
    }

    function hideNavMenu () {
        navMenu.classList.remove('open')
    }



const filterConteiner = document.querySelector('.portfolio-filter')
const portfolioItems = document.querySelectorAll('.portfolio-item')


filterConteiner.addEventListener('click', (event) => {

    if(event.target.classList.contains('filter-item') && 
    !event.target.classList.contains('active')) {
        filterConteiner.querySelector('.active').classList.remove('outer-shadow', 'active')

        event.target.classList.add('outer-shadow', 'active')
        const target = event.target.getAttribute('data-target')
        portfolioItems.forEach((item) => {
            if (target === item.getAttribute('data-category') || target === 'all') {
                item.classList.remove('hide')
                item.classList.add('show')
            } else {
                item.classList.remove('show')
                item.classList.add('hide')
                
            }
        })
    }
})

//-------

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('link-item')) {
        if (event.target.hash !== '') {

            event.preventDefault()
            const hash = event.target.hash 
            console.log(hash)

            navMenu.querySelector('.active').classList.add('outer-shadow', 'hover-in-shadow')
            navMenu.querySelector('.active').classList.remove('active', 'inner-shadow')

            if(navMenu.classList.contains('open')) {
                event.target.classList.add('active', 'inner-shadow')
                event.target.classList.remove('outer-shadow', 'hover-in-shadow')

                hideNavMenu()
            } else {
                let navItems = navMenu.querySelectorAll('.link-item')
                    navItems.forEach((item) => {
                    if (hash === item.hash) {
                        item.classList.add('active', 'inner-shadow')
                        item.classList.remove('outer-shadow', 'hover-in-shadow')
                    }
                })
            }
            window.location.hash = hash
        }
    }
})

window.addEventListener('load', () => {
    document.querySelector('.preloader').classList.add('fade-out')
    setTimeout(() => {
        document.querySelector('.preloader').style.display = 'none'
    }, 600)
})


const arrowTop = document.querySelector('.arrowTop')

arrowTop.onclick = function() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    // window.scrollTo(pageXOffset, 0)

}

window.addEventListener('scroll', function() {
    // if (arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight)) {
    //     arrowTop.style.display = 'block'
    // }
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        arrowTop.style.display = 'block'
    } else {
        arrowTop.style.display = 'none'
    }

})


let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        entry.isIntersecting ? entry.target.classList.replace('to-left', 'to-right') : entry.target.classList.replace('to-right', 'to-left')
    })
}, {
    threshold: .5
})

observer.observe(document.querySelector('img'))