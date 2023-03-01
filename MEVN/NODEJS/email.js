var nodemailer=require('nodemailer');

var transporter=nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'youremailaddress',
        pass:'yourpassword'
    }
});

var mailOptions={
    from:'youremailaddress',
    to:'emailaddressofreciever',
    subject:'Sending Email using Node.js',
    text: 'That was so easy!'
};

transporter.sendMail(mailOptions,function(error,info){
    if (error){
        console.log(error);
    }else {
        console.log('Email sent: ' + info.response);
    }
});