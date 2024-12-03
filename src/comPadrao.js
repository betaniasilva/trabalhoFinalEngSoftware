class FretePadrao {
  calcular(distancia) {
    return distancia * 1.0;
  }
}

class FreteExpresso {
  calcular(distancia) {
    return distancia * 2.0;
  }
}

class FreteNoturno {
  calcular(distancia) {
    return distancia * 3.0;
  }
}

class ContextoDeFrete {
  definirEstrategia(estrategia) {
    this.estrategia = estrategia;
  }

  calcularFrete(distancia) {
    if (!this.estrategia) throw new Error("Estratégia de frete não definida");
    return this.estrategia.calcular(distancia);
  }
}

const contextoDeFrete = new ContextoDeFrete();
const distancia = 100;

contextoDeFrete.definirEstrategia(new FretePadrao());
console.log("Frete Padrão:", contextoDeFrete.calcularFrete(distancia));

contextoDeFrete.definirEstrategia(new FreteExpresso());
console.log("Frete Expresso:", contextoDeFrete.calcularFrete(distancia));

contextoDeFrete.definirEstrategia(new FreteNoturno());
console.log("Frete Noturno:", contextoDeFrete.calcularFrete(distancia));
