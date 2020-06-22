import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false
    }
  }
  
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name] : value
    })
  }

  isFileChange = (event) => {
    const img = event.target.files[0].name;
    this.setState({
      fAnh : img
    })
  }

  submitForm = (event) => {
    event.preventDefault();
    this.setState({
      isRedirect:true
    })
  }

  getGiaTri = () => {
    var noiDung = "";
    noiDung += "Ten nhan duoc la: " + this.state.fName;
    noiDung += " / Email nhan duoc la: " + this.state.fEmail;
    noiDung += " / Phone nhan duoc la: " + this.state.fPhone;
    noiDung += " / Mess nhan duoc la: " + this.state.fMess;
    noiDung += " / Ngay nhan duoc la: " + this.state.fNgay;
    noiDung += " / Anh nhan duoc la: " + this.state.fAnh;
    return noiDung;

  }
    render() {
      if (this.state.isRedirect === true) {
        console.log(this.getGiaTri())
        return <Redirect to="/home" />
      }
        return (
            <div>
        <header className="masthead tintuc">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-7 my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5">Trang Liên Hệ</h1>
                  <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                </div>
              </div>
              <div className="col-lg-5 my-auto">
                <div className="device-container">
                  <div className="device-mockup iphone6_plus portrait white">
                    <div className="device">
                      <div className="screen">
                        {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                        <img src="https://blackrockdigital.github.io/startbootstrap-new-age/img/demo-screen-1.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="button">
                        {/* You can hook the "home button" to some JavaScript events or just remove it */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Begin contact */}
        <section className="page-section" id="contact">
          <div className="container">
            {/* Contact Section Heading*/}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
            {/* Icon Divider*/}
            {/* Contact Section Form*/}
            <div className="row">
              <div className="col-lg-8 mx-auto">
                {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                <form id="contactForm" name="sentMessage" noValidate="novalidate">
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Name</label><input className="form-control" name ="fName" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." onChange={(event) =>{this.isChange(event)}}/>
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Email Address</label><input className="form-control" name ="fEmail" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." onChange={(event) =>{this.isChange(event)}}/>
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Phone Number</label><input className="form-control" name ="fPhone" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." onChange={(event) =>{this.isChange(event)}}/>
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Message</label><textarea className="form-control" name ="fMess" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} onChange={(event) =>{this.isChange(event)}}/>
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                      <label>Chọn Ngày</label>
                      <select className="form-control" name="fNgay" onChange={(event) => {this.isChange(event)}}>
                        <option value="3">Thứ 3</option>
                        <option value="5">Thứ 5</option>
                        <option value="7">Thứ 7</option>
                      </select>
                  </div>
                  <br/>
                  <div className="control-group">
                      <label>Chọn File: </label>
                      <div className="form-group">
                        <input type="file" className="form-control-file" name="fAnh" onChange={(event) =>{this.isFileChange(event)}} aria-describedby="fileHelpId" />
                      </div>
                  </div>
                  <br />
                  <div id="success" />
                  <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit" onClick={(event) => this.submitForm(event)}>Send</button></div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
        );
    }
}

export default Contact;