import Processo from "../abstracoes/proccess";
import { TipoDocumento } from "../enumeracoes/DocumentType";
import Cliente from "../modelos/client";
import Documento from "../modelos/document";

export default class CadastroRg extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        let numero = this.Input.receberTexto('Qual o número do documento?')
        let dataExpedicao = this.Input.receberData('Qual a data de expedição do documento?')
        let rg = new Documento(numero, TipoDocumento.RG, dataExpedicao)
        this.cliente.Documentos.push(rg)
    }
}