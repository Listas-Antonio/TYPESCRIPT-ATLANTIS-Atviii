import Processo from "../abstracoes/proccess";
import Armazem from "../dominio/storage";
import Cliente from "../modelos/client";
import CadastroAcomodacoes from "./accomodationsRegister";
import CadastroClienteAcomodacao from "./clientAccomodationRegister";
import CadastrarDocumentosCliente from "./clientDocumentRegister";
import CadastroEnderecoTitular from "./adressHolderRegister";

export default class CadastroClienteTitular extends Processo {
    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente...')
        let nome = this.Input.receberTexto('Qual o nome do novo cliente?')
        let nomeSocial = this.Input.receberTexto('Qual o nome social do novo cliente?')
        let dataNascimento = this.Input.receberData('Qual a data de nascimento?')
        let cliente = new Cliente(nome, nomeSocial, dataNascimento)

        this.processo = new CadastroEnderecoTitular(cliente)
        this.processo.processar()

        this.processo = new CadastrarDocumentosCliente(cliente)
        this.processo.processar()

        this.processo = new CadastroClienteAcomodacao(cliente)
        this.processo.processar()

        let armazem = Armazem.InstanciaUnica
        armazem.Clientes.push(cliente)

        console.log('Finalizando o cadastro do cliente...')
    }
}