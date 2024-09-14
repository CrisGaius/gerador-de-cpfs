import Cpf from './Cpf'

export default class GeraCpf {
  gerarNumeroAleatorio(minimo = 100000000, maximo = 999999999) {
    return String(Math.floor(Math.random() * (maximo - minimo) + minimo))
  }

  formatarCpf(novoCpf) {
    return novoCpf.slice(0, 3) + '.' + novoCpf.slice(3, 6) + '.' + novoCpf.slice(6, 9) + '-' + novoCpf.slice(9, 11)
  }

  generateNewCpf() {
    const cpfSemDigitos = this.gerarNumeroAleatorio()
    const digitoUm = Cpf.somaAposContagemRegressiva(cpfSemDigitos)
    const digitoDois = Cpf.somaAposContagemRegressiva(cpfSemDigitos + digitoUm)
    const novoCpf = cpfSemDigitos + digitoUm + digitoDois
    return this.formatarCpf(novoCpf)
  }
}