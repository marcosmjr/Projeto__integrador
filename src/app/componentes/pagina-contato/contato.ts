export class Contato{
    private nome: String = '';
    private sobrenome: String = '';
    private telefone: String = '';
    private whatsApp: String = '';
    private e_mail: String = '';
    private rua: String = '';
    private numero: String = '';
    private bairro: String = '';
    private cidade: String = '';
    private uf: String = '';
    private servico: String = ''; // i = instalação, m = manutenção, o = outros
    private preferencia: String = ''; // t = telefone, w = WhatsApp, e = e-mail
    private nomeEmpresa: String = 'N/A';
    private mensagem: String = '';

    public getNome(): String{
        return this.nome;
    }

    public setNome(nome: String){
        this.nome = nome;
    }

    public getSobrenome(): String{
        return this.sobrenome;
    }

    public setSobrenome(sobrenome: String){
        this.sobrenome = sobrenome;
    }

    public getTelefone(): String{
        return this.telefone;
    }

    public setTelefone(telefone: String){
        this.telefone = telefone;
    }

    public getWhatsApp(): String{
        return this.whatsApp;
    }

    public setWhatsApp(whatsApp: String){
        this.whatsApp = whatsApp;
    }

    public getEmail(): String{
        return this.e_mail;
    }

    public setEmail(e_mail: String){
        this.e_mail = e_mail;
    }

    public getRua(): String{
        return this.rua;
    }

    public setRua(rua: String){
        this.rua = rua;
    }

    public getNumero(): String{
        return this.numero;
    }

    public setNumero(numero: String){
        this.numero = numero;
    }

    public getBairro(): String{
        return this.bairro;
    }

    public setBairro(bairro: String){
        this.bairro = bairro;
    }

    public getCidade(): String{
        return this.cidade;
    }

    public setCidade(cidade: String){
        this.cidade = cidade;
    }

    public getUF(): String{
        return this.uf;
    }

    public setUF(uf: String){
        this.uf = uf;
    }

    public getServico(): String{
        return this.servico;
    }

    public setServico(servico: String){
        this.servico = servico;
    }

    public getPreferencia(): String{
        return this.preferencia;
    }

    public setPreferencia(preferencia: String){
        this.preferencia = preferencia;
    }

    public getNomeEmpresa(): String{
        return this.nomeEmpresa;
    }

    public setNomeEmpresa(nomeEmpresa: String){
        this.nomeEmpresa = nomeEmpresa;
    }

    public getMensagem(): String{
        return this.mensagem;
    }

    public setMensagem(mensagem: String){
        this.mensagem = mensagem;
    }
}