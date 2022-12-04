import Processo from "../abstracoes/proccess";
import DiretorSolteiroSimples from "../diretores/directorSimpleSingle";
import Armazem from "../dominio/storage";
import Acomodacao from "../modelos/accomodation";

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        let diretor = new DiretorSolteiroSimples()
        this.acomodacoes.push(diretor.construir())
    }
}