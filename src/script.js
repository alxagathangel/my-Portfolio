document.addEventListener("DOMContentLoaded", function () {
  const switchCheckbox = document.getElementById("switch");
  const switchLabel = document.querySelector(
    'label[for="switch"] span:nth-of-type(2)'
  ); // Select the text span
  function updateSwitchLabel() {
    if (switchCheckbox.checked) {
      switchLabel.textContent = " Switch to Light Mode";
    } else {
      switchLabel.textContent = " Switch to Dark Mode";
    }
  }
  switchCheckbox.addEventListener("change", updateSwitchLabel);
  updateSwitchLabel(); // Initial call to set the correct text
});
