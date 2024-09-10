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

const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });


// An object containing three arrays that make up our random message.
const messageComponents = {
    projectTypes: [
        "Build a web application",
        "Create a mobile app",
        "Develop a desktop application",
        "Design a RESTful API",
        "Implement a game",
        "Create a command-line tool",
        "Build an e-commerce platform",
        "Develop a chatbot",
        "Design a personal portfolio",
        "Create a social media platform"
    ],
    coreFunctionalities: [
        "that scrapes data from the web",
        "with real-time notifications",
        "that uses AI for predictions",
        "with user authentication and profiles",
        "that integrates with external APIs",
        "with a responsive UI/UX",
        "that supports multiple languages",
        "with cloud storage integration",
        "that offers analytics and reporting",
        "with collaborative features"
    ],
    targetAudiences: [
        "for small businesses",
        "for educational purposes",
        "for social networking",
        "for health and wellness",
        "for content creators",
        "for developers",
        "for gamers",
        "for remote teams",
        "for personal productivity",
        "for environmental sustainability"
    ]
};

const generateRandomProject = () => {
    let projectIdea = '';

    // randomly select an element from the arrays
    for (const key in messageComponents){
        const randomIndex = Math.floor(Math.random() * messageComponents[key].length);
        const selectedComponent = messageComponents[key][randomIndex];

        // using a switch statement to format and return the message.
        switch (key) {
            case "projectTypes":
                projectIdea += selectedComponent;
                break;

            case "coreFunctionalities":
                projectIdea += " " + selectedComponent;
                break;

            case "targetAudiences":
                projectIdea += " " + selectedComponent + ".";
                break;
            default:
                break;
        }
        
    }
    return projectIdea
}


document.addEventListener('DOMContentLoaded', function() {
    const messageButton = document.querySelector('.generate-button');
    const messageDisplay = document.querySelector('.idea-display');

    messageButton.addEventListener('click', function() {
        const newProject = generateRandomProject();
        messageDisplay.textContent = newProject;
    });
});

// Set the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();
