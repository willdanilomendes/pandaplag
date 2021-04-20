import React from 'react';

import { Container, FormContact } from './styles';
import ButtonSendNow from '../button/ButtonSendNow';

function Contact() {
  return (
    <Container>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 col-12">
            <h2 className="contact__title">U have question? Contact us </h2>
            <h5>We will contact you shortly.</h5>
          </div>
          <div className="col-md-4 col-12">
            <FormContact>
              <form action="" method="post">
                <div className="form-group">
                  <label htmlFor="Name">Name</label>
                  <input type="text" className="form-control" name="" id=""/>
                </div>
                <div className="form-group">
                  <label htmlFor="Name">E-mail</label>
                  <input type="text" className="form-control" name="" id=""/>
                </div>
                <div className="form-group">
                  <label htmlFor="Name">Message</label>
                  <textarea name="Message" className="form-control" rows="5"></textarea>
                </div>
                <div className="form-group">
                  <ButtonSendNow type="submit">Send now</ButtonSendNow>
                </div>
              </form>
            </FormContact>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Contact;