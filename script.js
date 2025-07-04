const FORM = document.getElementById("form")
const QUOTE_LIST = document.getElementById("quote-list")
let quoteCount = 0
loadQuote()

FORM.addEventListener('submit',function (event){
    event.preventDefault()
    let citationInput = document.getElementById("citationInput").value
    let authorInput = document.getElementById("authorInput").value
    Local(citationInput, authorInput)
    loadQuote()
})

function addQuote(quote, author){
    const TEXT = document.createElement('p') 
    TEXT.classList.add("text")
    TEXT.innerText = `Citation : "${quote}"`
    const AUTHOR = document.createElement('p') 
    AUTHOR.classList.add("author")
    AUTHOR.innerText = `Autrice : ${author}`
    const DIV = document.createElement('div')
    DIV.classList.add("quote")
    DIV.appendChild(TEXT) 
    DIV.appendChild(AUTHOR) 
    QUOTE_LIST.appendChild(DIV)
    const COUNT = document.getElementById("count")
    quoteCount += 1
    COUNT.innerText = `${quoteCount} citations`
}

function Local(quote, author){
    let localCount = Object.keys(localStorage).length
    const citation = {
        author: author,
        text: quote,
    }
    localStorage.setItem(localCount,JSON.stringify(citation))
}

function loadQuote(){
    QUOTE_LIST.innerHTML=''
    for(let key in Object.keys(localStorage)){
        let citations = JSON.parse(localStorage.getItem(key))
        addQuote(citations.text, citations.author)
    }

}
