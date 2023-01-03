// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let elementDiv = document.getElementById('navBar')
elementDiv.setAttribute('id', 'socialNetworkNavigation')

// We are going to add a new <li> to the <ul>
// First, create a new <li> tag (use the createElement method)
let createNewLi = document.createElement("li")
// Create a new text node with “Logout” as its specified text
let createNewText = document.createTextNode("Logout")
// Append the text node to the newly created list node (<li>)
createNewLi.appendChild(createNewText)
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method
document.querySelector('#socialNetworkNavigation ul').appendChild(createNewLi)

// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property)
let firstLi = document.querySelector('#socialNetworkNavigation ul').firstElementChild.textContent
let lastLi = document.querySelector('#socialNetworkNavigation ul').lastElementChild.textContent

console.log(firstLi)
console.log(lastLi)


