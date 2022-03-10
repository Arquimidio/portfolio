class Scroll{
    constructor(){
        this.toTopArrow = document.querySelector('.back-to-top')
        this.revealList = ['.projects__card', '.services__item']
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

class ProjectModal{
    constructor(){
        this.container = document.querySelector('.modal')
        this.image = document.getElementById('modal__image')
        this.title = document.getElementById('modal__title')
        this.paragraph = document.getElementById('modal__paragraph')
        this.projectsBtns = [...document.querySelectorAll('.projects__card')]
        this.closeBtn = document.getElementById('modal__close')
    }

    showProject(e){
        this.container.style.display = 'flex'
        const parent = e.target.parentElement.parentElement
        const projectImage = parent.querySelector('img')
        const projectTitle = parent.querySelector('h4')
        const projectParagraph = parent.querySelector('p')
        this.image.src = projectImage.src
        this.title.innerText = projectTitle.innerText
        this.paragraph.innerText = projectParagraph.innerText
    }

    initialize(){
        this.projectsBtns.forEach(btn => btn.addEventListener('click', this.showProject.bind(this)))
        this.closeBtn.addEventListener('click', this.close.bind(this))
        return this
    }

    close(e){
        this.container.style.display = 'none'
    }
}

class LateralMenu{
    constructor(){
        this.hamburguer = document.getElementById('hamburguer')
        this.menu = document.getElementById('menu')
        this.hamburguer.addEventListener('click', this.showMenu.bind(this))
        this.hamburguerBars = document.getElementById('hamburguer__btn')
        this.toggled = false
        this.hideTimeout = false
    }

    showMenu(){
        if(this.toggled){
            this.hamburguerBars.classList.remove('open')
            this.menu.style.transform = 'translateX(100%)'
            this.hideTimeout = setTimeout(() => this.menu.style.display = 'none', 1000)
        }else{
            this.hamburguerBars.classList.add('open')
            this.hamburguer.classList.add('hamburguer--fixed')
            this.menu.style.display = 'flex'
            if(this.hideTimeout){
                clearTimeout(this.hideTimeout)
            }
            setTimeout(() => this.menu.style.transform = 'translateX(0)')
        }
        this.toggled = !this.toggled
    }
}

const scroll = new Scroll()
const lateralMenu = new LateralMenu()
scroll.revealList.forEach(element => ScrollReveal({ reset: true }).reveal(element, { delay: 100 }))

const modal = new ProjectModal().initialize()

