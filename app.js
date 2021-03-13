import * as fs from 'fs';
// const fs = require('fs');

const fileName = 'notes.txt';

if (fs.existsSync(fileName)) {
  fs.appendFileSync(fileName, ' Hello world!');
} else {
  fs.writeFileSync(fileName, 'This file was created by Node.js!');
  console.log('File created!');
}
