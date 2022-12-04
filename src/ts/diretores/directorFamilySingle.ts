import ConstrutorAcomodacao from "../construtores/accomodationConstructor";
import { NomeAcomadacao } from "../enumeracoes/accomodationName";
import Acomodacao from "../modelos/accomodation";
import Diretor from "../abstracoes/director";

export default class DiretorFamiliaSuper extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.NomeAcomodacao = NomeAcomadacao.FamiliaSuper
        objetoConstrutor.CamaCasal = 2
        objetoConstrutor.CamaSolteiro = 6
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 2
        objetoConstrutor.Suite = 3
        return objetoConstrutor.construir()
    }
}