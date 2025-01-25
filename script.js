function addImage() {
    const imageInput = document.getElementById('imgInput').value;
    if (imageInput) {
        const gallery = document.getElementById('gallery');

        // create new div
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        //create new image
        const newImage = document.createElement('img');
        newImage.src = imageInput;
        newImage.onclick = openModal; // add click event to open modal

        // create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "X";
        removeButton.classList.add('remove-button');
        removeButton.onclick = () => gallery.removeChild(galleryItem);

        
        // append the img and remove button to the gallery item div
        galleryItem.appendChild(newImage);
        galleryItem.appendChild(removeButton);
        // append the gallery item div to the gallery
        gallery.appendChild(galleryItem);

        // clear input field
        document.getElementById('imgInput').value = '';
    } else {
        alert('Please enter an image URL.')
    }

}


// open modal function
function openModal(event) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = event.target.src;
    modal.style.display = 'flex';
}


// close the modal
document.getElementById('closeModal').onclick = function () {
    document.getElementById('imageModal').style.display = 'none';
}

// close on click outside modal
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
    // add event listener to the add image button
    document.getElementById('imgButton').addEventListener('click', addImage);