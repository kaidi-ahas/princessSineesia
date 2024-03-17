document.addEventListener("DOMContentLoaded", function() {
  // Function to save checkbox state in local storage
  function saveCheckboxState() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        localStorage.setItem(checkbox.name, checkbox.checked);
      });
      // Retrieve the saved state from local storage
      const savedState = localStorage.getItem(checkbox.name);
      if (savedState === 'true') {
        checkbox.checked = true;
      }
    });
  }

  // Call the function to save checkbox state
  saveCheckboxState();
});