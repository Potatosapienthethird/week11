//function greet(userName, time = "Day") {
  //  console.log('Good ${time} ${userName}');
//}

//greet("Neda", "Night");

const unorderedListElement = document.querySelector(".shopping")
function populateList (list)
{
    for (let i = 0 ; i <list.length ; i++)
    {
        console.log(list[i])
        const listItemElement = document.createElement("li");
        listItemElement.textContent = list[i];
        unorderedListElement.appendChild(listItemElement);
    }
}

let shoppingList = ["cheese", "bread", "green pepper"];

populateList(shoppingList)

function changeListStyle()
{
    unorderedListElement.classList.add("squareList");
    unorderedListElement.classList.remove("circleList");
}