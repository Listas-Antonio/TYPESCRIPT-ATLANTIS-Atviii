import { NomeAcomadacao } from "../enumeracoes/accomodationName";
import Construtor from "../interfaces/construtor";
import Acomodacao from "../modelos/accomodation";

export default class ConstrutorAcomodacao implements Construtor<Acomodacao>{
    private nomeAcomodacao: NomeAcomadacao = NomeAcomadacao.SolteiroSimples
    private suite: Number = 0
    private camaSolteiro: Number = 0
    private camaCasal: Number = 0
    private garagem: Number = 0
    private climatizacao: Boolean = false

    public set CamaCasal(camaCasal: Number) { this.camaCasal = camaCasal }
    public set CamaSolteiro(camaSolteiro: Number) { this.camaSolteiro = camaSolteiro }
    public set NomeAcomodacao(nomeAcomodacao: NomeAcomadacao) { this.nomeAcomodacao = nomeAcomodacao }
    public set Climatizacao(climatizacao: Boolean) { this.climatizacao = climatizacao }
    public set Garagem(garagem: Number) { this.garagem = garagem }
    public set Suite(suite: Number) { this.suite = suite }

    construir(): Acomodacao {
        let acomodacao = new Acomodacao(this.nomeAcomodacao, this.camaSolteiro,
            this.camaCasal, this.suite, this.climatizacao, this.garagem)
        return acomodacao
    }
}