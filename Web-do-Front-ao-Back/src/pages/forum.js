import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../components/headlogin';

export default class forum extends Component {
  constructor(props){
    super(props);
    this.state ={
       email:sessionStorage.getItem('@web/email'),
       image:sessionStorage.getItem('@web/image')               
    }

  }
    render(){
      
    return (
    <React.Fragment>
      <Head></Head>
      <div class="container mt-3 bg-dark">
      <div class="container mt-3 bg-dark">
        <span style={{fontSize:15, color:'white'}}>{this.state.email}</span>
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