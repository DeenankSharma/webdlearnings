/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import fs from 'fs';
import inquirer from "inquirer";
import qr_image from "qr-image";

inquirer.prompt([
    {
        type:"input",
        name:"url",
        message:"enter a valid url"
    }
]).then((answers)=>{
    
    const qrcode = qr_image.image(answers.url,{type:"png"});
    const qroutput = fs.createWriteStream('qr-code.png');
    qrcode.pipe(qroutput);

    fs.writeFile('text.txt',answers.url,function(err){
        if(err) throw err;
        console.log("saved");
    })
})