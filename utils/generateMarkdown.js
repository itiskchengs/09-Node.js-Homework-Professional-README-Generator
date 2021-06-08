// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }else if (license === 'APACHE 2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }else if(license === 'GPL 3.0'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }else if(license === 'BSD 3'){
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }else{
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'MIT'){
    return [
      `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.`
  ];
  }else if (license === 'APACHE 2.0'){
    return [
      ` Copyright 2021

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  ];
  }else if(license === 'GPL 3.0'){
    return [
      `The GNU General Public License is a free, copyleft license for software and other kinds of works.
      `];
  }else if(license === 'BSD 3'){
    return [
    `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    
    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    
    3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.`];
  }else{
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#-installation)

  * [Usage](#-usage)

  * [Contributing](#-contributing)

  * [Tests](#-tests)

  * [License](#-license)

  * [Video](#-video)

  * [Questions](#-questions)

  ## Installation

  To install necessary dependencies, run the following command:

  ${data.dependencies}

  ## Usage

  ${data.repo}

  ## Contributing 

  ${data.contributing}

  ## Tests

  To run tests, run the following command:

  ${data.test}

  ## License 

  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

  ## video

  https://drive.google.com/file/d/1322qvvWcoO7vXSSzZ25UNy73fqVRWWwa/view

  ## Questions 

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [https://github.com/${data.username}/](https://github.com/${data.username}/).
  

`;
}

//Turn this into an object it should work
module.exports = { 
generateMarkdown
}

