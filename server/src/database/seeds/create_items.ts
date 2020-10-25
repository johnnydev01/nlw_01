import Knex from 'knex';

export async function seed(knex: Knex){
  return  knex('items').insert([
        { title: 'Lâmpadas', image: 'lampadas.svg' },
        { title: 'Pilhas e Baterias',  image: 'baterias.svg'},
        { title: 'Papeis e Papelão ',  image: 'papeis-papelao.svg'},
        { title: 'Residuos Eletrônicos', image:  'eletrônicos.svg'},
        { title: 'Residuos Orgânicos',  image: 'organicos.svg'},
        { title: 'Oleo de Cozinha ',  image: 'oleo .svg'},
    ]);
};
