# PSEUDO
Should take a number without being input, and while doing basic mathematics should produce a symbol that corresponds to the number. Should take the experience working with the alarm clock to manipulating the current state of the page.
## BEGIN
- Create wireframe to produce a rough sketch of how the mindreader program will appear
- Create functions that form the operations that produce the symbols based on number chose and the input of the basic math

## VARIABLES
- a state function -> controls the variables that create pages and structure
- a render function -> controls the variables that make the pages scroll as well as creating the outcome symbol


# INIT
## STATE
    setState -> calls currentPage() and what is rendered in relation to this
             -> calls 
    userInterface -> buttons related to procedural(pressNext, pressBack)
<br>

# RENDER/PROCEDURAL
    getSymbol -> retrieves symbol based on userInput (probably using arrays) ['@','#','$','%','&']
        -create arrays to assign values
        
    callNumber -> value assigned by user
    pressNext -> assigns new value to currentPage or increments new currentPage (page.push())
    pressBack -> refer to pressNext
    mindReader -> calls string (mindText)
               -> var symbols = []
               -> var chosenSymbol = ""
               -> var getSymbol
    
    getSymbol -> retrieves symbol based on userInput (probably using arrays) ['@','#','$','%','&']
    resetProgram -> button to set currentPage to the initial page
# END

<br>

