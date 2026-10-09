// Acesso à tabela tbl_meta_financeira do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_meta_financeira',

  findAll: (filters = {}) => db('tbl_meta_financeira').where(filters).select('*'),
  findById: (id) => db('tbl_meta_financeira').where({ id }).first(),
  create: (data) => db('tbl_meta_financeira').insert(data),
  updateById: (id, data) => db('tbl_meta_financeira').where({ id }).update(data),
  deleteById: (id) => db('tbl_meta_financeira').where({ id }).del(),
});
