function toggleSections() {
  const sections = document.querySelector('.n-nav');
  sections.style.width = sections.style.width === '250px' ? '0' : '250px';
  const closeButton = document.getElementById('close');
  closeButton.style.display = closeButton.style.display === 'block' ? 'none' : 'block';
}
function toggleSection() {
  const sections = document.querySelector('.a-nav');
  sections.style.width = sections.style.width === '250px' ? '0' : '250px';
  const closeButton = document.getElementById('a-close');
  closeButton.style.display = closeButton.style.display === 'block' ? 'none' : 'block';
}





           