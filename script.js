// Define ingredient prices in an array
const ingredientPrices = [
    { name: "Whole Wheat Bun", price: 20 },
    { name: "Patty", price: 30 },
    { name: "Onions", price: 20 },
    { name: "Tomatoes", price: 20 },
    { name: "Lettuce", price: 20 },
    { name: "Cheese", price: 10 },
    
];

// Initialize selected ingredients
const selectedIngredients = [];

// DOM manipulation and event handling code
document.addEventListener("DOMContentLoaded", function () {
    const optionButtons = document.querySelectorAll(".button");
    const orderButton = document.getElementById("order-button");
    const ingredientsList = document.querySelector(".ingredients-list");
    const orderTotalElement = document.querySelector(".order-total");

// Add event listener to order button
orderButton.addEventListener("click", function () {
    // Implement order placement logic here
    alert("Order placed!");
    // Optionally, reset the selected ingredients and update the UI
    resetSelectedIngredients();
    updateIngredientsList();
    updateOrderTotal();
});


    // Add event listeners to option buttons
    optionButtons.forEach(button => {
        button.addEventListener("click", function () {
            const ingredientName = button.textContent.trim();
            addIngredient(ingredientName);
            updateIngredientsList();
            updateOrderTotal();
        });
    });

   

    // Function to add an ingredient to the selected list
function addIngredient(ingredientName) {
    console.log("Clicked button with text content:", ingredientName); // Debug statement

    const ingredient = ingredientPrices.find(item => item.name === ingredientName);
    console.log("Matching ingredient from array:", ingredient); // Debug statement

    if (ingredient) {
        selectedIngredients.push(ingredient);
        console.log("Selected ingredients after adding:", selectedIngredients); // Debug statement
    }
}

   
    // Function to update the ingredients list in the UI
    function updateIngredientsList() {
        ingredientsList.innerHTML = "";
        selectedIngredients.forEach((ingredient, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${ingredient.name} ${ingredient.price} INR`;
            
            // Add a delete button to remove the ingredient
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                removeIngredient(index);
            });

            listItem.appendChild(deleteButton);
            ingredientsList.appendChild(listItem);
        });
    }

    // Function to remove an ingredient from the selected list
    function removeIngredient(index) {
        selectedIngredients.splice(index, 1);
        updateIngredientsList();
        updateOrderTotal();
    }

    // Function to update the order total in the UI
    function updateOrderTotal() {
        const total = selectedIngredients.reduce((acc, ingredient) => acc + ingredient.price, 0);
        orderTotalElement.textContent = total;
    }

    // Function to reset selected ingredients
    function resetSelectedIngredients() {
        selectedIngredients.length = 0;
    }
});

 