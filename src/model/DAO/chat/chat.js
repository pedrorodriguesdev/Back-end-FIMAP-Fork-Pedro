// Acesso à tabela tbl_chat do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_chat',

  findAll: (filters = {}) => db('tbl_chat').where(filters).select('*'),
  findById: (id) => db('tbl_chat').where({ id }).first(),
  create: (data) => db('tbl_chat').insert(data),
  updateById: (id, data) => db('tbl_chat').where({ id }).update(data),
  deleteById: (id) => db('tbl_chat').where({ id }).del(),
});
