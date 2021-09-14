import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../components/head';
//import { render } from '@testing-library/react';
//import { Redirect } from 'react-router';

function register () {
  return (
  <React.Fragment>
    <Head></Head>
    <div class="container mt-3 bg-dark">
      <div class="card p-3 bg-dark">
      <form class="bg-dark ">
      <div class="form-group">
          <label class="text-success mt-3 mb-3" for="exampleInputEmail1">Titulo da publicação</label>
          <input type="text" class="form-control bg-light p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Titulo" name="title"/>         
        </div>
        <div class="form-group">
          <label class="text-success mt-3 mb-3" for="exampleInputEmail1">Publicação</label>
          <textarea type="email" class="form-control bg-light p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Publicação" name="pb">
          </textarea>         
        </div>
        <div class="form-group " >
          <label class="btn btn-warning mt-3 text-dark" style={{fontSize:14,fontWeight:600, height:40, width:80}}>
            Imagem
            <i class="fas fa-cloud-upload-alt">
                <input type="file" name="file" id="file" accept="image/x-png,image/gif,image/jpeg" hidden/>  
            </i> 
          </label>    
        </div> 

        <button type="submit" class="btn btn-success mt-3">Publicar</button>
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
  export default register;


  //caso de errado na linha 21 trocar email por text