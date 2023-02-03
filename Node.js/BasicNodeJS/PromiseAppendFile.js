//Credit: https://geshan.com.np/blog/2022/04/nodejs-append-to-file/

//There are multiple ways to append a file, such as will callbacks. However, promises are recommended for readability. 

const fsPromises = require('fs/promises');
//Another way to write require statement using destructuring: const { fsPromises } = require('fs').promises;  

(async () => {
  try {
    const fileName = 'testFile.txt'
    //Syntax: promiseInstance.appendFile(file, content, options)
    await fsPromises.appendFile(fileName, '\nAppend a file with promises!', 'utf-8');
    await fsPromises.appendFile(fileName, '\nSecond line appended.', 'utf-8');
    console.log('Added 2 lines to file.');
  } catch(err) {
    console.log('Error appending data to file', err);
  }
})();