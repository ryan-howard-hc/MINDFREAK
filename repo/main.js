document.addEventListener("DOMContentLoaded", ()=> {


let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let next = document.getElementById("next");
let reset = document.getElementById("reset");
//maybe the document variables go up here?

let symbols = ["$", "@", "#", "!", "%", "^", "&", "*", "+"] //array for symbols 1 through 9

let state = {
    page: 0,
    //current page

    pages: [ //array of pages to go through
        {
            header: "I can read your mind.", // header text for the page.
            next: "NEXT", //action or label for the next button on the page.
            subhead: "", //additional information or instructions for the page.
            reset: "GO", //icon or label for a restart button or start for first page.
        },
        {
            header: "Pick a number from 01 - 99",
            next: "NEXT",
            subhead: "when you have your number click next",
            reset: "restart icon",
        },
        {
            header: "Add both digits together to get a new number",
            next: "NEXT",
            subhead: "Ex: 21 is 1 + 2 = 3 : click next to continue",
            reset: "restart icon",
        },
        {
            header: "Subtract your new number from the original number",
            next: "NEXT",
            subhead: "Ex: 21 - 3 = 18 : click next to continue",
            reset: "restart icon",
        },
        {
            header: mindReader(symbols), //pulls the symbol from function (hint, its always $)
            next: "REVEAL",
            subhead: "Find your new number. : Note the symbol beside the number",
            reset: "restart icon",
        },
        {
            header: "$",
            next: "",
            subhead: "your symbol is: $",
            reset: "restart icon",
        },
    ]
} //array for each slide



function mindReader(array) { //function for a symbol map with the symbol array as the string input
    let chosenSymbol = []; //empty object for when the symbol is determined
  
    for (let i = 0; i < 100; i++) { //loops from 00 to 99 by counting upward
      chosenSymbol.push(symbols[i % 9])
    }
  
  }



  function updatePageContent(page) {
//the state variable encompassing the pages variable, to bring it to the page variable aka the current page
    h1.innerHTML = state.pages[page].header; //connecting the h1 from html to the header text in the array
    next.innerHTML = state.pages[page].next; // connecting the next 
    h2.innerHTML = state.pages[page].subhead; //connecting the h2 to sub
    reset.innerHTML = state.pages[page].reset;
    state.page = page;
    location.hash = page;
  }

next.addEventListener("click", () => {
    animate();
    setTimeout(setPage, 1000, state["page"] + 1);
})


  reset.addEventListener("click", () => {
    if (reset.innerHTML == "reset") {
        animate();
        setTimeout(updatePageContent, 100, 1)    
    }
    else {
        animate();
        setTimeout(updatePageContent, 100, 0)
    }

})

function animate() {
    h1.classList.remove("slide");
    h1.offsetWidth;
    h1.classList.add("slide");
}

updatePageContent(Number(localStorage.getItem("page")));

})