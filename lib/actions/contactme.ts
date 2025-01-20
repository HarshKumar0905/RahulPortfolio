"use server";
import { connectToDB } from "../validations/mongoose";
import Contact from "../models/contact";
import MailSender from "../../Utilities/MailSender";
const {contactEmail} = require('../mails/contactEmail');

interface Params {
    firstName : String,
    lastName : String,
    email : String,
    countryCode : String,
    number : Number,
    message : String
}

export async function sendContactDetails({
    firstName, lastName, email, countryCode, number, message  
} : Params) {
    try {
      connectToDB();

      if(!firstName || !lastName || !email || !countryCode || !number || !message )
        throw new Error("Missing fields in the entry");
  
      const createdThread = await Contact.create({
        firstName, lastName, email, countryCode, number, message
      });

      const emailResponse = await MailSender(
        "pranshu09051@gmail.com",
        `Hey Rahul, you got a connection request`,
        contactEmail(firstName, lastName, email, countryCode, number, message)
    );

      console.log("Successfully sended the contact", createdThread);
    } catch (error: any) {
      throw new Error(`Failed to send the contact details: ${error.message}`);
    }  
}