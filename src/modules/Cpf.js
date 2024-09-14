export default class Cpf {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        })
    }

    valida() {
        if (typeof this.cpfLimpo !== 'string') return false
        if (this.cpfLimpo.length !== 11) return false
        if (this.eSequencia()) return false

        const cpfGerado = this.geraNovoCpf()

        if (cpfGerado !== this.cpfLimpo) return false

        return true
    }

    static somaAposContagemRegressiva(digitos) {
        let somaValores = 0
        let contador = digitos.length + 1

        for (let digito of digitos) {
            somaValores += Number(digito) * contador
            contador--
        }

        return Cpf.aplicaFormulaParaDescobrirDigito(somaValores)
    }

    static aplicaFormulaParaDescobrirDigito(somaValores) {
        const digito = 11 - (somaValores % 11)

        return digito > 9 ? '0' : String(digito)
    }

    eSequencia() {
        return this.cpfLimpo === this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length)
    }

    geraNovoCpf() {
        const novePrimeirosDigitos = this.cpfLimpo.slice(0, -2)

        const digito1 = Cpf.somaAposContagemRegressiva(novePrimeirosDigitos)
        const digito2 = Cpf.somaAposContagemRegressiva(novePrimeirosDigitos + digito1)

        return novePrimeirosDigitos + digito1 + digito2
    }
}