import Processo from "../abstracoes/proccess";
import MenuTipoListagemClientes from "../menus/menuTipoListagemClientes";
import ListagemTitulares from "./listagemTitulares";

export default class TipoListagemClientes extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoListagemClientes()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.Input.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemTitulares()
                this.processo.processar()
                break

            default:
                console.log('Opção não entendida... :(')
        }
    }
}