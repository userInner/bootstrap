window.onload = function () {
    let navbar_header_list = document.getElementById("navbar-header-list")
    let li = navbar_header_list.querySelectorAll("li")
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener("mouseover", function () {
            this.className += " shadow-lg"
            temp.className += " text-warning"
        })
        li[i].addEventListener("mouseout", function () {
            this.className -= " shadow-lg"
            this.className = " text-dark"
        })
    }
}


