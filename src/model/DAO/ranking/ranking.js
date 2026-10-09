// Acesso à tabela tbl_ranking do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_ranking',

  findAll: (filters = {}) => db('tbl_ranking').where(filters).select('*'),
  findById: (id) => db('tbl_ranking').where({ id }).first(),
  create: (data) => db('tbl_ranking').insert(data),
  updateById: (id, data) => db('tbl_ranking').where({ id }).update(data),
  deleteById: (id) => db('tbl_ranking').where({ id }).del(),
});
