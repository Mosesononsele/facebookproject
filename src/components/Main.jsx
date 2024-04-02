import React from "react";
import facebookImg from "../assets/facebookimg.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Main() {
  return (
    <>
      <main className="d-flex justify-content-center align-items-center">
        {/* parent div */}
        <div className="container row justify-content-between align-items-center">
          {/* div 1 */}
          <div className="photo  col-lg-6">
            <img src={facebookImg} alt="facebook-img" className="img-fluid" />
            <h2 className="first-h2">
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          {/* form */}
          <Form className=" formside col-lg-5 shadow bg-white p-5 "> 
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email or phone number" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicPassword">
              <Form.Label></Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="primary" type="submit" className="button1">
              Log in
            </Button>
            <p className="text-primary p-tag">Forgotten password</p>
            <div>
                <hr />
            </div>
            <button className="button2">Create new account</button>
          </Form>
        </div>
      </main>
    </>
  );
}

export default Main;
