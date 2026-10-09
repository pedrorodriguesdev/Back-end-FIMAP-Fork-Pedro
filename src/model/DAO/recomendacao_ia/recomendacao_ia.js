// Acesso à tabela tbl_recomendacao_ia do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_recomendacao_ia',

  findAll: (filters = {}) => db('tbl_recomendacao_ia').where(filters).select('*'),
  findById: (id) => db('tbl_recomendacao_ia').where({ id }).first(),
  create: (data) => db('tbl_recomendacao_ia').insert(data),
  updateById: (id, data) => db('tbl_recomendacao_ia').where({ id }).update(data),
  deleteById: (id) => db('tbl_recomendacao_ia').where({ id }).del(),
});
