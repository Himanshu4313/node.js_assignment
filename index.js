const fs = require('fs');

//Here we read a file 
fs.readFile('./nodejs_architecture.txt' , (error , data) =>{
   if(error){
      console.log('Error' , error);
   }else{
      console.log('Data: ', data.toString());
   }
})


// Here we append somethinf in the existing file

fs.appendFile('./nodejs_architecture.txt', 'Additionally text added in the nodejs architecture file' , 'utf8' , (error) =>{
    if(error){
      console.log('Failed to append in the file');
    }else{
        console.log('Successfully append in the file');
    }
})

// Deletion of file

fs.unlink('./nodejs_architecture.txt',(error) =>{
    if(error){
      console.log('Failed to deletion');
    }else{
        console.log('File deleted successfully!');
    }
})

const os = require('os');

console.log('Operating system name ',os.hostname());
console.log('OS release ',os.release());