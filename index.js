function addItem() {
  const itemInput = document.getElementById("itemInput");
  const itemValue = itemInput.value.trim();

  if (itemValue === "") {
    alert("Please enter a grocery item. ");
    return;
  }

  const groceryList = document.getElementById("groceryList");
  const li = document.createElement("li");
  li.textContent = itemValue;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
deleteButton.onclick = function() {
    groceryList.removeChild(li);
};

li.appendChild(deleteButton);
groceryList.appendChild(li);

itemInput.value= '';

}
