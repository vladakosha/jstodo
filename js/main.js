/** call the relevant elements to be able to work in JS */
const inputField = document.getElementById("inputField")
const addButton = document.getElementById("addButton")
const listAnchor = document.getElementById("listOfToDos")

/** Store definition */
const listOfToDos = [] //stores all todos
let newToDo = "" //stores the new imput value

/** create functions for input and button */
/**input field function */
const handleNewToDo = (event)=>{
    console.log(event.target.value);
    newToDo = event.target.value;
}

/** button function */
const addNewToDo = (event)=>{
    /**adding new item to array */
listAnchor.innerHTML = "" //cleans the innerHtml content to zero <li>

/**new item adding and render all <li> to front */
    listOfToDos.push(newToDo);

    /**read all items from */
    listOfToDos.map((toDo)=>{

        const li = document.createElement("li");
        li.innerText = toDo
        console.log("element li", li)

        listAnchor.append(li)
        

        inputField.value = ""

    })

}

console.log("list of todos",listOfToDos)

/** add events to elements */
inputField.addEventListener("change", handleNewToDo)
addButton.addEventListener("click", addNewToDo)