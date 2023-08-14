import {cardapio} from "./bancoDeDados";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
  
  //Validar pagamento
  const formasDePagamento = ["debito", "credito", "dinheiro"];
  if (!formasDePagamento.includes(metodoDePagamento)) {
    return `Forma de pagamento inválida!`;
  }

  //Validar itens
  if (itens.length === 0) {
    return `Não há itens no carrinho de compra!`
  }


  //Separar itens por codigo e quantidade
  const carrinho = [];

  itens.forEach(item => {
    const [produto, qtd] = item.split(",");

    const itemCarrinho = {
      produto: produto,
      qtd: Number(qtd)
    };

  //Adicionando ao carrinho já tratados os dados
    carrinho.push(itemCarrinho);
  });

  //Validando que não há pedidos com quantidade zero
  if (carrinho.some(pedido => pedido.qtd < 1)) {
    return `Quantidade inválida!`;
  };


  //Validando que o código dos pedidos existem
  for (const pedido of carrinho) {
    let itemValido = false;
  
    for (const secaoCardapio of [cardapio.principais, cardapio.combos, cardapio.extras]) {
      if (secaoCardapio.some(item => item.codigo === pedido.produto)) {
        itemValido = true;
      }
    }
  
    if (!itemValido) {
      return `Item inválido!`;
    }
  }

  //validando que O item extra seja sempre pedido com o seu respectivo item principal
  for (const pedido of carrinho) {
    const itemPrincipal = cardapio.extras.find(extra => extra.codigo === pedido.produto)?.itemPrincipal;
    
    if (itemPrincipal) {
      const extraValido = carrinho.some(item => item.produto === itemPrincipal);
      if (!extraValido) {
        return `Item extra não pode ser pedido sem o principal`;
      }
    }
  }

  //Encontrando o preço de cada item
  let valorTotal = 0;

  carrinho.forEach((pedido) => {
    const item = cardapio.principais.find(principal => principal.codigo === pedido.produto) ||
                 cardapio.extras.find(extra => extra.codigo === pedido.produto)||
                 cardapio.combos.find(combo => combo.codigo === pedido.produto);
    valorTotal += item.valor * pedido.qtd;
  });

  // Realizando a conta com descontos ou acréscimos (se necessário)
  if (metodoDePagamento === "dinheiro") {
    valorTotal *= 0.95;  // Aplicar desconto de 5%
  } else if (metodoDePagamento === "credito") {
    valorTotal *= 1.03;  // Aplicar acréscimo de 3%
  }
  
  // Formatar e retornar o valor final
  const precoFinal = (valorTotal/100).toFixed(2).replace(".", ",");
  
  return `R$ ${precoFinal}`;
    }

}

export { CaixaDaLanchonete };
