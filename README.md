# Trabalho Final Engenharia de Software II

---

## Padrões de desenvolvimento GoF

O padrão escolhido para estudo foi o **Strategy**

![alt text](/img/image.png)

> Problema: Imagine um e-commerce com diferentes regras, onde o cálculo do preço de um produto pode variar de acordo com com tipo de cliente e as condições de compra daquela loja. Então o sistema ele deve aplicar diferentes regras de desconto e impostos, para clientes comuns, clientes vip, clientes corporativos, ou promoções.

**E como o Strategy poderia ajudar?**

Ele permite um encapsulamento de cada regra de cálculo em uma estratégia separada. Assim fica mais fácil para o sistema poder selecionar de forma dinâmica qual seria a regra adequada para determinado cliente, ou para algum tipo de contexto.

![alt text](/img/image-1.png)

Contextualizando com essa imagem acima meus entendimentos sobre o padrão estrategy:

Precisamos ir para o aeroporto, ou para escola enfim, para algum lugar, mas temos várias formas de chegar nesse lugar:

- Bicicleta: não pagaria nada, mas poderia demorar um pouco;
- De ônibus: tem um valor razoavel e é mais rápido que a bicicleta;
- Uber: é mais caro mas chego bem mais rápido e com conforto.

Essas meios de se transportar seriam estratégias diferentes para alcançar o mesmo objetivo que é chegar ao aeroporto ou escola. Então o padrão Strategy funciona da seguinte maneira, o nosso destino seria o que o programa principal gostaria de alcançar, cada meio de transporte seria uma estratégia, dependendo do que queremos o programa escolhe qual melhor estratégia, se quisermos chegar rápido, chegar mais rápido ou ter conforto.

---

## Contextualizando código escolhido para aplicação do padrão

Escolhi uma calculadora que desenvolvi para testes no estágio. Ao me aprofundar no conteúdo sobre o padrão, ele não seria necessáriamente tão útil para melhorar o código de uma calculadora simples, porém como essa calculadora passara por mudanças e implementações talvez ai seria interessante estudar a implementação desse padrão de estratégia.

Cada operação matemática é variante de um algoritimo. O Strategy encapsula essas variantes em classes separadas, o que poderia facilitar a troca ou adição de novas operações. Com o strategy também conseguimos eliminar o uso de condicionais para determinar qual operação executar. Esse padrão também ajuda reduzindo códigos duplicados, facilitando a manutenção. O Strategy permite que você altere dinamicamente o comportamento da calculadora ao associá-la a diferentes estratégias, útil em contextos onde as operações são selecionadas com base na entrada do usuário.

**O uso do padrão Strategy para uma calculadora faz sentido em cenários onde:**

Há muitas operações matemáticas diferentes.
Existe a possibilidade de expandir as funcionalidades da calculadora.
A lógica precisa ser mantida modular e extensível.
Você deseja evitar condicionais longas e código duplicado.

**Conclusão**

O padrão Strategy é extremamente útil para sistemas extensíveis e modulares, especialmente quando há variação de comportamento ou lógica que muda com frequência. Para uma calculadora, o Strategy é adequado se:

Você planeja adicionar muitas operações matemáticas no futuro.
Deseja encapsular cada operação em classes separadas para isolamento e testabilidade.
Precisa trocar dinamicamente o comportamento (como selecionar uma operação com base na entrada do usuário).

## Utilização do padrão nas APIs das linguagens de programação conhecidas

### JavaScript: Método `sort` com função de comparação.

`const numbers = [10, 5, 8, 1];`

`console.log("Ordem Crescente:", numbers.sort((a, b) => a - b));` // Estratégia 1

`console.log("Ordem Decrescente:", numbers.sort((a, b) => b - a));` // Estratégia 2

- A função de comparação `(a, b) => a - b` ou `(a, b) => b - a` é a estratégia.
- Dependendo da função passada, o método `sort` ordena os elementos de forma diferente.

### Python: Função sorted com o parâmetro key

names = ["Ernani", "Betânia", "Arthur"]

print("Ordem Alfabética:", sorted(names))

print("Por Tamanho:", sorted(names, key=len))

print("Ordem Reversa:", sorted(names, reverse=True))

- O parâmetro `key` permite definir diferentes estratégias de ordenação, como `len` para ordenar por tamanho.
- O parâmetro `reverse` é outra forma de alterar o comportamento da ordenação.

## Pontos Fortes

Alguns dos pontos fortes observados é sua flexibilidade e extensibilidade, e o que isso significa? Que esse padrão permite adicionar novos algoritimos ou variações sem modificar o código existente, seguindo o Pricipio Aberto/Fechado. Ele também nesse mesmo contexto apresenta fácil troca de comportamento durante a execução, porque ele consegue mudar a estratégia dinamicamente.
Ainda sobre pontos positivos vou listar mais alguns lidos na documentação:

- Reduz código duplicado, cada estratégia vai encapsular um comportamento específico;
- Modular e de fácil manutenção;
- Mais fácil de testar, pois cada estratégia é testada de forma independente;
- Substituição da herança por compisição;
- E tem uma aplicação universal, englobando vários contextos.

## Pontos fracos

Sobrecarga de Código: Em sistemas simples, onde há apenas algumas variações de comportamento, o uso do Strategy pode adicionar complexidade desnecessária devido à criação de várias classes.

Conhecimento das Estratégias: O cliente (ou contexto) precisa conhecer as estratégias disponíveis e quando usá-las, o que pode aumentar a complexidade do uso.

Falta de Integração Natural em Linguagens Funcionais: Em linguagens com suporte funcional (como JavaScript, Python e Kotlin), funções anônimas ou lambdas podem substituir as estratégias de forma mais simples, tornando o padrão Strategy menos relevante.

Gerenciamento de Dependências: Se o número de estratégias for muito grande, o gerenciamento dessas classes e dependências pode se tornar complicado.

Overengineering em Cenários Simples: Para problemas pequenos ou com poucas variantes, o Strategy pode ser considerado um exagero (exemplo: uma calculadora com apenas quatro operações básicas).

## Conclusão

O padrão strategy é intuitivo de aprender e explicar, e sua presença em APIs e bibliotécas de linguagens populares reforça sua relevância. Consegui ter uma visão de código diferente estudando esse padrão, e ele demonstrou ser útil em problemas reais, porém o uso dele deve ser moderado. O expemplo que eu usei de refatoração da minha calculadora, talvez no momento não seja tão aplicavel pela sua simplicidade, porém em um outro contexto ela talvez seria uma forma fácil de útil de refatoração. Por fim destaco que o padrão Strategy é altamente recomendavel para sistemas escaláveis e dinâmicos, e tem um entendimento simples.
