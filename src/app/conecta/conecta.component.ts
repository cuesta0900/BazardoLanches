import { Component, NgModule } from '@angular/core';
import { ServerService } from '../server.service';
import { valores,valoresPost } from './Model/respostaModel';

@Component({
  selector: 'app-conecta',
  templateUrl: './conecta.component.html',
  styleUrls: ['./conecta.component.css']
})
export class ConectaComponent {
  //criar um construtor para chamar o serviço
  //ServerService é o serviço externo - link do Reqres
  constructor(public servico:ServerService){
  }
  val: valores[]=[];
    client: valoresPost={} as valoresPost;
    clientResult: valoresPost={} as valoresPost;
    vItemEmail: string = "";
    vItemPassword: string = "";
    abrirMenu:boolean = false;


 chamadaBack(){
    this.val=[];
    this.clientResult={}as valoresPost;
    //serviço chama o ServerService e assina o serviço e ja espera a resposta

    this.servico.getTodosUsuarios().subscribe(
      (resposta : any)=>
    {
      this.val = (resposta.data);
    })
  }
  chamadaBackPost(){

    this.val=[];
    this.clientResult={}as valoresPost;
    this.client = {email:this.vItemEmail, password:this.vItemPassword}

    this.servico.postUsuario(this.client).subscribe(
      (resp : any)=>
    {
      this.clientResult = (resp);
      this.validaEntrada(resp);
    })

  }

  validaEntrada(resp: any){
    if(Object.keys(resp)[0] == "token"){
      alert("Login efetuado!")
      this.abrirMenu = true;
    }else{
      alert("Usuário não reconhecido!")
    }
  }
}
