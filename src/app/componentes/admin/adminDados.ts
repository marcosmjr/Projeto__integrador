import { inject, OnInit } from "@angular/core";
import { Dados } from "../../servico/dados/dados";
import { DadosIntefaceAdmin } from "../../servico/dados/dadosIntefaceAdmin";

export class AdminDados{

  interfaceDados: DadosIntefaceAdmin = {
    usuario: "",
    senha: ""
  };

  public static usuario: string = "";
  public static senha: string = "";

  private dados = inject(Dados)

   //dados: Dados = new Dados;

   //List = [];

  getAdminDados(){
    // this.dados.getAdminDados().subscribe((res:any)=>{
    //     this.interfaceDados = Object.entries(res)[0][1] as DadosIntefaceAdmin;
    //   });

     this.dados.getAdminDados().subscribe( res => {
      console.log(res)
    });
  }

  getAdminDados2(){
    this.dados.getAdminDados().subscribe((res:any)=>{
      this.interfaceDados = Object.entries(res)[0][1] as DadosIntefaceAdmin;
      console.log(this.interfaceDados.usuario);
      console.log(this.interfaceDados.senha);
       AdminDados.usuario = this.interfaceDados.usuario;
       AdminDados.senha = this.interfaceDados.senha;

       console.log(AdminDados.usuario);
      console.log(AdminDados.senha);
    });
  }

}
