const path = require('path');
const fs = require('fs');

//The second file path doesn't exist - it will throw an error
const files = ['.bash_profile', './badFilePath', '.npmrc'];

//This code does not know how to handle the error: 
files.forEach(file => {
  const filePath = path.resolve(process.env.HOME, file);
  const data = fs.readFileSync(filePath); 
  //fs.readFileSync is a built in method of the file system module
  console.log('File data is: ', data);
});

//Add a try catch block to handle respond to an error/failure
files.forEach(file => {
  try {
    const filePath = path.resolve(process.env.HOME, file);
    const data = fs.readFileSync(filePath);
    console.log('File data is', data);
  } 
  //Use if statement to add specifics:
  catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File not found');
    } else {
      throw err;
    }
  }
});