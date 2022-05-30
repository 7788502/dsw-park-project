var main_canvas = document.getElementById("main-canvas")
var park_canvas = document.getElementById("park-canvas")
var modal = document.getElementById("modal")
var modal_close_button = document.getElementById('modal-close-button')
var copyright_footer = document.getElementById("copyright")

function getParks() {
    fetch("https://raw.githubusercontent.com/exathedev/dsw-park-project/master/parks_data.json")
        .then((response) => {
            return response.json()
        })
        .then((parks) => {
            parks["parks"].forEach(park => {
                var p = document.createElement('p')
                var a = document.createElement('a')
                var link = document.createTextNode(`${park.name}`)
                a.title = park.name
                a.href = `#`
                a.onclick = function () {
                    blurBackground(true)
                    modal.style.display = 'block'
                    modal.querySelector("modal-title").textContent = park.name
                    modal.querySelector("modal-text").textContent = park.review
                    park.photos.forEach(function (photo) {
                        var img = document.createElement("img");
                        img.src = photo
                        modal.querySelector("modal-images").appendChild(img)
                    })
                }
                a.appendChild(link)
                p.appendChild(a)
                park_canvas.appendChild(p)
            });
        })
}

modal_close_button.onclick = function () {
    blurBackground(false)
    modal.querySelector("modal-images").textContent = "" /* Terrible way to remove an image, but works for now */
    modal.style.display = 'none';
}

function blurBackground(blur) {
    if (blur) {
        main_canvas.style.filter = "blur(15px)"
        copyright_footer.style.filter = "blur(15px)"
    } else {
        main_canvas.style.filter = "blur(0px)"
        copyright_footer.style.filter = "blur(0px)"

    }
}

window.onload = function (param) {
    getParks()
}