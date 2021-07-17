let input = prompt("what would you like to do?");
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
while (input !== "quit" && input !=="q"){
    if (input === "list"){
        console.log("-----------------------")
        for (let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("-----------------------")
    }
    else if (input === "new"){
        const newInput = prompt("Enter new task: ")
        todos.push(newInput);
        console.log(`${newInput} added to the list`);

    }
    else if (input === 'delete'){
        const index = parseInt(prompt("Enter index to delete: "));
        if (!Number.isNaN(index)){
            const deleted = todos.splice(index, 1);
            console.log(`Deleted ${deleted[0]}`);
        }
        else {
            console.log("Unknown Index")
        }
    }
    input = prompt("what would you like to do?");
}
console.log("App Quited");