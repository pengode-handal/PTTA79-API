// Import nodemailer library
const nodemailer = require("nodemailer");
// Import fungsi-fungsi untuk dapetin data dari database MongoDB dari file utils.js
const utils = require("./utils");
// Import untuk layout UIUX Undangan dari file template.js
const template = require("./template");
require("dotenv").config();

// Konfigurasi transporter untuk mengirim email
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER_NAME,
        pass: process.env.PASSWORD,
    },
});

// Fungsi untuk mengirim email
class EmailSender {
    constructor() {
       this.emailCount = 1;
    }
   
    sendEmail = (email, code, name, id, counter) => {
       const subject = `Testimoni Undangan`;

       const emailContent = {
            to: email,
            subject: subject,
            html: template.html(name, code, id),
       };
        // console.log(emailContent);
        // Mulai untuk bruteforce ngirim email
        transporter.sendMail(emailContent, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log(`(${this.emailCount}/${counter}) Email terkirim ke ${email}: ` + info.response);
            }
        });
       this.emailCount++;
    };
}
const emailSender = new EmailSender()

// Kirim email ke setiap alamat dengan subjek yang sesuai
// Kode dibawah ini cuman dipake kalau bener-bener udah fix!!!!! jangan di uncomment
// const execEmail = async () => {
//     let emails = await utils.getSelectedItems("email");
//     let codes = await utils.getSelectedItems("code");
//     let names = await utils.getSelectedItems("name");
//     let ids = await utils.getSelectedItems("id");
//     emails.forEach((email, index) => {
//         const code = codes[index];
//         const name = names[index];
//         const id = ids[index];
//         sendEmail(email["email"], code["code"], name["name"], id["id"], emails.length);
//     });
// };

// Untuk ngetes doang
sendEmail("email", "kode", "nama", "id");
