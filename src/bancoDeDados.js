export const cardapio = {
  principais: [
    {
      codigo: 'cafe',
      descricao: 'Cafe',
      valor: 300
    },
    {
      codigo: 'suco',
      descricao: 'Suco Natural',
      valor: 620
    },
    {
      codigo: 'sanduiche',
      descricao: 'Sanduiche',
      valor: 650
    },
    {
      codigo: 'salgado',
      descricao: 'Salgado',
      valor: 725
    }
  ],
  combos: [
    {
      codigo: 'combo1',
      descricao: '1 Suco e 1 Sanduiche',
      valor: 950
    },
    {
      codigo: 'combo2',
      descricao: '1 Cafe e 1 Sanduiche',
      valor: 750
    }
  ],
  extras: [
      {
        codigo: 'chantily',
        descricao: 'Chantily (extra do cafe)',
        valor: 150,
        itemPrincipal: "cafe"
      },

      {
        codigo: 'queijo',
        descricao: 'Queijo (extra do sanduiche)',
        valor: 200,
        itemPrincipal: "sanduiche"
      }
  ]
};

