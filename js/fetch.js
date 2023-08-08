/** call the relevant elements */
const toDoAnchor = document.getElementById("newListOfToDos")

/** fetch data from https://jsonplaceholder.typicode.com/*/

/** promise function */
/* function getToDos(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json()) //transoform json in regular object
    .then((data) => console.log("promise",data)) //using the reg object to provide it on console
    .catch((err)=> console.log("somethin is wrong", err))
}

getToDos(); */

/** async function => sync data requests*/

async function getToDoAsync(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    /* console.log("async",data)
    console.log("check data: ",typeof data) // checkks data type only => in JS everything is an object
    console.log("check array", Array.isArray(data)) //returns biilean to check if data is array */

    data.map((toDo)=>{
        console.log(toDo);
        /**create elements */
        createElement(toDo)


    })
}

/**single responcible function from SOLID */
function createElement(data){
    
    const div = document.createElement("div");
    div.classList.add("toDoItem");
    if(data.completed === true){
        div.classList.add("completed")
    }
    div.innerText = data.title
    toDoAnchor.append(div)
}

getToDoAsync();
