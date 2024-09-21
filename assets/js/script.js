// Get the search button and form
const searchIconBtn = document.getElementById("searchIconBtn");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchSubmitBtn = document.querySelector(".btn-search");

// Toggle search input visibility when the search icon is clicked
searchIconBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // Prevent click propagation to the document
  if (searchForm.classList.contains("search-hidden")) {
    searchForm.classList.remove("search-hidden");
    searchForm.classList.add("search-visible");
    searchInput.focus(); // Automatically focus the input field when shown
  } else {
    searchForm.classList.remove("search-visible");
    searchForm.classList.add("search-hidden");
  }
});

// Handle search when clicking the search button or pressing enter
searchForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior
  performSearch(); // Execute the search function
});

// Optionally handle clicks on the search icon inside the form
searchSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default button behavior
  performSearch(); // Execute the search function
});

// Hide search form when clicking outside of it
document.addEventListener("click", function (e) {
  if (!searchForm.contains(e.target) && e.target !== searchIconBtn) {
    searchForm.classList.remove("search-visible");
    searchForm.classList.add("search-hidden");
  }
});

// Prevent closing search when clicking inside the search form
searchForm.addEventListener("click", function (e) {
  e.stopPropagation(); // Prevent click propagation to the document
});

// Search function to handle the search logic
function performSearch() {
  const query = searchInput.value.trim(); // Get the search input value
  if (query) {
    // Add your search logic here (e.g., redirect to a search results page or filter podcasts)
    console.log("Searching for:", query);
    alert(`Searching for: ${query}`);

    // Clear the search input after the search is performed
    searchInput.value = "";

    // Optionally hide the search bar after performing the search
    searchForm.classList.remove("search-visible");
    searchForm.classList.add("search-hidden");
  } else {
    alert("Please enter a search term.");
  }
}
