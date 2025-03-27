export class Contato{
    private nome: string = '';
    private sobrenome: string = '';
    private telefone: string = '';
    private whatsApp: string = '';
    private e_mail: string = '';
    private rua: string = '';
    private numero: string = '';
    private bairro: string = '';
    private cidade: string = '';
    private uf: string = '';
    private servico: string = ''; // i = instalação, m = manutenção, o = outros
    private preferencia: string = ''; // t = telefone, w = WhatsApp, e = e-mail
    private nomeEmpresa: string = 'N/A';
    private mensagem: string = '';

    public getNome(): string{
        return this.nome;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public getSobrenome(): string{
        return this.sobrenome;
    }

    public setSobrenome(sobrenome: string){
        this.sobrenome = sobrenome;
    }

    public getTelefone(): string{
        return this.telefone;
    }

    public setTelefone(telefone: string){
        this.telefone = telefone;
    }

    public getWhatsApp(): string{
        return this.whatsApp;
    }

    public setWhatsApp(whatsApp: string){
        this.whatsApp = whatsApp;
    }

    public getEmail(): string{
        return this.e_mail;
    }

    public setEmail(e_mail: string){
        this.e_mail = e_mail;
    }

    public getRua(): string{
        return this.rua;
    }

    public setRua(rua: string){
        this.rua = rua;
    }

    public getNumero(): string{
        return this.numero;
    }

    public setNumero(numero: string){
        this.numero = numero;
    }

    public getBairro(): string{
        return this.bairro;
    }

    public setBairro(bairro: string){
        this.bairro = bairro;
    }

    public getCidade(): string{
        return this.cidade;
    }

    public setCidade(cidade: string){
        this.cidade = cidade;
    }

    public getUF(): string{
        return this.uf;
    }

    public setUF(uf: string){
        this.uf = uf;
    }

    public getServico(): string{
        return this.servico;
    }

    public setServico(servico: string){
        this.servico = servico;
    }

    public getPreferencia(): string{
        return this.preferencia;
    }

    public setPreferencia(preferencia: string){
        this.preferencia = preferencia;
    }

    public getNomeEmpresa(): string{
        return this.nomeEmpresa;
    }

    public setNomeEmpresa(nomeEmpresa: string){
        this.nomeEmpresa = nomeEmpresa;
    }

    public getMensagem(): string{
        return this.mensagem;
    }

    public setMensagem(mensagem: string){
        this.mensagem = mensagem;
    }
}