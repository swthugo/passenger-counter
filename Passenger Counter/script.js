// intialize the count as 0
// listen for clicks on the increment button
// increment the count varible what the button is clicked
// change the count-el in the HTML to reflect the new count

let num = document.getElementById('count-el')//pass in arguments
let text = document.getElementById('save-el') 
let count = 0

function increment(){
    count += 1
    num.textContent = count
    // console.log(count)
}

// DOM = Document Object Model - aka how you use JavaScript to modify a website
// Document => HTML Document
// Object => Data type Object
// Model => document.getElementById('count-el') <h2 id="count-el">0</h2>


// 1. Create a function, save(), which logs out the count when it's called

function save(){
    // text.innerText += " " + num.innerText + " -"
    // count = 0

    let countStr = count + " - "
    text.textContent += countStr
    num.textContent = 0
    count = 0
}

