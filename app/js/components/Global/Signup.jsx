import React from 'react';
import request from 'superagent';
import {Link} from 'react-router';

export default class Signup extends React.Component{
  constructor(props){
    super(props);
  }
  userRegistration(event){
    self = this;
    event.preventDefault();
    var fullName = event.target.elements[0].value;
    var userEmail = event.target.elements[1].value;
    var userName = event.target.elements[2].value;
    var password = event.target.elements[3].value;
    console.log(fullName+userEmail+userName+password);

    request
    .post("http://127.0.0.1:5000/signup")
    .send({fullname: fullName, email: userEmail, username: userName, password: password})
    .set('Content-Type', 'application/json')
    .end(function(err,res){
      if(err){
        console.log('error');
      }
      else{
        alert("registered successfully");
        self.props.router.push('/login');
      }
    })
  }
  render(){
    return(
      <div id = "login-wrapper">
        <div className="container">
          <div className = "row-fluid"  style={{marginTop:'65px', zIndex:1000}}>
            <div className = "span1"></div>
            <div className = "span5" style={{backgroundColor:'#4f6572', padding:'90px 0px 0px 73px', height: '540px'}}>
              <div className="span11">
                <h4>Sign up now</h4>
                <form className="login-form"  onSubmit = {this.userRegistration.bind(this)}>
                  <div className="form-group">
                    <div className="span12 input-prepend">
                      <span className="add-on"><i className="icon-male icon-3x"></i></span>
                      <input type="text" className="form-control" id="fullname" placeholder="FullName" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="span12 input-prepend">
                      <span className="add-on"><i className="icon-envelope   icon-3x"></i></span>
                      <input type="email" className="form-control" id="useremail" placeholder="Email" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="span12 input-prepend">
                      <span className="add-on"><i className="icon-user icon-3x"></i></span>
                      <input type="text" className="form-control" id="user" placeholder="Username" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="span12 input-prepend">
                      <span className="add-on"><i className="icon-lock icon-3x"></i></span>
                      <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-3 col-sm-5">
                      <button type="submit" className="button-login pull-left">Create Account</button>
                      <Link to = "/login">
                        <button type="submit" className="button-login pull-right">Sign Me In</button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className = "span5">
              <img src="../../../dist/img/bg/login-image4.png" alt="image" style = {{marginLeft: '-30px'}}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
