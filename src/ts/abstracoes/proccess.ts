import Menu from "../interfaces/menu"
import Input from "../io/Input"

export default abstract class Processo {
    protected Input = new Input()
    protected menu!: Menu
    protected opcao!: number
    protected execucao!: boolean
    protected processo!: Processo
    public get Execucao(){
        return this.execucao
    }
    abstract processar(): void
}