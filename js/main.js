function setup() {
    // Image animation
    const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

    portfolioItems.forEach(portfolioItem => {
        portfolioItem.addEventListener('mouseover', () => {
            portfolioItem.childNodes[1].classList.add('img-darken');
        })
        portfolioItem.addEventListener('mouseout', () => {
            portfolioItem.childNodes[1].classList.remove('img-darken');
        })
    })

    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-link-burger');
        const navLinks = document.querySelectorAll('.nav-link-burger li');

        burger.addEventListener('click', ()=>{
            nav.classList.toggle('nav-link-burger-active');

            navLinks.forEach((link, index) => {
                if(link.style.animation){
                    link.style.animation = '';
                } else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 8 + 0.5}s`;
                }
            })

            burger.classList.toggle('toggle');
        })     
    }
     
    navSlide(); 
}