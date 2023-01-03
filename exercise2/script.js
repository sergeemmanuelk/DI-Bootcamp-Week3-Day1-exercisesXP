// Add a “light blue” background color and some padding to the <div>.
let elementDiv = document.querySelector('div')
elementDiv.style.backgroundColor = "lightblue"
elementDiv.style.padding = "10px"

// Do not display the <li> that contains the text node “John”.
let displayNoneLi = document.querySelector('li')
displayNoneLi.style.display = "none"

// Add a border to the <li> that contains the text node “Pete”.
let borderLi = document.querySelectorAll('li')[1]
borderLi.style.border = "1px solid red"

// Change the font size of the whole body.
document.body.style.fontSize = "20px"

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div)
if (elementDiv.style.backgroundColor === "lightblue") {
    alert(`Hello ${displayNoneLi.textContent} and ${borderLi.textContent}`)
}