function generateRandomPassword() {
    const characters = '/.{8,}/';
    let password = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
function sendOTP(){

const email = document.getElementById('email');
const randomPassword = generateRandomPassword();

let emailBody = `
<h1>See</h1>
<h2>Your password is: </h2>${randomPassword}
`;

Email.send({
secureToken  : "2c9c9515-817d-4895-a050-85f5654fffeb",
Host: "smtp.elasticemail.com",
Username : "hiralkhatik686@gmail.com",
Password : "1DD20D7ECEA43566AFA570B9ED59030194EE",
To : email.value,
From : email.value,
Subject : "This is the subject",
Body : emailBody
}).then(
message =>{
    if(message==="OK"){
        alert("password send to your email: " + email.value);
        
    }
}
);
}