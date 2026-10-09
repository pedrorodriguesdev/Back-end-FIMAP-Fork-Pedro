// Acesso à tabela tbl_badge do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_badge',

  findAll: (filters = {}) => db('tbl_badge').where(filters).select('*'),
  findById: (id) => db('tbl_badge').where({ id }).first(),
  create: (data) => db('tbl_badge').insert(data),
  updateById: (id, data) => db('tbl_badge').where({ id }).update(data),
  deleteById: (id) => db('tbl_badge').where({ id }).del(),
});
