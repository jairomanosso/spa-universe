import { Handles } from "./handles.js"

export class Router {

    routes = {}

    add (routeName, page) {
        this.routes[routeName] = page
    }

    route (event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle () {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]

        if (pathname === "/") {
            Handles.homePage();
          } else if (pathname === "/universe") {
            Handles.universePage();
          } else if (pathname === "/exploration") {
            Handles.explorationPage();
          }

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#main-container').innerHTML = html
        })
    }

}