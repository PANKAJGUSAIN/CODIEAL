const nodeMailer =require('nodemailer');
const ejs =require('ejs');
const path =require('path');

const env =require('./environment');


//defining transport
//transporter is an object which will be attached/assigned with nodeMailer
//this part sends the mail 
//this defines how the communication is going to take place
let transporter = nodeMailer.createTransport(env.smtp);

//it defines whenever  it is going to send a html email and the file would be placed at views folder
let renderTemplate =(data,relativePath) => {
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        function(err,template){
            if(err){console.log('error in rendering template',err)};
            
            mailHTML =template;
        }
    )

    return mailHTML;
}


module.exports ={
    transporter:transporter,
    renderTemplate :renderTemplate
}
