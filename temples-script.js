// Sample temple data
const temples = [
    { name: "Kashi Vishwanath", category: "hindu", description: "Hindu temple located in Varanasi." },
    { name: "Golden Temple", category: "hindu", description: "Sacred Sikh gurdwara in Amritsar." },
    { name: "Mahabodhi Temple", category: "buddhist", description: "Buddhist temple in Bodh Gaya." },
    { name: "Dilwara Temples", category: "jain", description: "Jain temples located in Rajasthan." },
    // Add more temple data here
];

let filteredTemples = temples;
let currentIndex = 0;
const templesPerPage = 3;

// Function to filter temples based on category
function filterTemples() {
    const category = document.getElementById("category").value;
    if (category === "all") {
        filteredTemples = temples;
    } else {
        filteredTemples = temples.filter(temple => temple.category === category);
    }
    currentIndex = 0;
    displayTemples();
}

// Function to display temples
function displayTemples() {
    const templeList = document.getElementById("temple-list");
    templeList.innerHTML = ""; // Clear the current list

    const templesToShow = filteredTemples.slice(currentIndex, currentIndex + templesPerPage);
    templesToShow.forEach(temple => {
        const templeItem = document.createElement("div");
        templeItem.classList.add("temple-item");
        templeItem.innerHTML = `
            <h3>${temple.name}</h3>
            <p>${temple.description}</p>
        `;
        templeList.appendChild(templeItem);
    });

    currentIndex += templesToShow.length;

    // If all temples are displayed, hide the 'Load More' button
    if (currentIndex >= filteredTemples.length) {
        document.getElementById("load-more").style.display = "none";
    }
}

// Function to load more temples
function loadMoreTemples() {
    displayTemples();
}

document.addEventListener("DOMContentLoaded", () => {
    displayTemples(); // Load initial temples on page load
});
