const carousel = document.querySelector('#carouselExampleControls');
const scrollButton = document.querySelector('#scrollButton');

let currentPage = 0; 
const totalPages = 6;

scrollButton.addEventListener('click', function () {
    currentPage = (currentPage + 1) % totalPages;
    carousel.querySelector('.carousel-inner').style.transform = `translateX(-${currentPage * 100}%)`;
});

let pages = [pageOne,pageTwo,pageThree,pageFour,pageFive,pageSix]