import React from "react";
import { Form } from "react-router-dom";

export const contactData= async({request})=>{
  try{
     const res =await request.formData();
     const data = Object.fromEntries(res);
      console.log(data);
      
  }
  catch(error){
    console.log(error);
  }
};

export const ContactUs = () => {
  return (
    <div className="contactBody">
      <div className="contact-form-container">
        <h1>Contact Us</h1>

        <Form method="POST" action="/contact" className="contact-form">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message"
            required
          ></textarea>

          <button type="submit">Submit</button>
        </Form>
      </div>
    </div>
  );
};

