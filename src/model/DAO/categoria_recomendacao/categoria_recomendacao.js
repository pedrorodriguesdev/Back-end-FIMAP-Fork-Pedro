// Acesso à tabela tbl_categoria_recomendacao do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_categoria_recomendacao',

  findAll: (filters = {}) => db('tbl_categoria_recomendacao').where(filters).select('*'),
  findById: (id) => db('tbl_categoria_recomendacao').where({ id }).first(),
  create: (data) => db('tbl_categoria_recomendacao').insert(data),
  updateById: (id, data) => db('tbl_categoria_recomendacao').where({ id }).update(data),
  deleteById: (id) => db('tbl_categoria_recomendacao').where({ id }).del(),
});
