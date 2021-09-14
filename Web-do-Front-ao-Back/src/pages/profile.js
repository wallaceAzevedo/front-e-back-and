import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../components/headlogin';

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state ={
       email:sessionStorage.getItem('@web/email'),
       name:sessionStorage.getItem('@web/name'),
       image:sessionStorage.getItem('@web/image'),  
              
    }

  }
    render(){
      
    return (
    <React.Fragment>
      <Head></Head>
      <div class="container mt-3 bg-dark">
        <span style={{fontSize:15, color:'white'}}>Bem vindo usuario: {this.state.name}
        </span>
      
        <form class="m-3" onSubmit={this.updateInformation}>
              <div class="form-group">
                <label for="exampleInputEmail1" class="text-success" >Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} aria-describedby="emailHelp" placeholder="Enter email"/>
              </div>
              <div class="form-group">
                <label class="text-success" for="exampleInputPassword1">Nome</label>
                <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}  class="form-control" id="exampleInputPassword1" placeholder="Password"/>
              </div>
              <button type="submit" class="btn btn-success mb-3">Alterar</button>
          </form>
          <form class="ml-3" onSubmit={this.updateImg}>
            <div class="btn-group " role="group" aria-label="Exemplo básico">
              <div class="wrap-input100 validate-input" data-validate="Enter imagem">
                  <span class="btn-show-pass">
                      <i class="zmdi zmdi-eye"></i>
                  </span>
                  <label class="btn btn-secondary" style={{fontSize:12, height:45}}>
                                        Imagem
                    <i class="fas fa-cloud-upload-alt ">
                          <input type="file" name="file" id="file" accept="image/x-png,image/gif,image/jpeg" hidden/>
                    </i>  
                  </label>
              </div>
              <div class="row d-flex justify-content-center">
                <div class="form-group">
                  <div class="col-sm-12">
                      <button type="submit" style={{fontSize:12, height:45}} class="btn btn-success ml-3">Mudar Imagem</button>
                  </div>
                </div>
              </div>
            </div>
        </form>
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