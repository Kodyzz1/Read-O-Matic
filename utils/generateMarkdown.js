const generateMarkdown = (answers) =>
`# ${answers.title}`;



//Function to render the license badge
function renderLicenseBadge(license) {
    if (license === 'MIT License') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache License 2.0') {
        return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GNU General Public License v3.0') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license === 'BSD 3-Clause License') {
        return '[![License: BSD](https://img.shields.io/badge/License-BSD-green.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    } else {
        return '';
    }}

//Generate the README content
const generateReadme = (answers) => {
    const readmeContent = `
      #${answers.title}
  
      ##Description
      ${answers.description}
  
      ##Table of Contents
      - [Installation](#Installation)
      - [Usage](#Usage)
      - [Contribution](#Contribution)
      - [Tests](#Tests)
      - [License](#License)
      - [Questions](#Questions)
  
      ##Installation
      ${answers.installation}
  
      ##Usage
      ${answers.usage}
  
      ##Contribution
      ${answers.contribution}
  
      ##Tests
      ${answers.test}
  
      ##License
      This project is licensed under the ${answers.license} license.
  
      ##Questions
      For any questions, please contact me:
      - GitHub: [${answers.github}](https://github.com/${answers.github})
      - Email: ${answers.email}
      `;}


export default generateMarkdown;