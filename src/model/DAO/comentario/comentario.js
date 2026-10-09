// Acesso à tabela tbl_comentario do Script_Fimap.sql.
// Injete a instância do Knex ao criar o model.
module.exports = (db) => ({
  tableName: 'tbl_comentario',

  findAll: (filters = {}) => db('tbl_comentario').where(filters).select('*'),
  findById: (id) => db('tbl_comentario').where({ id }).first(),
  create: (data) => db('tbl_comentario').insert(data),
  updateById: (id, data) => db('tbl_comentario').where({ id }).update(data),
  deleteById: (id) => db('tbl_comentario').where({ id }).del(),
});
