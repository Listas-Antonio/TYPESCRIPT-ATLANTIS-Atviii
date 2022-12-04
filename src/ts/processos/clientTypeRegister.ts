import Processo from "../abstracoes/proccess";
import MenuTipoCadastroCliente from "../menus/menuTipoCadastroCliente";
import CadastroClienteTitular from "./cadastroClienteTitular";

export default class TipoCadastroCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.Input.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new CadastroClienteTitular()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}