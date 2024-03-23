import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="info">
              <h2 className="m-0 fw-bold">Contact Author</h2>
              <p>Say Hi or pretend to</p>
              <h6>Marry Boast</h6>
              <address>
                62914 Madison Street
                <br />
                San Pablo, CA 9406
              </address>
              <p className="copy">+001 223 445</p>
              <p className="copy">maryboast@amazonbook.com</p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <Form
              className="myForm"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Row className="mb-3 row-gap-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Control required type="text" placeholder="Name" />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid name
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Control required type="email" placeholder="e-Mail" />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Control as="textarea" required placeholder="Message" />
                <Form.Control.Feedback type="invalid">
                  Please Enter somthing in the message field
                </Form.Control.Feedback>
              </Form.Group>
              <Button className="submit" type="submit">
                Tell me what you want
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
