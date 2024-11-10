// Function to show content
function showContent(id) {
    const contentDiv = document.getElementById('content');
    const sections = document.querySelectorAll('.section');

    // Hide all sections
    sections.forEach((section) => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(id);
    selectedSection.style.display = 'block';

    // Update the content div
    contentDiv.innerHTML = '';
    contentDiv.appendChild(selectedSection);
}

// Create sections dynamically
const sections = [
    { id: 'home', content: '<h1>Welcome to my website!</h1>' },
    { id: 'about-me', content: '<h1>About Me</h1><p>Lorem ipsum dolor sit amet.</p>' },
    { id: 'educational-background', content: '<h1>Educational Background</h1><ul><li>Item 1</li><li>Item 2</li></ul>' },
    { id: 'experience', content: '<h1>Experience</h1><ul><li>Item 1</li><li>Item 2</li></ul>' },
    { id: 'publications', content: '<h1>Paper/Patent Publications</h1><ul><li>Item 1</li><li>Item 2</li></ul>' },
    { id: 'awards', content: '<h1>Awards and Achievements</h1><ul><li>Item 1</li><li>Item 2</li></ul>' },
    { id: 'projects', content: '<h1>Projects</h1><ul><li>Item 1</li><li>Item 2</li></ul>' },
    { id: 'membership', content: '<h1>Membership</h1><ul><li>Item 1</li><li>Item 2</li></ul>' },
    { id: 'research-thrust-area', content: '<h1>Research Thrust Area</h1><ul><li>Item 1</li><li>Item 2</li></ul>' },
    { id: 'events', content: '<h1>List of Events</h1><ul><li>Item 1</li><li>Item 2</li></ul>' },
    { id: 'presentations', content: '<h1>Poster/Paper Presentation</h1><ul><li>Item 1</li><li>Item 2</li></ul>' },
    { id: 'courses', content: '<h1>Courses Completed</h1><ul><li>Item 1</li><li>Item 2</li></ul>' },
    { id: 'contact', content: '<h1>Contact Address</h1><p>Lorem ipsum dolor sit amet.</p>' },
];

// Create sections dynamically
sections.forEach((section) => {
    const sectionElement = document.createElement('div');
    sectionElement.id = section.id;
    sectionElement.className = 'section';
    sectionElement.innerHTML = section.content;
    document.getElementById('content').appendChild(sectionElement);
});

// Add event listeners to navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('onclick').replace('showContent(\'', '').replace('\')', '');
            showContent(id);
        });
    });
});

// Show home section by default
document.addEventListener('DOMContentLoaded', () => {
    showContent('home');
});