// Get references to HTML elements
let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");
let copyText = document.getElementById("myInput");
// Function to add a task to the to-do list
function addTask(){
  // Check if the input box is empty
    if(inputBox.value === ''){
        alert('You must write a Task!!')
    }
  // Create a new list item (LI) and span (X) for each task
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let sapnx = document.createElement("span");
        sapnx.innerHTML = "\u00d7" // Unicode for 'X'
        li.appendChild(sapnx);
    }
  // Clear the input box after adding a task
    inputBox.value="";
    saveData();
}
// Event listener for the entire task list container
listContainer.addEventListener("click", function(e){
  // Check if the clicked element is an LI (task item)
if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked");// Toggle the 'checked' class
}
else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();// Remove the parent LI if the clicked element is a SPAN (X)

}
},false );
// Save the updated task list to local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
// Function to show tasks from local storage on page load
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();

const copyButton = document.getElementById("copyButton");
     const quote = document.getElementById("quote");
const url = "https://stoic.tekloon.net/stoic-quote";
// Function to fetch Data from Api 
async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  quote.innerHTML = data.quote;
}
function copyToClipboard() {
    const textToCopy = quote.innerText;

    // Create a temporary textarea
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(textarea);
  }
getQuote(url);
     copyButton.addEventListener("click", copyToClipboard);
