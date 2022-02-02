#!/usr/bin/env node

// function toValidPackageName(projectName) {
//   return projectName
//     .trim()
//     .toLowerCase()
//     .replace(/\s+/g, '-')
//     .replace(/^[._]/, '')
//     .replace(/[^a-z0-9-~]+/g, '-');
// }

// function canSafelyOverwrite(dir) {
//   return !fs.existsSync(dir) || fs.readdirSync(dir).length === 0;
// }

// function emptyDir(dir) {
//   if (!fs.existsSync(dir)) {
//     return;
//   }

//   postOrderDirectoryTraverse(
//     dir,
//     (dir) => fs.rmdirSync(dir),
//     (file) => fs.unlinkSync(file)
//   );
// }

import chalk from 'chalk';
import prompts from 'prompts';

// function isValidPackageName(projectName) {
//   return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
//     projectName
//   );
// }

console.log(`
//   ${chalk.underline('Kickoff')}: Frontend Scaffolding CLI

//   Choose...
// `);

async function init() {
  const questions = [
    {
      type: 'text',
      name: 'projectname',
      message: 'Project Name',
      initial: 'kickoff-project',
    },
    {
      type: 'text',
      name: 'packagename',
      message: 'Package Name',
      initial: () => arguments['projectname'],
    },
    {
      type: 'number',
      name: 'age',
      message: 'How old are you?',
      validate: (value) => (value < 18 ? `Sorry, you have to be 18` : true),
    },
    {
      type: 'password',
      name: 'secret',
      message: 'Tell me a secret',
    },
    {
      type: 'confirm',
      name: 'confirmed',
      message: 'Can you confirm?',
    },
    {
      type: (prev) => prev && 'toggle',
      name: 'confirmtoggle',
      message: 'Can you confirm again?',
      active: 'yes',
      inactive: 'no',
    },
    {
      type: 'list',
      name: 'keywords',
      message: 'Enter keywords',
    },
    {
      type: 'select',
      name: 'color',
      message: 'Pick a color',
      choices: [
        {
          title: 'Red',
          description: 'This option has a description.',
          value: '#ff0000',
        },
        { title: 'Green', value: '#00ff00' },
        { title: 'Yellow', value: '#ffff00', disabled: true },
        { title: 'Blue', value: '#0000ff' },
      ],
    },
    {
      type: 'multiselect',
      name: 'multicolor',
      message: 'Pick colors',
      hint: false,
      choices: [
        {
          title: 'Red',
          description: 'This option has a description.',
          value: '#ff0000',
        },
        { title: 'Green', value: '#00ff00' },
        { title: 'Yellow', value: '#ffff00', disabled: true },
        { title: 'Blue', value: '#0000ff' },
      ],
    },
  ];

  return await prompts.prompt(questions);
}

await init()
  .then((anwers) => console.log(anwers))
  .catch((error) => console.error(error));
