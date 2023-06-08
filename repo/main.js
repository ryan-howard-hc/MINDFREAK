let symbols = ["$", "@", "#", "!", "%", "^", "&", "*", "+"]



let state = {
    page: 0,
    // array of page objects with content for every view
    pages: [
        {
            header: "I can read your mind.",
            next: "",
            subhead: "",
            go: "GO",
        },
        {
            header: "Pick a number from 01 - 99",
            next: "NEXT",
            subhead: "when you have your number click next",
            go: "restart icon",
        },
        {
            header: "Add both digits together to get a new number",
            next: "NEXT",
            subhead: "Ex: 21 is 1 + 2 = 3 : click next to proceed",
            go: "restart icon",
        },
        {
            header: "Subtract your new number from the original number",
            next: "NEXT",
            subhead: "Ex: 21 - 3 = 18 : click next to proceed",
            go: "restart icon",
        },
        {
            //CAN'T USE STATE.SYMBOLS WITHIN STATE BECAUSE ITS NOT INIT YET
            header: getSymbols(symbols),
            next: "REVEAL",
            subhead: "Find your new number. : Note the symbol beside the number",
            go: "restart icon",
        },
        {
            header: "$",
            next: "",
            subhead: "your symbol is: $",
            go: "restart icon",
        },
    ]
}