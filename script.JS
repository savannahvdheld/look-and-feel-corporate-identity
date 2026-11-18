document.addEventListener('DOMContentLoaded', () => {
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownContent = document.querySelector('.dropdown-content');
  const selectedOptions = document.querySelector('.selected-options');
  const checkboxes = document.querySelectorAll('.dropdown-content input[type="checkbox"]');

  // Toggle dropdown
  dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle('show');
  });

  // Update geselecteerde opties
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const selected = [...checkboxes]
        .filter(cb => cb.checked)
        .map(cb => cb.nextSibling.textContent.trim());

      selectedOptions.textContent = selected.length
        ? `Geselecteerd: ${selected.join(', ')}`
        : 'Geen opties geselecteerd.';
    });
  });

  // Sluit dropdown als er buiten wordt geklikt
  document.addEventListener('click', (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
      dropdownContent.classList.remove('show');
    }
  });
});
