const body = document.querySelector('body');
const footer = document.createElement('footer');
const copyright = document.createElement('p');

const today = new Date();
const thisYear = today.getFullYear();

copyright.innerHTML = `&copy; ${thisYear} Mikalai Trukhanovich.`;
footer.classList.add('footer-style');

footer.appendChild(copyright);
body.appendChild(footer);

const skills = [
    "Comprehensive knowledge of test documentation",
    "Basic knowledge of JavaScript programming language",
    "Understanding of Agile software development methodology",
    "Proficient in Jira, Slack, GitHub, ADB, and Postman",
    "Familiar with Chrome, Firefox, Opera, Edge, Oracle, MS SQL Server, Windows OS, Microsoft Office suite (Word, Excel, PowerPoint), and Android",
    "Excellent analytical and problem-solving skills",
    "Self-starter with the ability to work well under pressure and meet tight deadlines",
    "Risk assessment and management capabilities",
    "Fluent in Russian and Belarusian, both written and spoken"
];

const skillsSection = document.getElementById('skills');
if (skillsSection) {
    const skillsList = skillsSection.querySelector('ul');
    for (let i = 0; i < skills.length; i++) {
        const skillItem = document.createElement('li');
        skillItem.textContent = skills[i];
        skillsList.appendChild(skillItem);
    }
} else {
    console.error('Not found!');
}
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const messageLabel = document.getElementById('message_label');
    messageLabel.style.display = 'block';
    messageLabel.textContent = 'Message';
    
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    console.log('Form submitted');
    console.log('Name:', usersName);
    console.log('Email:', usersEmail);
    console.log('Message:', usersMessage);

    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');

    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>
    <span>wrote: ${usersMessage}</span>`;
    console.log('New message created:', newMessage);

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.classList.add('remove-button');

    removeButton.addEventListener('click', function () {
        const entry = removeButton.parentNode;
        console.log('Removing:', entry);
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    console.log('Message appended to list:', newMessage);

    event.target.reset();
});

const customProjectNames = {
    "mikalai-trukhanovich-jupiter": "Code the Dream Project: Portfolio",
    "Code_The_Dream_Project_Open_API": "Code The Dream Project Open API"
};

fetch('https://api.github.com/users/Mikalaitru/repos')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(repositories => {

        const projectSection = document.getElementById('Projects');
        const projectList = projectSection.querySelector('ul');

        for (let i = 0; i < repositories.length; i++) {
            
            const repoName = repositories[i].name;
            const ProjectName = customProjectNames[repoName] || repoName;

            const project = document.createElement('li');
            project.textContent = ProjectName; 
            projectList.appendChild(project);
        }
    })
    .catch(error => {
        console.error('Error fetching repositories:', error);
        const projectSection = document.getElementById('Projects');
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Unable to load projects at this time. Please try again later.';
        projectSection.appendChild(errorMessage);
    });

    