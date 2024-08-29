import inquirer from "inquirer";
import fs from "fs";



const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "How would you describe your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "How can your project be installed?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What are the contribution guidelines?",
  },
  {
    type: "input",
    name: "test",
    message: "What are the test instructions?",
  },
  {
    type: "list",
    name: "license",
    message: "What license would you like to use?",
    choices: [
      { name: "MIT License", value: "MIT License" },
      { name: "Apache License 2.0", value: "Apache License 2.0" },
      {
        name: "GNU General Public License v3.0",
        value: "GNU General Public License v3.0",
      },
      { name: "BSD 3-Clause License", value: "BSD 3-Clause License" },
      { name: "No License", value: "No License" },
    ],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

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
  }
}

const generateReadme = (answers) => {
  // Generate the content of the README file using the answers object
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

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## Contribution
    ${answers.contribution}

    ## Tests
    ${answers.test}

    ## License
    This project is licensed under the ${answers.license} license.

    ## Questions
    For any questions, please contact me:
    - GitHub: [${answers.github}](https://github.com/${answers.github})
    - Email: ${answers.email}
    `;

  // Write the content to a README file
  fs.writeFile("README.md", readmeContent, "utf8", (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README.md file has been generated successfully!");
    }
  })
};

inquirer.prompt(questions).then((answers) => {
  generateReadme(answers);
});
