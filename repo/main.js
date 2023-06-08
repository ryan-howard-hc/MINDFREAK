        document.addEventListener("DOMContentLoaded", function () {
            const carousel = document.querySelector("#carouselExampleControls");
            const prevButton = carousel.querySelector(".carousel-control-prev");
            const nextButton = carousel.querySelector(".carousel-control-next"); 
            const carouselInner = carousel.querySelector(".carousel-inner"); //carousel-inner div controls all the carousel items
//.addEventListener attaches an event handler to the element specified
//it also separates the JS from the HTML which allows you to add event listeners even when you dont control HTML markup
//DOMContentLoaded event fires when HTML has been completely parsed and all deferred scripts have executed.
//DOMContentLoaded doesnt wait for things like images, subframes, and async scripts to finish loading

            let currentPage = 0;
            const totalPages = carouselInner.children.length;

            prevButton.addEventListener("click", function () {
                currentPage = (currentPage - 1 + totalPages) % totalPages;
                carouselInner.style.transform = `translateX(-${currentPage * 100}%)`;
            });

            nextButton.addEventListener("click", function () {
                currentPage = (currentPage + 1) % totalPages;
                carouselInner.style.transform = `translateX(-${currentPage * 100}%)`;
            });
        });

        //These two eventlisteners update currentPage variable based on the prevButton and nextButton variables 
        //that are attached to the carousel controls through querySelector