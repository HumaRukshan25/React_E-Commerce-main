import React, { useState } from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Your logic for handling form submission (e.g., sending data to a server)

    // Assuming the form submission is successful
    setIsMessageSent(true);
  };

  const handleButtonClick = () => {
    // Clear the success message when the button is clicked
    setIsMessageSent(false);
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleFormSubmit}>
              <div className="form my-3">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="PhoneNumber">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="PhoneNumber"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Message">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  onClick={handleButtonClick}
                >
                  Send
                </button>
              </div>
            </form>

            {isMessageSent && (
              <div className="alert alert-success my-3">
                Message successfully sent!
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
