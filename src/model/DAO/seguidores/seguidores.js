// Acesso à tabela tbl_seguidores do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_seguidores',

  findAll: (filters = {}) => db('tbl_seguidores').where(filters).select('*'),
  findById: (id) => db('tbl_seguidores').where({ id }).first(),
  create: (data) => db('tbl_seguidores').insert(data),
  updateById: (id, data) => db('tbl_seguidores').where({ id }).update(data),
  deleteById: (id) => db('tbl_seguidores').where({ id }).del(),
});
