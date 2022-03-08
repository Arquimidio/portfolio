class Scroll{
    constructor(){
        this.toTopArrow = document.querySelector('.back-to-top')
        window.addEventListener('scroll', this.showOrHideArrow.bind(this))
    }

    showOrHideArrow(){
        if(scrollY < 100){
            this.toTopArrow.classList.add('hidden')
        }else{
            this.toTopArrow.classList.remove('hidden')
        }
    }
}

const scroll = new Scroll()
const revealList = ['.projects__card', '.services__item']
revealList.forEach(element => ScrollReveal({ reset: true }).reveal(element, { delay: 100 }))