const FORM = document.getElementById("form")
const QUOTE_LIST = document.getElementById("quote-list")
let quoteCount = 0

FORM.addEventListener('submit',function (event){
    event.preventDefault()
    let citationInput = document.getElementById("citationInput").value
    let authorInput = document.getElementById("authorInput").value
    console.log(`${citationInput}${authorInput}`)
    addQuote(citationInput, authorInput)
})

function addQuote(quote, author){
    const TEXT = document.createElement('p') 
    TEXT.setAttribute = ("class", "text")
    TEXT.innerText = `Citation : "${quote}"`
    const AUTHOR = document.createElement('p') 
    AUTHOR.setAttribute = ("class", "author")
    AUTHOR.innerText = `Autrice : ${author}`
    const DIV = document.createElement('div')
    DIV.setAttribute = ("class", "quote")
    DIV.appendChild(TEXT) 
    DIV.appendChild(AUTHOR) 
    QUOTE_LIST.appendChild(DIV)
    const COUNT = document.getElementById("count")
    quoteCount += 1
    COUNT.innerText = `${quoteCount} citations`
}