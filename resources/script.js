// Select all toggle buttons
document.querySelectorAll('.btn-project-toggle').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.parentElement; // Get the parent card
        const isExpanded = card.getAttribute('data-expanded') === 'true'; // Check if the card is expanded

        if (isExpanded) {
            // Collapse the card
            card.setAttribute('data-expanded', 'false');
            this.innerText = 'View More'; // Change button text
        } else {
            // Expand the card
            card.setAttribute('data-expanded', 'true');
            this.innerText = 'View Less'; // Change button text
        }
    });
});
