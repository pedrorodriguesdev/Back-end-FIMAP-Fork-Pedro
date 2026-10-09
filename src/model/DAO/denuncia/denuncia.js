// Acesso à tabela tbl_denuncia do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_denuncia',

  findAll: (filters = {}) => db('tbl_denuncia').where(filters).select('*'),
  findById: (id) => db('tbl_denuncia').where({ id }).first(),
  create: (data) => db('tbl_denuncia').insert(data),
  updateById: (id, data) => db('tbl_denuncia').where({ id }).update(data),
  deleteById: (id) => db('tbl_denuncia').where({ id }).del(),
});
