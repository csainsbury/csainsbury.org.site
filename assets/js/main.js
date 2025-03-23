// Simple JavaScript for the website

// Make external links open in a new tab
document.addEventListener('DOMContentLoaded', function() {
  const links = document.links;
  
  for (let i = 0, linksLength = links.length; i < linksLength; i++) {
    if (links[i].hostname !== window.location.hostname) {
      links[i].target = '_blank';
      links[i].rel = 'noopener noreferrer';
    }
  }
});

// Highlight current page in the sidebar navigation
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-list a');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    // Check if the current page matches the link or if it's a section within the current page
    if (currentPage === linkPath || 
        (currentPage.includes(linkPath) && linkPath !== '/')) {
      link.classList.add('active');
    }
  });
});

// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    });
  });
});