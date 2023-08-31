   // Get the necessary elements
   var imageList = document.querySelectorAll('.product__img');
   var leftButton = document.querySelector('.product__button-left');
   var rightButton = document.querySelector('.product__button-right');
   var currentIndex = 0;
   
   // Function to update the displayed image
   function updateImage() {
     // Hide all images
     imageList.forEach(function (image) {
       image.style.display = 'none';
     });
   
     // Display the current image
     imageList[currentIndex].style.display = 'block';
   }
   
   // Event listener for left button click
   leftButton.addEventListener('click', function () {
     currentIndex--;
     if (currentIndex < 0) {
       currentIndex = imageList.length - 1;
     }
     updateImage();
   });
   
   // Event listener for right button click
   rightButton.addEventListener('click', function () {
     currentIndex++;
     if (currentIndex >= imageList.length) {
       currentIndex = 0;
     }
     updateImage();
   });
   
   // Show the initial image
   updateImage();
   