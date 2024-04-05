/* eslint-disable react/prop-types */
import Nav from "../../component/Nav";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <Nav />
      <div className="contact-section">
        <a
          href="mailto:agastyarajawat909@gmail.com"
          style={{ textDecoration: "none", color: "white" }}
        >
          <p className="title">Mail Me</p>
        </a>
        <a
          href="https://www.linkedin.com/in/agastya-rajawat/"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <p className="title">LinkedIn</p>
        </a>
        <a
          href="https://github.com/agastya909"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <p className="title">Github</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
