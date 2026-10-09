// Acesso à tabela tbl_dispositivo do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_dispositivo',

  findAll: (filters = {}) => db('tbl_dispositivo').where(filters).select('*'),
  findById: (id) => db('tbl_dispositivo').where({ id }).first(),
  create: (data) => db('tbl_dispositivo').insert(data),
  updateById: (id, data) => db('tbl_dispositivo').where({ id }).update(data),
  deleteById: (id) => db('tbl_dispositivo').where({ id }).del(),
});
