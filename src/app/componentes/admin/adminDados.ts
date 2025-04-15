import { inject, OnInit } from "@angular/core";
import { Dados } from "../../servico/dados/dados";
import { DadosIntefaceAdmin } from "../../servico/dados/dadosIntefaceAdmin";
import { map } from "rxjs";

export class AdminDados{


 // private dados = inject(Dados);
//   dadosApi: DadosIntefaceAdmin[] = [];

//   constructor(private dadosAdminApi: Dados){ }

// ngOnInit(): void {
//   this.dadosAdminApi.carregaDadosAdmin().subscribe(
//     (dados) => {
//       this.dadosApi = dados;
//       console.log("Dados da api = ", this.dadosApi);
//     },
//     (erro) => {
//       console.log("Erro Ao carregar dados da api");
//     }
//   );

// }



}







/*  interfaceDados: DadosIntefaceAdmin = {
    usuario: "",
    senha: ""
  };

  interfaceDadosArray: DadosIntefaceAdmin[] = [];

  public static usuario: string = "";
  public static senha: string = "";
  auxiliar: any;
  auxiliar2: any;

  private dados = inject(Dados)



  getAdminDados(){
      this.dados.getAdminDados().subscribe( res => {

      console.log(res)
      //this.auxiliar = res;

    });
  }

  getAdminDados2(): any {
    this.dados.getAdminDados().subscribe((res:any)=>{
      this.interfaceDados = Object.entries(res)[0][1] as DadosIntefaceAdmin;
      console.log("Da Interface = ", this.interfaceDados.usuario);
      console.log("Da Interface = ", this.interfaceDados.senha);
      console.log(res)
      this.auxiliar = res.map((resp: any) => resp.usuario)
      console.log("adminDados auxiliar = ",this.auxiliar)
    });
    return this.auxiliar;
  }

  getAdminDados3(){
    this.dados.getAdminDados().subscribe((res: any)=>{
      this.interfaceDadosArray = Object.values(res) as DadosIntefaceAdmin[]
      console.log("getAdminDados3",res)
      this.auxiliar = res.map((resp: any) => resp.usuario)
      console.log("adminDadosArray auxiliar = ",this.auxiliar)
    });
  }

  getAdminDados4(){
    this.dados.getAdminDados().subscribe((res: any)=>{
      this.interfaceDadosArray = Object.values(res) as DadosIntefaceAdmin[]

      this.auxiliar2 = JSON.parse(res)
      console.log("auxiliar2 = ", this.auxiliar2)
    });
    }*/



//}
