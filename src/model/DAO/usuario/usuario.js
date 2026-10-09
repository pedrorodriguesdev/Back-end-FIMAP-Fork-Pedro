// Acesso à tabela tbl_usuario do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_usuario',

  findAll: (filters = {}) => db('tbl_usuario').where(filters).select('*'),
  findById: (id) => db('tbl_usuario').where({ id }).first(),
  create: (data) => db('tbl_usuario').insert(data),
  updateById: (id, data) => db('tbl_usuario').where({ id }).update(data),
  deleteById: (id) => db('tbl_usuario').where({ id }).del(),
});
