import Processo from "../abstracoes/proccess";
import Armazem from "../dominio/storage";
import MenuTipoAcomodacaoCliente from "../menus/clientAccomodationTypeMenu";
import Acomodacao from "../modelos/accomodation";
import Cliente from "../modelos/client";

export default class CadastroClienteAcomodacao extends Processo {
  private cliente: Cliente;
  private acomodacoes: Acomodacao[];
  constructor(cliente: Cliente) {
    super();
    this.cliente = cliente;
    this.menu = new MenuTipoAcomodacaoCliente();
    this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
  }

  processar(): void {
    this.menu.mostrar();
    let Input = this.Input.receberNumero("Digite o numero do quarto");
    this.acomodacoes.forEach((alvo, index) => {
      switch (Input) {
        case index + 1:
          if (Input == index + 1) {
            let acomodacao = new Acomodacao(
              alvo.NomeAcomadacao,
              alvo.CamaSolteiro,
              alvo.CamaCasal,
              alvo.Suite,
              alvo.Climatizacao,
              alvo.Garagem
            );
            this.cliente.Acomodacao = acomodacao;
          }
          break;
      }
    });
  }
}