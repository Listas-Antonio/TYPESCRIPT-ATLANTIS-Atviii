import ConstrutorAcomodacao from "../construtores/accomodationConstructor";
import { NomeAcomadacao } from "../enumeracoes/accomodationName";
import Acomodacao from "../modelos/accomodation";
import Diretor from "../abstracoes/director";

export default class DiretorFamiliaMais extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.NomeAcomodacao = NomeAcomadacao.FamiliaMais
        objetoConstrutor.CamaCasal = 1
        objetoConstrutor.CamaSolteiro = 5
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 2
        objetoConstrutor.Suite = 2
        return objetoConstrutor.construir()
    }
}