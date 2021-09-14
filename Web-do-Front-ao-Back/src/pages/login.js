import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../components/head';
//import { render } from '@testing-library/react';
import { Redirect } from 'react-router';

export default class login extends Component {
  constructor(props){
    super(props);
    this.state ={
       email:'',
       senha:'',
       redirect:false,
       user:[],
       
    }
    this.login = this.login.bind(this)
  }

  login(e){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "essecookie=s%3AUmzuOHD-riDsB23YpCNjzYlu8epjt0V0.86xh0iRNt7S3k9tSrzC4JHDiNionVknOMmuNQI2ohHY");

    var raw = JSON.stringify({
      "email": this.state.email,
      "senha": this.state.senha,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/login", requestOptions)
      .then(response => response.json())
      .then(response => {this.setState({user:response || [], redirect:true })})
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      
      e.preventDefault()
    }
  
    
      
    render(){
      if(this.state.redirect){
        sessionStorage.setItem('@web/id', this.state.user.id);
        sessionStorage.setItem('@web/name', this.state.user.name);
        sessionStorage.setItem('@web/email', this.state.user.email);
        sessionStorage.setItem('@web/image', this.state.user.image);
        //sessionStorage.setItem('@web/senha', this.state.user.senha);
        return  <Redirect
                  to={{
                  pathname: "/forum",                
                  //state: { data: this.state.user }
                  }}
              />
      }
    return (
    <React.Fragment>
      <Head></Head>
      <div class="container mt-3 bg-dark">
        <div class="card p-3 bg-dark">
        <form class="bg-dark" onSubmit={this.login}>
          <div class="form-group">
            <label class="text-success mt-3 mb-3" for="exampleInputEmail1">Email address</label>
            <input type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}  class="form-control bg-light p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>       
          </div>
          <div class="form-group">
            <label class="text-success mt-3 mb-3" for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control bg-light" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}  id="exampleInputPassword1" placeholder="Password"/>
          </div>
          
          <button type="submit" class="btn btn-success mt-3">Login</button>
        </form>
        </div>
      </div>
      
      <footer style={{marginTop:500}}>
        <div class="bg-dark text-warning pt-3" style={{height:'75px', textAlign:'center'}}>
          <span>© 2021 Copyright: Wallace</span>
        </div>
      </footer>
    </React.Fragment>
    );
  }
}