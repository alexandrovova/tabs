
   // Get the necessary elements
var tabItems = document.querySelectorAll('.tabs__item');
var tabBlocks = document.querySelectorAll('.tabs__block');

// Function to show a tab content block
function showTabContent(tabId) {
// Hide all tab content blocks
tabBlocks.forEach(function (block) {
block.style.display = 'none';
});

// Remove the 'active' class from all tab items
tabItems.forEach(function (item) {
item.classList.remove('active');
});

// Show the specified tab content block
var tabBlock = document.querySelector(tabId);
if (tabBlock) {
tabBlock.style.display = 'block';
}
}

// Event listener for tab item click
tabItems.forEach(function (item) {
item.addEventListener('click', function (event) {
event.preventDefault();

// Get the href of the clicked tab item
var tabId = item.getAttribute('href');

// Show the corresponding tab content block
showTabContent(tabId);

// Add the 'active' class to the clicked tab item
item.classList.add('active');
});
});

// Show the default tab content block (tab_01)
showTabContent('#tab_01');

