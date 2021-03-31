// Get arrays for buttons and images
const buttons = document.querySelectorAll('.buttonFilter');
const images = document.querySelectorAll('.imageFilter');

// Filter using buttons
buttons.forEach(item => {
    item.addEventListener("click", () => {
        const animal = item.getAttribute('animal');
        for (let image of images) {
            image.setAttribute('style', 'display:inline-block');
            if (animal != "all" && !image.getAttribute('class').includes(animal)){
                image.setAttribute('style', 'display:none');
            }
        }
    })
})

// Filter using search box
document.getElementById("filter").addEventListener("input", () => {
    let searchTerm = document.getElementById("filter").value;
    if (!searchTerm) {
        for (let image of images) {
            image.setAttribute('style', 'display:inline-block');
        }
    } else {
        for (image of images) {
            let showHide = image.getAttribute('style');
            if (!image.getAttribute('alt').includes(searchTerm) && showHide === 'display:inline-block') {
                image.setAttribute('style', 'display:none');
            }
        }
    }
})