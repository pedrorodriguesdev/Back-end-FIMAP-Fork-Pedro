// Acesso à tabela tbl_conexao_open_finance do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_conexao_open_finance',

  findAll: (filters = {}) => db('tbl_conexao_open_finance').where(filters).select('*'),
  findById: (id) => db('tbl_conexao_open_finance').where({ id }).first(),
  create: (data) => db('tbl_conexao_open_finance').insert(data),
  updateById: (id, data) => db('tbl_conexao_open_finance').where({ id }).update(data),
  deleteById: (id) => db('tbl_conexao_open_finance').where({ id }).del(),
});
