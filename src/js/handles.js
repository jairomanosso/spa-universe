const bodyBg = document.querySelector('body')
const mainContainer = document.querySelector('#main-container')

const homeLink = document.querySelector('a[href="/"]')
const universeLink = document.querySelector('a[href="/universe"]')
const explorationLink = document.querySelector('a[href="/exploration"]')


export const Handles = {
    homePage() {
        bodyBg.classList.add("home-bg")
        bodyBg.classList.remove("universe-bg")
        bodyBg.classList.remove("exploration-bg")

        homeLink.classList.add("active")
        universeLink.classList.remove("active")
        explorationLink.classList.remove("active")

        mainContainer.classList.add('home-container')
        mainContainer.classList.remove('universe-container')
        mainContainer.classList.remove('exploration-container')
    },

    universePage() {
        bodyBg.classList.remove("home-bg")
        bodyBg.classList.add("universe-bg")
        bodyBg.classList.remove("exploration-bg")

        homeLink.classList.remove("active")
        universeLink.classList.add("active")
        explorationLink.classList.remove("active")

        mainContainer.classList.remove('home-container')
        mainContainer.classList.add('universe-container')
        mainContainer.classList.remove('exploration-container')
    },

    explorationPage() {
        bodyBg.classList.remove("home-bg")
        bodyBg.classList.remove("universe-bg")
        bodyBg.classList.add("exploration-bg")

        homeLink.classList.remove("active")
        universeLink.classList.remove("active")
        explorationLink.classList.add("active")

        mainContainer.classList.remove('home-container')
        mainContainer.classList.remove('universe-container')
        mainContainer.classList.add('exploration-container')
    }
}