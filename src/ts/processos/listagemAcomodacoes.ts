import Processo from "../abstracoes/proccess";
import Armazem from "../dominio/storage";
import ImpressorAcomodacao from "../impressores/accomodationPrinter";
import Impressor from "../interfaces/printer";
import Acomodacao from "../modelos/accomodation";

export default class ListagemAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    private impressor!: Impressor
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem das acomodações ofertadas...')
        console.log(`-------------------------------------------------`)
        this.acomodacoes.forEach(acomodacao => {
            this.impressor = new ImpressorAcomodacao(acomodacao)
            console.log(this.impressor.imprimir())
            console.log(`-------------------------------------------------`)
        })
    }
}