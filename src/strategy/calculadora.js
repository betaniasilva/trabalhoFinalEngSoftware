import promptSync from "prompt-sync";

class Soma {
  executar(a, b) {
    return a + b;
  }
}

class Subtracao {
  executar(a, b) {
    return a - b;
  }
}

class Multiplicacao {
  executar(a, b) {
    return a * b;
  }
}

class Divisao {
  executar(a, b) {
    if (b === 0) throw new Error("Divisão por zero não é permitida.");
    return a / b;
  }
}

class Imc {
  executar(peso, altura) {
    if (altura <= 0) throw new Error("Altura deve ser maior que zero.");
    return peso / (altura * altura);
  }
}

class Porcentagem {
  executar(valor, porcentagem) {
    return (valor * porcentagem) / 100;
  }
}

class Historico {
  constructor() {
    this.historico = [];
  }

  adicionar(operacao, a, b, resultado) {
    this.historico.push(
      `Operação: ${operacao}, Entrada A: ${a}, Entrada B: ${b}, Resultado: ${resultado}`
    );
  }

  listar() {
    return this.historico.length > 0
      ? this.historico.join("\n")
      : "Nenhuma operação realizada ainda.";
  }
}

class Main {
  constructor() {
    this._prompt = promptSync();
    this._historico = new Historico();
    this._clear();
    this._init();
  }

  _init() {
    this._sistema();
  }

  _sistema() {
    while (true) {
      const opcao = this._opcoes();

      if (opcao === "0") {
        this._clear();
        break;
      }

      let strategy;
      let entradaA, entradaB, resultado;

      try {
        switch (opcao) {
          case "1":
            strategy = new Soma();
            [entradaA, entradaB] = this._entradas("SOMA");
            break;
          case "2":
            strategy = new Subtracao();
            [entradaA, entradaB] = this._entradas("SUBTRAÇÃO");
            break;
          case "3":
            strategy = new Multiplicacao();
            [entradaA, entradaB] = this._entradas("MULTIPLICAÇÃO");
            break;
          case "4":
            strategy = new Divisao();
            [entradaA, entradaB] = this._entradas("DIVISÃO");
            break;
          case "5":
            strategy = new Imc();
            [entradaA, entradaB] = this._entradas(
              "IMC",
              "Digite o peso: ",
              "Digite a altura: "
            );
            resultado = strategy.executar(entradaA, entradaB).toFixed(2);
            this._historico.adicionar("IMC", entradaA, entradaB, resultado);
            this._resultado("O resultado do IMC é", resultado);
            continue;
          case "6":
            strategy = new Porcentagem();
            [entradaA, entradaB] = this._entradas(
              "PORCENTAGEM",
              "Digite o valor: ",
              "Digite a porcentagem: "
            );
            break;
          case "7":
            this._title("HISTÓRICO");
            console.log(this._historico.listar());
            console.log();
            this._prompt("Pressione Enter para continuar...");
            this._clear();
            continue;
          default:
            console.log("Opção inválida.");
            continue;
        }

        resultado = strategy.executar(entradaA, entradaB);
        this._historico.adicionar(
          strategy.constructor.name,
          entradaA,
          entradaB,
          resultado
        );
        this._resultado(`O resultado da operação é`, resultado);
      } catch (error) {
        console.error("Erro:", error.message);
        this._prompt("Pressione Enter para continuar...");
        this._clear();
      }
    }
  }

  _title(title) {
    this._clear();
    console.log();
    console.log("-".repeat(24), title, "-".repeat(24));
    console.log();
  }

  _clear() {
    console.clear();
  }

  _opcoes() {
    this._title("CALCULADORA");
    console.log("-".repeat(50));
    console.log("1 - Soma");
    console.log("2 - Subtração");
    console.log("3 - Multiplicação");
    console.log("4 - Divisão");
    console.log("5 - IMC");
    console.log("6 - Porcentagem");
    console.log("7 - Histórico");
    console.log("0 - Sair");
    console.log("-".repeat(50));
    return this._prompt("Qual operação deseja realizar? ");
  }

  _entradas(
    titulo,
    textoA = "Digite o primeiro número: ",
    textoB = "Digite o segundo número: "
  ) {
    this._title(titulo);
    const entradaA = Number(this._prompt(textoA));
    const entradaB = Number(this._prompt(textoB));
    return [entradaA, entradaB];
  }

  _resultado(texto, resultado) {
    console.log();
    console.log("-".repeat(50));
    console.log(`${texto}: ${resultado}`);
    console.log("-".repeat(50));
    console.log();
    this._prompt("Pressione Enter para continuar...");
    this._clear();
  }
}

new Main();
