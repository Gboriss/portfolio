(() => {
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

    const sections = document.querySelectorAll('.section')

    sections.forEach((section) => {
        if(!section.classList.contains('active')) {
            section.classList.add('hide')
        }
    })

    const hamburgerBtn = document.querySelector('.hamburger-btn')
    const navMenu = document.querySelector('.nav-menu')
    const closeNavBtn = document.querySelector('.close-nav-menu')

    hamburgerBtn.addEventListener('click', showNavMenu)

    closeNavBtn.addEventListener('click', hideNavMenu)

    function showNavMenu () {
        navMenu.classList.add('open')
        // bodyScrollingToggle()
    }

    function hideNavMenu () {
        navMenu.classList.remove('open')
        // bodyScrollingToggle()
    }

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('link-item')) {
            if (event.target.hash !== '') {
                event.preventDefault()
                const hash = event.target.hash 
                console.log(hash)
                document.querySelector('.section.active').classList.add('hide')
                document.querySelector('.section.active').classList.remove('active')

                document.querySelector(hash).classList.add('active')
                document.querySelector(hash).classList.remove('hide')

                navMenu.querySelector('.active').classList.add('outer-shadow', 'hover-in-shadow')
                navMenu.querySelector('.active').classList.remove('active', 'inner-shadow')

                event.target.classList.add('active', 'inner-shadow')
                event.target.classList.remove('outer-shadow', 'hover-in-shadow')

                hideNavMenu()

            }
        }
    })

})()

