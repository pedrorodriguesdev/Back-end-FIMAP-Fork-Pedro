// Acesso à tabela tbl_curtida_post do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_curtida_post',

  findAll: (filters = {}) => db('tbl_curtida_post').where(filters).select('*'),
  findById: (id) => db('tbl_curtida_post').where({ id }).first(),
  create: (data) => db('tbl_curtida_post').insert(data),
  updateById: (id, data) => db('tbl_curtida_post').where({ id }).update(data),
  deleteById: (id) => db('tbl_curtida_post').where({ id }).del(),
});
