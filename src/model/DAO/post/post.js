// Acesso à tabela tbl_post do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_post',

  findAll: (filters = {}) => db('tbl_post').where(filters).select('*'),
  findById: (id) => db('tbl_post').where({ id }).first(),
  create: (data) => db('tbl_post').insert(data),
  updateById: (id, data) => db('tbl_post').where({ id }).update(data),
  deleteById: (id) => db('tbl_post').where({ id }).del(),
});
