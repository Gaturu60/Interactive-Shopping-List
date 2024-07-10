const shoppingList = ['Books', 'PlayStation', 'Xbox', 'Laptop'];
const lists = document.getElementById('lists');
const clearBtn = document.getElementById('clearBtn');
const shop = document.getElementById('shop');

// Function to update the shopping list display
function updateList() {
    // Clear previous list items
    lists.innerHTML = '';

    // Loop through shoppingList and create list items
    shoppingList.forEach(item => {
        const myListItem = document.createElement('li');
        myListItem.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span>${item}</span>`;
        lists.appendChild(myListItem);

        // Add event listener to toggle 'purchased' class on checkbox change
        const checkbox = myListItem.querySelector('.checkbox');
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                myListItem.classList.add('purchased');
            } else {
                myListItem.classList.remove('purchased');
            }
        });
    });
}

// Initial update of shopping list
updateList();

// Event listener for input in the shopping input field
shop.addEventListener('input', function(e) {
    nameItems = e.target.value; // Store the value of the input
});

// Event listener for form submission
const form = document.getElementById('shopping');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (nameItems) {
        shoppingList.push(nameItems); // Add new item to shoppingList array
        updateList(); // Update the displayed list
        shop.value = ''; // Clear the input field after submission
    }
});

// Event listener for clear button
clearBtn.addEventListener('click', function() {
    shoppingList.length = 0; // Clear the shoppingList array
    updateList(); // Update the displayed list
});
