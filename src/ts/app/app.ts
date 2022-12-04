import Processo from "../abstracoes/proccess";
import CadastroAcomodacoes from "../processos/accomodationsRegister";
import Principal from "../processos/main";

console.clear()
console.log(`Bem-vindo(a) ao Atlantis, o melhor sistema de gestão de clubes, hoteis e resorts do mundo`);

let execucao: Boolean = true
let processo: Processo

processo = new CadastroAcomodacoes()
processo.processar()

while (execucao) {
    processo = new Principal()
    processo.processar()
    execucao = processo.Execucao
}