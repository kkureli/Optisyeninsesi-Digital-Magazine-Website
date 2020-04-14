import React, { useState } from "react";
import style from "./Iletisim.css";
import Modal from "react-bootstrap/Modal";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalBody from "react-bootstrap/ModalBody";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from "react-bootstrap/Button";

const Iletisim = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [telNo, setTelNo] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };
  const handleChangeTelNo = (e) => {
    setTelNo(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(true);

    const templateParams = {
      to_name: "Orhan",
      gonderen_isim: name,
      message_html: content,
      gonderen_email: email,
      gonderen_tel: telNo,
    };

    const templateId = "template_cPW5bU3K";

    window.emailjs.send(
      "default_service", // default email provider in your EmailJS account
      templateId,
      templateParams
    );
  };

  return (
    <>
      <div class="container contact-form">
        <div class="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>
        <form onSubmit={(event) => handleSubmit(event)}>
          <h3>Bizimle İletişime Geçin</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  onChange={(event) => handleChangeName(event)}
                  required
                  type="text"
                  name="txtName"
                  class="form-control"
                  placeholder="Ad Soyad *"
                />
              </div>
              <div class="form-group">
                <input
                  onChange={(event) => handleChangeEmail(event)}
                  required
                  type="email"
                  name="txtEmail"
                  class="form-control"
                  placeholder="Email *"
                />
              </div>
              <div class="form-group">
                <input
                  onChange={(event) => handleChangeTelNo(event)}
                  type="number"
                  name="txtPhone"
                  class="form-control"
                  placeholder="Telefon Numarası:"
                />
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  name="btnSubmit"
                  class="btnContact"
                  value="Gönder"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea
                  onChange={(event) => handleChangeContent(event)}
                  required
                  name="txtMsg"
                  class="form-control"
                  placeholder="Your Message *"
                  style={{ width: "100%", height: "150px" }}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <ModalTitle>
              <p style={{ color: "red" }}>Optisyeninsesi</p>{" "}
            </ModalTitle>
          </Modal.Header>
          <ModalBody>
            <p style={{ color: "black" }}>
              Mesajınız alınmıştır. Teşekkürler.{" "}
            </p>{" "}
          </ModalBody>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>{" "}
      </div>
    </>
  );
};

export default Iletisim;
