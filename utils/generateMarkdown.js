// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== ""){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }else{
    return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== ""){
    return `         ## License

    This project is licensed under the ${license} license`
  }else{
    return;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  licenseSection = renderLicenseSection(data.license);
  licenseBadge = renderLicenseBadge(data.license);
  return `# ${data.title}
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

          ${data.usage}

          ${licenseSection}

          ## Contributing

          ${data.contributing}

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
