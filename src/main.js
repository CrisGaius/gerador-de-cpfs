import GeraCpf from './modules/GeraCpf'

import './assets/css/style.css'

(function () {
  const gerarCpf = new GeraCpf()
  const divCpfGerado = document.querySelector('#cpf-gerado')
  divCpfGerado.innerHTML = gerarCpf.generateNewCpf()
})()