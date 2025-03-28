export class Contato{
    private _nome: string = '';
    private _sobrenome: string = '';
    private _telefone: string = '';
    private _whatsApp: string = '';
    private _email: string = '';
    private _rua: string = '';
    private _numero: string = '';
    private _bairro: string = '';
    private _cidade: string = '';
    private _uf: string = '';
    private _servico: string = ''; // i = instalação, m = manutenção, o = outros
    private _preferencia: string = ''; // t = telefone, w = WhatsApp, e = e-mail
    private _nomeEmpresa: string = 'N/A';
    private _mensagem: string = '';

    public get nome(): string{
        return this._nome;
    }

    public set nome(nome: string){
        this._nome = nome;
    }

    public get sobrenome(): string{
        return this._sobrenome;
    }

    public set sobrenome(sobrenome: string){
        this._sobrenome = sobrenome;
    }

    public get telefone(): string{
        return this._telefone;
    }

    public set telefone(telefone: string){
        this._telefone = telefone;
    }

    public get whatsApp(): string{
        return this._whatsApp;
    }

    public set whatsApp(whatsApp: string){
        this._whatsApp = whatsApp;
    }

    public get email(): string{
        return this._email;
    }

    public set email(email: string){
        this._email = email;
    }

    public get rua(): string{
        return this._rua;
    }

    public set rua(rua: string){
        this._rua = rua;
    }

    public get numero(): string{
        return this._numero;
    }

    public set numero(numero: string){
        this._numero = numero;
    }

    public get bairro(): string{
        return this._bairro;
    }

    public set bairro(bairro: string){
        this._bairro = bairro;
    }

    public get cidade(): string{
        return this._cidade;
    }

    public set cidade(cidade: string){
        this._cidade = cidade;
    }

    public get uf(): string{
        return this._uf;
    }

    public set uf(uf: string){
        this._uf = uf;
    }

    public get servico(): string{
        return this._servico;
    }

    public set servico(servico: string){
        this._servico = servico;
    }

    public get preferencia(): string{
        return this._preferencia;
    }

    public set preferencia(preferencia: string){
        this._preferencia = preferencia;
    }

    public get nomeEmpresa(): string{
        return this._nomeEmpresa;
    }

    public set nomeEmpresa(nomeEmpresa: string){
        this._nomeEmpresa = nomeEmpresa;
    }

    public get mensagem(): string{
        return this._mensagem;
    }

    public set mensagem(mensagem: string){
        this._mensagem = mensagem;
    }
}