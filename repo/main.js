let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let next = document.getElementById("next");
let reset = document.getElementById("reset");
//maybe the document variables go up here?

let symbols = ["$", "@", "#", "!", "%", "^", "&", "*", "+"] //array for symbols 1 through 9

let state = {
    page: 0,
    pages: [ //defines content of each page as well as the process
        {
            header: "I can read your mind.", // header text for the page.
            next: "", //action or label for the next button on the page.
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



function mindReader(symbols) { //function for a symbol map with the symbol array as the string input
    let getSymbol = 0; //initialized variable, starting point
    let chosenSymbol = {}; //empty object for when the symbol is determined
  
    for (let i = 0; i < 100; i++) { //loops from 00 to 99 by counting upward
      const number = i.toString().padStart(2, '0'); //1 becomes 01, 2 becomes 02, etc
      chosenSymbol[number] = symbols[getSymbol]; //assigns the number from the chosen integer to symbol from the symbol array to getSymbol 
      getSymbol = (getSymbol + 1) % symbols.length; //counts up the symbols until it exceeds the array length of symbols
    }
  
    return chosenSymbol; //returns object, maps each number 
  }



  function updatePageContent(page) {
//                 the state variable encompassing the pages variable, to bring it to the page variable aka the current page
    h1.innerHTML = state.pages[page].header; //connecting the h1 from html to the header text in the array
    h2.innerHTML = state.pages[page].subhead; //connecting the h2 to sub
    next.innerHTML = state.pages[page].next; // connecting the next 
    reset.innerHTML = state.pages[page].reset;
    state.page = page;
    location.hash = page;
  }
  
  updatePageContent();

  go.addEventListener("click", () => {
    if (go.innerHTML == "reset") {
        animate();
        setTimeout(setPage, 100, 1)    
    }
    else {
        animate();
        setTimeout(setPage, 100, 0)
    }

})