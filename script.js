const parks = ['Park Szczytnicki', 'Park Wschodni', "Park Grabiszyński", "Park Popowicki", "Park Strachowicki", "Park Południowy"];

/* Do not do smth like this, this is terrible */
const park_reviews = [
    "Nunc velit odio, blandit in pharetra id, tempor at nibh. Fusce eu magna et leo tempor hendrerit pulvinar sit amet orci. Donec id tellus non ante pretium pharetra nec ac lorem. Quisque vitae diam sodales, euismod mi eu, mollis ex. Proin sodales elit metus, nec molestie enim bibendum id.",
    "Aliquam facilisis libero aliquam vulputate gravida. Integer rhoncus dui dolor, ac aliquam enim bibendum sit amet. Aenean ex ipsum, cursus ac tristique sed, pharetra eget leo.",
    "Pellentesque facilisis dolor justo, vel facilisis urna auctor quis. Nulla fermentum mollis ante, eget posuere quam porttitor eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus nulla ac augue vehicula tempus. Nam scelerisque elementum volutpat. Etiam vel leo felis. Ut bibendum eu tellus eget facilisis. Aliquam venenatis risus eget purus imperdiet, nec sagittis nisl tempor. Mauris at nunc et nisi porttitor fringilla. Duis ut facilisis libero.",
    "Pellentesque porttitor ullamcorper lacus. Mauris ut augue id nunc maximus faucibus maximus in tellus. Integer viverra, ex a semper sollicitudin, nisl lorem suscipit magna, quis faucibus lorem lorem vitae tellus. Nam auctor dignissim enim, sit amet maximus massa laoreet vitae",
    "Aenean maximus arcu in scelerisque faucibus. Curabitur nisi magna, dictum sed congue eget, viverra quis turpis. Duis viverra aliquet cursus. Ut ipsum ante, aliquam ac sem at, vehicula volutpat nulla. Aenean tellus metus, dignissim nec ante vel, tempus blandit massa. Ut faucibus justo at ultricies venenatis. Morbi lobortis mauris congue dapibus mollis. Aenean ac ligula tristique, commodo sapien a, dictum risus. Suspendisse porttitor ullamcorper purus, quis commodo justo aliquet vel. Nulla facilisi. Nunc laoreet metus ut purus pretium posuere. Integer metus nisi, cursus in eleifend id, interdum sit amet erat. Phasellus massa purus, lobortis at ornare eu, ornare sed purus. Nam fermentum, est vel condimentum consequat, massa mi ullamcorper augue, quis efficitur odio leo vitae nibh. Curabitur sem ex, ullamcorper vestibulum massa vitae, mattis luctus ipsum. "
]

var main_canvas = document.getElementById("main-canvas")
var park_canvas = document.getElementById("park-canvas")
var modal = document.getElementById("modal")
var modal_close_button = document.getElementById('modal-close-button')
var copyright_footer = document.getElementById("copyright")

function getParks() {
    parks.forEach(function (park, park_index) {
        var p = document.createElement('p')
        var a = document.createElement('a')
        var link_text = document.createTextNode(`${park}`)
        a.appendChild(link_text)
        a.title = park
        a.href = `#`
        a.onclick = function () {
            main_canvas.style.filter = "blur(15px)"
            copyright_footer.style.filter = "blur(15px)"
            modal.style.display = 'block'
            modal.querySelector("modal-title").textContent = park
            modal.querySelector("modal-text").textContent = park_reviews[park_index]
        }
        p.appendChild(a)
        park_canvas.appendChild(p)
    })
}

modal_close_button.onclick = function () {
    main_canvas.style.filter = "blur(0px)"
    copyright_footer.style.filter = "blur(0px)"
    modal.style.display = 'none';
}

window.onload = function (param) {
    getParks()
}