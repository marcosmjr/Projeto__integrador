export class Contato{

  constructor(
    public nome: string = '',
    public sobrenome: string = '',
    public telefone: string = '',
    public whatsApp: string = '',
    public email: string = '',
    public rua: string = '',
    public numero: string = '',
    public bairro: string = '',
    public cidade: string = '',
    public uf: string = '',
    public instalacao: boolean = false,
    public manutencao: boolean = false,
    public compra: boolean = false,
    public outros: boolean = false,
    public preferenciaTelefone: boolean = false,
    public preferenciaWhatsApp: boolean = false,
    public preferenciaEmail: boolean = false,
    public nomeEmpresa: string = 'N/A',
    public mensagem: string = '',

  ){}

public setNomeEmpresa(nomeEmpresa: string){
  this.nomeEmpresa = nomeEmpresa;
}


}
