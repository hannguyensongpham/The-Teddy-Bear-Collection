// Footer Icon
let lis = document.querySelectorAll(".c_one li")

lis.forEach(function (li) {
    let img = document.createElement('img')
    img.setAttribute('src', 'images/bear-icon.png')
    img.setAttribute('alt', 'Bear Icon')
    img.setAttribute('height', 29)
    li.appendChild(img)
})

// Images Icon
lis = document.querySelectorAll("#bear-image li")
lis.forEach(function (li) {
    let img = document.createElement('img')
    img.setAttribute('src', 'images/image-icon.png')
    img.setAttribute('alt', 'Image Icon')
    img.setAttribute('height', 25)
    li.appendChild(img)
})

// Pdf Icon
lis = document.querySelectorAll("#bear-pdf li")
lis.forEach(function (li) {
    let img = document.createElement('img')
    img.setAttribute('src', 'images/pdf.png')
    img.setAttribute('alt', 'Pdf Icon')
    img.setAttribute('height', 25)
    li.appendChild(img)
})

lis = document.querySelectorAll("#bear-video li")
lis.forEach(function (li) {
    let img = document.createElement('img')
    img.setAttribute('src', 'images/video-icon.png')
    img.setAttribute('alt', 'Video Icon')
    img.setAttribute('height', 25)
    li.appendChild(img)
})