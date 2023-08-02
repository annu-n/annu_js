// var row1 = null;
// function onFormSubmit(){
//     event.preventDefault();
//         var formData = readFormData();
//         if(row1 ==null){
//             insertData(formData);
//         }
//         else{

//             updateRecord(formData);
// 		}
     
//     }    

// function readFormData(){
//     var formData = {};
//     formData['fname'] = document.getElementById("fname").value;
//     formData['age'] = document.getElementById("age").value;
//     formData['city'] = document.getElementById("city").value;
//     formData['state'] = document.getElementById("state").value;
//     return formData;
// }

// function insertData(data){
//     var table = document.getElementById("tables").getElementsByTagName('table')[0];
//     var newRow = table.insertRow(table.length)
//     var cell1 = newRow.insertCell(0)
//         cell1.innerHTML = data.productCode;
//     var cell2 = newRow.insertCell(1)
//         cell2.innerHTML = data.age;
//     var cell3 = newRow.insertCell(2)
//         cell3.innerHTML = data.city;
//     var cell4 = newRow.insertCell(3)
//         cell4.innerHTML = data.state;
//     var cell5 = newRow.insertCell(4)
//         cell5.innerHTML = `<button>Edit</button> <button>Delete</button`;
// }
// function onEdit(td) {
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("age").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("city").value = selectedRow.cells[2].innerHTML;
//     document.getElementById("state").value = selectedRow.cells[3].innerHTML;
// }
// function updateRecord(formData) {
//     selectedRow.cells[0].innerHTML = formData.fname;
//     selectedRow.cells[1].innerHTML = formData.age;
//     selectedRow.cells[2].innerHTML = formData.city;
//     selectedRow.cells[3].innerHTML = formData.state;
// }

// //Delete the data
// function onDelete(td) {
//     if (confirm('Do you want to delete this record?')) {
//         row = td.parentElement.parentElement;
//         document.getElementById('submit').deleteRow(row.rowIndex);
//         resetForm();
//     }
// }

// Array to store items
let items = [];

// Function to add a new item to the array
function addItem(event) {
  event.preventDefault();
  const newItem = document.getElementById('itemInput').value;
  if (newItem) {
    items.push(newItem);
    document.getElementById('itemInput').value = '';
    displayItems();
  }
}

// Function to display all items in the array
function displayItems() {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = '';

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const listItem = document.createElement('li');
    listItem.textContent = item;
    
    // Create buttons for update and delete
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.addEventListener('click', () => updateItem(i));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteItem(i));

    listItem.appendChild(updateButton);
    listItem.appendChild(deleteButton);
    itemList.appendChild(listItem);
  }
}

// Function to update an item in the array
function updateItem(index) {
  const updatedItem = prompt('Enter the updated item:', items[index]);
  if (updatedItem !== null) {
    items[index] = updatedItem;
    displayItems();
  }
}

// Function to delete an item from the array
function deleteItem(index) {
  if (confirm('Are you sure you want to delete this item?')) {
    items.splice(index, 1);
    displayItems();
  }
}

// Display initial items on page load
displayItems();


