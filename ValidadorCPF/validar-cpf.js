export default class ValidarCpf {
  constructor(element) {
    this.element = element;
  }

  limpar(cpf) {
    return cpf.replace(/\D/g, '');
    //Essa função pega cada caracter do campo digitado e elimina espaços, pontos, traços. Deixando apenas os dígitos
  }

  construir(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    //Essa função retorna com uma regexp entre cada conjunto o caracter conforme o segundo argumento do replace
  }

  formatar(cpf) {
    const cpfLimpo = this.limpar(cpf);
    return this.construir(cpfLimpo);
    //Essa função junta o resultado da função limpar() e aplica as mudanças conforme a função construir()
  }

  validar(cpf) {
    const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
    return (matchCpf && matchCpf[0] === cpf);
  }

  validarNaMudanca(cpfElement) {
    if(this.validar(cpfElement.value)) {
      cpfElement.value = this.formatar(cpfElement.value);
      cpfElement.classList.add('valido');
      cpfElement.classList.remove('erro');
      cpfElement.nextElementSibling.classList.remove('ativar');
    } else {
      cpfElement.classList.add('erro');
      cpfElement.classList.remove('valido');
      cpfElement.nextElementSibling.classList.add('ativar');
    }
  }

  adicionarEvento() {
    this.element.addEventListener('change', () => {
      this.validarNaMudanca(this.element);
    })
  }

  adicionarErroSpan() {
    const erroElement = document.createElement('span');
    erroElement.classList.add('erro-text');
    erroElement.innerText = 'CPF inválido!';
    this.element.parentElement.insertBefore(erroElement, this.element.nextElementSibling);
  }
  iniciar() {
    this.adicionarEvento();
    this.adicionarErroSpan();
    return this;
  }
}