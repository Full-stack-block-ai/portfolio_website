// Toggle project card expansion
document.querySelectorAll('.btn-project-toggle').forEach(button => {
    button.addEventListener('click', function() {
         // Get the parent card and check if the card is expanded
        const card = this.parentElement;
        const isExpanded = card.getAttribute('data-expanded') === 'true'; 

        if (isExpanded) {
            // Collapse the card
            card.setAttribute('data-expanded', 'false');
            this.innerText = 'View More';
        } else {
            // Expand the card
            card.setAttribute('data-expanded', 'true');
            this.innerText = 'View Less'; 
        }
    });
});

// Set the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();
