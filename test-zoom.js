let currentZoom = 1;
let minZoom = 1;
let maxZoom = 3;
let stepSize = 0.05;

let container = document.getElementById("image-container");

container.addEventListener("wheel", function(event) {
    event.preventDefault(); // Prevent default scrolling behavior
    let direction = event.deltaY > 0 ? -1 : 1;
    zoomImage(-direction);
});

function zoomImage(direction) {
    let newZoom = currentZoom + direction * stepSize;
    if (newZoom < minZoom || newZoom > maxZoom) {
        return;
    }
    currentZoom = newZoom;
    let image = document.querySelector("#image-container img");

    // Set the scale and opacity based on zoom level
    image.style.transform = `scale(${currentZoom})`;

    // Adjust opacity as the zoom changes
    let opacity = 1 - ((currentZoom - minZoom) / (maxZoom - minZoom));
    image.style.opacity = opacity;
}
