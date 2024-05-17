// Get the modal
var modal = document.getElementById('imageModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.querySelectorAll('.design-grid-item img');
var modalImg = document.getElementById("fullSizeImage");
var container = document.querySelector('.container');

images.forEach(image => {
  image.addEventListener('click', function() {
    modal.style.display = "flex"; // Use flex to center align modal content
    modalImg.src = this.src;
    container.classList.add('blur');
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', function() {
  modal.style.display = "none";
  container.classList.remove('blur');
});

// Close the modal if the user clicks outside of the modal image
modal.addEventListener('click', function(event) {
  if (event.target === modal) { // Check if the click was outside the content
    modal.style.display = "none";
    container.classList.remove('blur');
  }
});