// Function to switch tabs
function changeTab(tabId) {
  // Get all tab content elements
  var tabContents = document.getElementsByClassName("tab-content");
  
  // Loop through tab content elements
  for (var i = 0; i < tabContents.length; i++) {
    // Hide all tab content elements
    tabContents[i].style.display = "none";
  }
  
  // Get all tab elements
  var tabs = document.getElementsByClassName("tabs")[0].getElementsByTagName("li");
  
  // Loop through tab elements
  for (var i = 0; i < tabs.length; i++) {
    // Remove 'active' class from all tabs
    tabs[i].classList.remove("active");
  }
  
  // Show the selected tab content
  document.getElementById(tabId).style.display = "block";
  
  // Add 'active' class to the selected tab
  document.querySelector("[onclick='changeTab(\"" + tabId + "\")']").classList.add("active");
}
