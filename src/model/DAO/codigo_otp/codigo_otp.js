// Acesso à tabela tbl_codigo_otp do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_codigo_otp',

  findAll: (filters = {}) => db('tbl_codigo_otp').where(filters).select('*'),
  findById: (id) => db('tbl_codigo_otp').where({ id }).first(),
  create: (data) => db('tbl_codigo_otp').insert(data),
  updateById: (id, data) => db('tbl_codigo_otp').where({ id }).update(data),
  deleteById: (id) => db('tbl_codigo_otp').where({ id }).del(),
});
