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
            subhead: "Ex: 21 is 1 + 2 = 3 : click next to proceed",
            reset: "restart icon",
        },
        {
            header: "Subtract your new number from the original number",
            next: "NEXT",
            subhead: "Ex: 21 - 3 = 18 : click next to proceed",
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

function mindReader(symbols) { //function for a symbol map with symbol array as the string input
    let getSymbol = 0; //initialized variable
    let chosenSymbol = {}; //empty object for when the symbol is determined
  
    for (let i = 0; i < 100; i++) { //loops from 00 to 99 by counting upward
      const number = i.toString().padStart(2, '0'); //1 becomes 01, 2 becomes 02, etc
      chosenSymbol[number] = symbols[getSymbol]; //assigns the number from the chosen integer to symbol from the symbol array to getSymbol 
      getSymbol = (getSymbol + 1) % symbols.length; //counts up the symbols until it exceeds the array length of symbols
    }
  
    return chosenSymbol; //returns object, maps each number 
  }

