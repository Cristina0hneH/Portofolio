        //dependencies
require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");


    //server setup

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(cors({origin: '*'}));
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "../src")));


app.listen(3001, () => console.log("Server Running"));

    //Nodemailer

    const contactEmail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: "LOGIN",
          user: process.env.GMAIL_USER,
          pass: process.env.PASSWORD,
        }
      });

      //auth confirmation

      contactEmail.verify((error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Ready to Send");
        }
      });


    router.post("/", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: GMAIL_USER,
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>`,
    };
        contactEmail.sendMail(mail, (error) => {
          if (error) {
            res.json({ status: "ERROR" });
          } else {
            res.json({ status: "Message Sent" });
          }
        });
      });