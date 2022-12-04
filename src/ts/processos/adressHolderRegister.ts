import Processo from "../abstracoes/proccess";
import Cliente from "../modelos/client";
import Endereco from "../modelos/address";

export default class CadastroEnderecoTitular extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('Coletando os dados de endereço...')
        let rua = this.Input.receberTexto('Qual a rua?')
        let bairro = this.Input.receberTexto('Qual o bairro?')
        let cidade = this.Input.receberTexto('Qual a cidade?')
        let estado = this.Input.receberTexto('Qual o estado?')
        let pais = this.Input.receberTexto('Qual o país?')
        let codigoPostal = this.Input.receberTexto('Qual o código postal?')
        let endereco = new Endereco(rua,bairro,cidade,estado,pais,codigoPostal)
        this.cliente.Endereco = endereco
    }

}