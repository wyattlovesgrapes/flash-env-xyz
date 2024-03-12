import React from 'react';

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here...
    // Assuming the form submission was successful, call onSubmit function
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" cols="50"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
