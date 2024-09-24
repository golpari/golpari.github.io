let currentZoom = 1;
let minZoom = 1;
let maxZoom = 3;
let stepSize = 0.05;

let container = document.getElementById("image-container");

container.addEventListener("wheel", function (event) {
    if ((currentZoom > minZoom && event.deltaY < 0) || (currentZoom < maxZoom && event.deltaY > 0)) {
        event.preventDefault(); // Prevent default scrolling if zooming
        let direction = event.deltaY > 0 ? -1 : 1;
        zoomImage(-direction);
    }
});

function zoomImage(direction) {
    let newZoom = currentZoom + direction * stepSize;
    if (newZoom < minZoom) {
        newZoom = minZoom;
    } else if (newZoom > maxZoom) {
        newZoom = maxZoom;
    }

    currentZoom = newZoom;
    let image = document.querySelector("#image-container img");

    // Update the CSS transform of the image to scale it
    image.style.transform = `scale(${currentZoom})`;

    // Adjust opacity as the zoom changes
    let opacity = 1 - ((currentZoom - minZoom) / (maxZoom - minZoom) * 0.8);
    image.style.opacity = opacity;

    // When the image is fully zoomed out or invisible, let the page scroll normally
    if (opacity <= 0.1) {
        container.style.pointerEvents = "none"; // Allow scroll through the container
    } else {
        container.style.pointerEvents = "auto"; // Prevent scroll through the container when image is visible
    }
}
