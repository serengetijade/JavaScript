//Require statement using destructuring to extract only the relevant process: 
const { spawn } = require('child_process');

//Call the spawn with a string representing the command:
const pwd = spawn('pwd');
pwd.stdout.pipe(process.stdout);    //Use the pipe method to send the spawn output to the process.stdout (.stdout is a stream that controls communicatoin between the Node process and the OS ececution environment).

const { HOME } = process.env;

//Syntax: spawn(command[, args][, options])
const cat = spawn('cat', [`${HOME}/.bash_profile`]); 
cat.stdout.pipe(process.stdout);
  //process.env =  a view of the state of the system environment variables.
  //'cat' is a command keyword that allows you to read/print the content of the file. 
  //[`${HOME}..., ...] = an array of all the arguments to pass to the spawn process. 

//Syntax: spawn(command[, args][, options])
const ls = spawn('ls', ['-l', '.']);
ls.stdout.pipe(process.stdout);
  //'ls' is a command keyword to list files

// Use Shell Syntax
const shell = spawn('ls -al ~ | wc -l', { shell: true });
shell.stdout.pipe(process.stdout);