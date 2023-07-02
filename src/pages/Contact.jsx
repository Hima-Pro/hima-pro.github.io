import useTitle from "../components/useTitle";
import { Icon } from "@iconify/react";
import "../assets/css/contact.css";
import { Components } from "../Imports";


async function SendTGAPI(user, message, showMsg) {
  let SendTGURL = new URL("https://tdim.mdbgo.io/bots/sendtg");
  SendTGURL.searchParams.set("user", user);
  SendTGURL.searchParams.set("message", encodeURI(message));
  let response = await fetch(SendTGURL.href);
  if (response.ok && showMsg) {
    response = await response.json();
    if (response.ok) {
      alert("Form sent successfully !");
    } else {
      alert("Faild to send the From !");
    }
  } else if(showMsg){
    alert("Faild to send the From !");
  }
}
const SendMessage = (event) => {
  event.preventDefault();
  let name = event.target.elements.name.value;
  let mail = event.target.elements.mail.value;
  let message = event.target.elements.message.value;
  let formMessage = `Message From: *${name}* \nMail: ${mail} \nMessage:\n  ${message}`;
  SendTGAPI(1488160151, formMessage, true);
  event.target.reset();
};

const Contact = () => {
  useTitle("Hima-Pro | Contact");
  return (
    <>
      <Components.Header />
      <Components.Loader />
      <section className="contact">
        <div className="contact-header">
          <div className="contact-title">
            <h1><Icon icon="ph:envelope-simple-duotone" /> Contact Me</h1>
            <p>I look forward to hearing from you!</p>
          </div>
          <img className="contact-banner" title="Control center banner" src="/assets/images/contact-banner.svg" />
        </div>
        <div className="contact-sides">
          <div className="side">
          <h2>Contact Details :</h2>
            <a title="Chat with me in WhatsApp" href="https://wa.me/79961027689" target="_blank" rel="noreferrer">
              <Icon icon="fa6-brands:whatsapp" />
              <span> +7 (996) 102-76-89</span>
            </a>
            <a title="Call me (Russia Only)" href="tel:+79961027689" target="_blank" rel="noreferrer">
              <Icon icon="solar:call-chat-bold-duotone" />
              <span> +7 (996) 102-76-89</span>
            </a>
            <a href="http://t.me/pro4us" title="Message me in Telegram" target="_blank" rel="noreferrer">
              <Icon icon="fa6-brands:telegram" />
              <span> @pro4us</span>
            </a>
            <a title="Send me an email" href="mailto:tdim.dev@gmail.com" target="_blank" rel="noreferrer">
              <Icon icon="ph:envelope-simple-duotone" />
              <span> tdim.dev@gmail.com</span>
            </a>
            <a href="https://goo.gl/maps/mTgFcpzktUgz3PNV8" title="See me face to face" target="_blank" rel="noreferrer">
              <Icon icon="solar:map-point-bold-duotone" />
              <span> Studencheskaya Ulitsa, 14Б, Belgorod, Russia, 308007</span>
            </a>
          </div>
          <form className="side" onSubmit={SendMessage}>
            <h2>Contact Form :</h2>
            <input name="name" type="text" placeholder="Name" />
            <input required name="mail" type="email" placeholder="Email" />
            <textarea required name="message" placeholder="Message"></textarea>
            <button type="submit">
              <span> Send</span>
              <Icon icon="iconamoon:send-duotone" />
            </button>
          </form>
        </div>
        <Components.Footer />
      </section>
    </>
  );
};

export default Contact;
