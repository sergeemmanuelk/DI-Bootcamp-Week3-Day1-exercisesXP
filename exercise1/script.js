// Retrieve the div and console.log it
let elementDiv = document.getElementById("container")
console.log(elementDiv)

// Change the name “Pete” to “Richard”
let changeName = document.querySelector('.list > li:last-child').innerHTML = "Richard"
console.log(changeName)

// Change each first name of the two <ul>'s to your name
let myName = "Serge"
let changeEachFirstName = document.querySelectorAll('ul')
changeEachFirstName.forEach(item => {
    item.firstElementChild.textContent = myName
})
console.log(changeEachFirstName)

// Delete the <li> that contains the text node “Sarah”
let listItems = document.getElementsByTagName('li')
for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent == "Sarah") {
        listItems[i].parentNode.removeChild(listItems[i]);
        break;
    }
}

// Add a class called student_list to both of the <ul>'s
let lists = document.getElementsByClassName("list");
for (var i = 0; i < lists.length; i++) {
    lists[i].classList.add("student_list");
}

// Add the classes university and attendance to the first <ul>
lists[0].classList.add("university");
lists[0].classList.add("attendance");
