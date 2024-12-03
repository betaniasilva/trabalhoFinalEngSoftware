class Calculadora {
  _historico = [];

  get historico() {
    return this._historico;
  }

  adicionar(entradaA, entradaB) {
    try {
      const valido = this._validarEntradas(entradaA, entradaB);

      if (valido !== true) {
        return valido;
      }

      const resultado = entradaA + entradaB;
      this._insereHistorico("+", entradaA, entradaB, resultado);
      return resultado;
    } catch (error) {
      return error.message;
    }
  }

  subtrair(entradaA, entradaB) {
    try {
      const valido = this._validarEntradas(entradaA, entradaB);
      if (valido !== true) {
        return valido;
      }

      const resultado = entradaA - entradaB;
      this._insereHistorico("-", entradaA, entradaB, resultado);
      return resultado;
    } catch (error) {
      return error.message;
    }
  }

  multiplicar(entradaA, entradaB) {
    try {
      const valido = this._validarEntradas(entradaA, entradaB);

      if (valido !== true) {
        return valido;
      }

      const resultado = entradaA * entradaB;
      this._insereHistorico("*", entradaA, entradaB, resultado);
      return resultado;
    } catch (error) {
      return error.message;
    }
  }

  dividir(entradaA, entradaB) {
    try {
      const valido = this._validarEntradas(entradaA, entradaB, "div");
      if (valido !== true) {
        return valido;
      }
      const resultado = entradaA / entradaB;
      this._insereHistorico("/", entradaA, entradaB, resultado);
      return resultado;
    } catch (error) {
      return error.message;
    }
  }

  calcularImc(peso, altura) {
    try {
      const valido = this._validarEntradas(peso, altura, "imc");
      if (valido !== true) {
        return valido;
      }

      if (altura.toString().includes(".")) {
        return peso / (altura * altura);
      }

      const alturaMetros = altura / 100;

      const resultado = peso / (alturaMetros * alturaMetros);
      this._insereHistorico("IMC", peso, altura, resultado);
      return resultado;
    } catch (error) {
      return error.message;
    }
  }

  calcularPorcentagem(valor, porcentagem) {
    try {
      const valido = this._validarEntradas(valor, porcentagem, "porcentagem");
      if (valido !== true) {
        return valido;
      }

      const resultado = (valor * porcentagem) / 100;
      this._insereHistorico("%", valor, porcentagem, resultado);
      return resultado;
    } catch (error) {
      return error.message;
    }
  }

  _validarEntradas(entradaA, entradaB, operacao) {
    if (typeof entradaA !== "number" || typeof entradaB !== "number") {
      throw new Error("Expressão inválida");
    }
    if ((operacao === "porcentagem" && isNaN(entradaA)) || isNaN(entradaB)) {
      throw new Error("Expressão inválida");
    }
    if (operacao === "div" && entradaB === 0) {
      throw new Error("Não é possível dividir por 0");
    }
    if (operacao === "imc" && (entradaA === 0 || entradaB === 0)) {
      throw new Error("Peso ou altura inválidos");
    }
    if (isNaN(entradaA) || isNaN(entradaB)) {
      throw new Error("Expressão inválida");
    }

    return true;
  }

  _insereHistorico(operacao, entradaA, entradaB, resultado) {
    const formatarTexto = `${entradaA} ${operacao} ${entradaB} = ${resultado}`;
    this._historico.push(formatarTexto);
  }
}

export default Calculadora;
