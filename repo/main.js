document.addEventListener("DOMContentLoaded", () => {
//ASK WHAT THIS DOES AND WHY IT HELPED

    let h1 = document.querySelector("h1"); // connecting h1 text
    let h2 = document.querySelector("h2");
    let next = document.getElementById("next"); // connecting next button to 'next' array text
    let reset = document.getElementById("reset");
    // maybe the document variables go up here?
    let container = document.createElement("div");
    
    container.className = "row justify-content-center";
    container.style.width = "500px";
    container.style.height = "auto";
    container.style.backgroundColor = "cadetblue";

    let symbols = [
        "$",
        "@",
        "#",
        "!",
        "%",
        "^",
        "&",
        "*",
        "+",
        "?"
    ]; 


    let currentPageIndex = 0; // variable to cycle through the array that connects to the button REFER TO LINE 68
    const pages = [

        {
            // array of pages to go through
            header: "I can read your mind jabroni.", // header text for the page.
            next: "NEXT", // action or label for the next button on the page.
            subhead: "", // additional information or instructions for the page.
            reset: "", // icon or label for a restart button or start for first page.
        },
        {
            header: "Pick a number from 01 - 99",
            next: "NEXT",
            subhead: "when you have your number click next",
            reset: "RESET"
        },
        {
            header: "Add both digits together to get a new number",
            next: "NEXT",
            subhead: "Ex: 21 is 1 + 2 = 3 : click next to continue",
            reset: "RESET"
        },
        {
            header: "Subtract your new number from the original number",
            next: "NEXT",
            subhead: "Ex: 21 - 3 = 18 : click next to continue",
            reset: "RESET"
        }, {
            header: mindReader(symbols), // pulls the symbol from function (hint, its always $)
            next: "REVEAL",
            subhead: "Find your new number. Note the symbol beside the number",
            reset: "RESET"
        }, {
            header: "your symbol is: $",
            next: "",
            subhead: "",
            reset: "restart icon"
        },
    ];

    function mindReader(symbols) {
        let message = symbols.map((symbol, index) => `${index} - ${symbol}`).join(",\n");
        return message;
    }

    function updatePageContent() {
        const currentPage = pages[currentPageIndex];
        const headerContent = currentPage.header instanceof Array ? currentPage.header.join("<br>") : currentPage.header;

        // the state variable encompassing the pages variable, to bring it to the page variable aka the current page

        h1.innerHTML = headerContent.replace(/,/g, "\n");
        // connecting the h1 from html to the page being cycled through
        next.innerHTML = currentPage.next; // connecting the next
        h2.innerHTML = currentPage.subhead; // connecting the h2 to sub
        reset.innerHTML = currentPage.reset;
    }

    next.addEventListener("click", () => {
        currentPageIndex = (currentPageIndex + 1) % pages.length;
        updatePageContent();
    });

    reset.addEventListener("click", () => {
        currentPageIndex = 0;
        updatePageContent();
    });


    // next.addEventListener("click", () => {
    //     animate();
    //     setTimeout(setPage, 1000, ["page"] + 1);
    // })


    // reset.addEventListener("click", () => {
    //     if (reset.innerHTML == "reset") {
    //         animate();
    //         setTimeout(updatePageContent, 100, 1)
    //     }
    //     else {
    //         animate();
    //         setTimeout(updatePageContent, 100, 0)
    //     }

    // })

    // function animate() {
    //     h1.classList.remove("slide");
    //     h1.offsetWidth;
    //     h1.classList.add("slide");
    // }
    h1.className = "wrap-text";
    updatePageContent();

});
