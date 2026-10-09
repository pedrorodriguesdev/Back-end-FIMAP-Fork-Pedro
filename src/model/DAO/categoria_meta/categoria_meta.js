// Acesso à tabela tbl_categoria_meta do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_categoria_meta',

  findAll: (filters = {}) => db('tbl_categoria_meta').where(filters).select('*'),
  findById: (id) => db('tbl_categoria_meta').where({ id }).first(),
  create: (data) => db('tbl_categoria_meta').insert(data),
  updateById: (id, data) => db('tbl_categoria_meta').where({ id }).update(data),
  deleteById: (id) => db('tbl_categoria_meta').where({ id }).del(),
});
