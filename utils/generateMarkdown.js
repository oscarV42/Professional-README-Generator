// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "MIT"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellow.svg)`;
  }else if(license == "APACHE 2.0"){
    return `![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)`
  }else if(license == 'GPL 3.0'){
    return `![GitHub license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  }else if(license == 'BSD 3'){
    return `![GitHub license](https://img.shields.io/badge/License-${license}--Clause-blue.svg)`
  }else{
    return "";
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license != ""){
    return `
## License

This project is licensed under the ${license} license`
  }else{
    return "";
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  licenseSection = renderLicenseSection(data.license);
  licenseBadge = renderLicenseBadge(data.license);
  return `
# ${data.title}
${licenseBadge}

## Description

${data.description}

## Table of Contents

* [installation](#installation)
          
* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:
          
---
    ${data.install}
---

## Usage

${data.user_info}

${licenseSection}

## Contributing

${data.contribution}

## Tests

---
    ${data.test}
---

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at 
[${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
