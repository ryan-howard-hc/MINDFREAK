        document.addEventListener("DOMContentLoaded", function () {
            const carousel = document.querySelector("#carouselExampleControls");
            const prevButton = carousel.querySelector(".carousel-control-prev");
            const nextButton = carousel.querySelector(".carousel-control-next"); 
            const carouselInner = carousel.querySelector(".carousel-inner"); //carousel-inner div controls all the carousel items
//.addEventListener attaches an event handler to the element specified
//it also separates the JS from the HTML which allows you to add event listeners even when you dont control HTML markup
//DOMContentLoaded event fires when HTML has been completely parsed and all deferred scripts have executed.
//DOMContentLoaded doesnt wait for things like images, subframes, and async scripts to finish loading



            const currentPageContent = document.getElementById("currentPageContent");
// new div to hold current page's content at that time



            let currentPage = 0;
            const totalPages = carouselInner.children.length;
//currentPage is set to zero when page is loaded, while totalPages is made to contain all of the separate subdivs of carouselInner
//the .length counts how many children there are




            prevButton.addEventListener("click", function () {
                currentPage = (currentPage - 1 + totalPages) % totalPages;
                carouselInner.style.transform = `translateX(-${currentPage * 100}%)`;
                updateCurrentPageContent();
            });

            nextButton.addEventListener("click", function () {
                currentPage = (currentPage + 1) % totalPages;
                carouselInner.style.transform = `translateX(-${currentPage * 100}%)`;
                updateCurrentPageContent();
            });

//These two eventlisteners update currentPage variable based on the prevButton and nextButton variables 
//that are attached to the carousel controls through querySelector



            function updateCurrentPageContent() {
                const currentPageItem = carouselInner.querySelector(`.carousel-item:nth-child(${currentPage + 1})`);
//:nth-child is a pseudo-class that selects the .children element corresponding to the specific carousel index
//Additionally javascript uses 0 based indexing and the nth child uses 1 based indexing, so plus 1 is added to account for this.
                const pageContent = currentPageItem.querySelector("h2").textContent;
                currentPageContent.textContent = pageContent;
}
//This function selects the currentPage value through the caro


});