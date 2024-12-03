class CalculadoraDeFrete {
  calcularFrete(tipo, distancia) {
    if (tipo === "padrão") {
      return distancia * 1.0;
    } else if (tipo === "expresso") {
      return distancia * 2.0;
    } else if (tipo === "noturno") {
      return distancia * 3.0;
    } else {
      throw new Error("Tipo de frete inválido");
    }
  }
}

const calculadoraDeFrete = new CalculadoraDeFrete();
console.log("Frete Padrão:", calculadoraDeFrete.calcularFrete("padrão", 100));
console.log(
  "Frete Expresso:",
  calculadoraDeFrete.calcularFrete("expresso", 100)
);
console.log("Frete Noturno:", calculadoraDeFrete.calcularFrete("noturno", 100));
