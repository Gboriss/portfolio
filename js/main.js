(() => {
    const filterConteiner = document.querySelector('.portfolio-filter')
    const portfolioItemsContainer = document.querySelector('.portfolio-items')
    const portfolioItems = document.querySelectorAll('.portfolio-item')
    console.log(portfolioItems)
    filterConteiner.addEventListener('click', (event) => {
        if(event.target.classList.contains('filter-item') && 
        !event.target.classList.contains('active')) {
            filterConteiner.querySelector('.active').classList.remove('outer-shadow', 'active')

            event.target.classList.add('outer-shadow', 'active')
            const target = event.target.getAttribute('data-target')
            portfolioItems.forEach((item) => {
                if (target === item.getAttribute('data-category')) {
                    item.classList.remove('hide')
                    item.classList.add('show')
                } else {
                    item.classList.remove('show')
                    item.classList.add('hide')
                    
                }
            })
        }
    })
})()