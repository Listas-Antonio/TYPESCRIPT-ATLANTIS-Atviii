import ConstrutorAcomodacao from "../construtores/accomodationConstructor";
import { NomeAcomadacao } from "../enumeracoes/accomodationName";
import Acomodacao from "../modelos/accomodation";
import Diretor from "../abstracoes/director";

export default class DiretorCasalSimples extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.NomeAcomodacao = NomeAcomadacao.CasalSimples
        objetoConstrutor.CamaCasal = 1
        objetoConstrutor.CamaSolteiro = 0
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 1
        objetoConstrutor.Suite = 1
        return objetoConstrutor.construir()
    }
}