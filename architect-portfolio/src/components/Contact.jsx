import { useEffect, useState } from "react";
import Button from "./Button";

const Contact = () => {
  const [inputValue, setInputValue] = useState("");
  const [labelDisplay, setLabelDisplay] = useState(true);

  const handleInput = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    setLabelDisplay(inputValue === "" ? true : false);
  };

  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <article>
        <div className="contact-form">
          <form>
            <div className="input-wrapper">
              {labelDisplay && <label htmlFor="name">Name</label>}
              <input
                id="name"
                type="text"
                value={inputValue}
                onChange={handleInput}
                onBlur={handleInput}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="phone">
                Phone Number <span>*</span>
              </label>
              <input
                id="phone"
                type="number"
                value={inputValue}
                onChange={handleInput}
                onBlur={handleInput}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="mail">
                E-mail <span>*</span>
              </label>
              <input
                id="mail"
                type="email"
                value={inputValue}
                onChange={handleInput}
                onBlur={handleInput}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="topic">Interested in</label>
              <input
                id="topic"
                type="text"
                value={inputValue}
                onChange={handleInput}
                onBlur={handleInput}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="message" id="messageLabel">
                Message <span>*</span>
              </label>
              <input
                id="message"
                type="text"
                value={inputValue}
                onChange={handleInput}
                onBlur={handleInput}
              />
            </div>

            <Button text="SEND EMAIL" />
          </form>
        </div>
        <div>
          <img src="/img/contact.png" alt="contact image" />
        </div>
      </article>
    </section>
  );
};

export default Contact;
