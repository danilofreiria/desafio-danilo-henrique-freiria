# Caixa da Lanchonete - Solução do Desafio - Danilo Freiria

Bem-vindo(a) ao README da solução para o desafio de automatização do caixa da Lanchonete da DB. Neste documento, você encontrará uma descrição detalhada da solução implementada, a estrutura dos arquivos e instruções para executar e validar o código.

## Descrição da Solução

Esta solução foi desenvolvida com o objetivo de automatizar o cálculo do valor de uma compra na Lanchonete da DB, considerando o cardápio de produtos, as formas de pagamento aceitas e as regras de descontos e acréscimos.

## Estrutura dos Arquivos

A solução está organizada em três arquivos principais:

1. **caixa-da-lanchonete.js:** Este arquivo contém a classe `CaixaDaLanchonete`, que possui o método `calcularValorDaCompra`. Ele é responsável por processar os itens do carrinho, aplicar as regras de descontos e acréscimos, e retornar o valor total da compra ou mensagens de erro.

2. **bancoDeDados.js:** Neste arquivo, você encontra a definição do cardápio de produtos da lanchonete, incluindo códigos, descrições e valores. Esses dados são utilizados no cálculo do valor total da compra.

3. **utils.js:** Este arquivo contém a função `validarMetodoPagamento`, que valida se o método de pagamento fornecido é válido de acordo com as formas de pagamento permitidas.

## Como Executar o Código

Siga os passos abaixo para executar o código da solução:

1. **Instale o Node.js:** Certifique-se de ter o Node.js instalado em sua máquina.

2. **Instale as Dependências:** Abra o terminal na pasta raiz do projeto e execute o comando abaixo para instalar as dependências do projeto:

   ```bash
   npm install
   ```

3. **Execute os Testes:** Utilize o seguinte comando para executar os testes da solução e validar o comportamento do código:

   ```bash
   npm test
   ```

   Isso executará os cenários de teste definidos na estrutura, verificando se a solução atende aos requisitos do desafio.

## Exemplos de Uso

Aqui estão alguns exemplos de como utilizar a solução para calcular o valor de uma compra na Lanchonete da DB:

```javascript
import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";

const caixa = new CaixaDaLanchonete();

const valorCompra = caixa.calcularValorDaCompra("dinheiro", ["cafe,1", "chantily,1"]);
console.log(valorCompra); // Saída esperada: "R$ 4,50"

const valorInvalido = caixa.calcularValorDaCompra("paypal", ["suco,2"]);
console.log(valorInvalido); // Saída esperada: "Forma de pagamento inválida!"
```

## Conclusão

Esta solução aborda com sucesso os requisitos do desafio de automatização do caixa da Lanchonete da DB. Ela valida os métodos de pagamento, processa os itens do carrinho, aplica descontos ou acréscimos, e retorna o valor total da compra ou mensagens de erro conforme as regras estabelecidas. Certifique-se de explorar diferentes cenários e inputs para verificar a robustez da solução. Seja bem-vindo(a) para expandir ou aprimorar esta solução conforme necessário.
