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

changeListStyle()

function updateImage()
{
    const imageElement = document.querySelector("#shoppingCart");
    console.log(imageElement);
    imageElement.src = 
    imageElement.width = 100;
    imageElement.height = 100;
    imageElement.alt = "shopping cart icon"
}
updateImage();

function findGreen ()
{
    const listItems = document.querySelectorAll(".shopping li")
    for (let i = 0 ; i < listItems.length; i++)
    {
        if(listItems[i].textContent.includes("green")){
            listItems[i].classList.add
        }
    }
}

findGreen();