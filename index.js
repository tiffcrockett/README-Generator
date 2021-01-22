const inquirer = require('inquirer');
const fs = require('fs'); 

inquirer
    .prompt([ 
    {
        type: 'input',
        message: 'What is the name of your application?',
        name: 'title',
    }, 
    {
        type: 'editor',
        message: 'Describe your project.',
        name: 'description',
    }, 
    {
        type: 'input',
        message: 'Explain the installation instructions for your application.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'List the steps to use your application (eg. 1. Do something., 2. Next thing.)',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the guidelines for contributing to your application?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Provide instructions on how to test your application?',
        name: 'test',
    }, 
    {
        type: 'list',
        message: 'Choose a license for your application:',
        name: 'license',
        choices: ['None','Apache License 2.0','GNU General Public License v3.0','MIT License','BSD 2-Clause "Simplified" License','BSD 3-Clause "New" or "Revised" License','Boost Software License 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0','GNU Affero General Public License v3.0','GNU General Public License v2.0','GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },  
    {   type: 'list',
        message: 'Select image URL that goes with your license',
        name: 'licenseurl',
        choices: ['', '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)', '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)', '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)', '![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)' , '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)' , '![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)', '![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)' , '![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)' , '![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)', '![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)', '![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)', '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)' ,'![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)' ]
    },
    {
        type: 'input',
        message: 'Enter your Github username:',
        name: 'githubuser'
    },
    {
        type: 'input',
        message: 'Enter your Github URL:',
        name: 'githuburl',
    },  
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    }, 
]).then((response) => {
const markdown = 
`##### README.md

${response.licenseurl}

# ${response.title}
                    
## Table of Contents
* [Description](#description)
* [Webpage-Images](#webpage-images)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies-Used](#technologies-used)
* [Deployed-Link](#deployed-link)
* [Credits](#credits)
* [License](#license)

## Description
          
${response.description} 

## Installation
                  
${response.installation}

## Usage
          
${response.usage}

## Contributing
                  
${response.contributing}

## Test
                    
${response.test}

## License
                    
${response.license}
                  
## Questions
                    
Comments or questions?  You can reach me at:

${response.githubuser}\n
${response.githuburl}\n
${response.email}`; 


// function to write README file
fs.writeFile('generatedReadme.md', markdown, (err) => {
    if (err) throw err;
    console.log("All done! * * Your README.md is complete. * *");
    })   
});