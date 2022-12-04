import ConstrutorAcomodacao from "../construtores/accomodationConstructor";
import { NomeAcomadacao } from "../enumeracoes/accomodationName";
import Acomodacao from "../modelos/accomodation";
import Diretor from "../abstracoes/director";

export default class DiretorSolteiroSimples extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.NomeAcomodacao = NomeAcomadacao.SolteiroSimples
        objetoConstrutor.CamaCasal = 0
        objetoConstrutor.CamaSolteiro = 1
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 0
        objetoConstrutor.Suite = 1
        return objetoConstrutor.construir()
    }
}