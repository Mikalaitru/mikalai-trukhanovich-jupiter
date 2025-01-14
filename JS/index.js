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
    console.error('Not found.');
}