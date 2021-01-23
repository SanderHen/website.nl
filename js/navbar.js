function navBar() {
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