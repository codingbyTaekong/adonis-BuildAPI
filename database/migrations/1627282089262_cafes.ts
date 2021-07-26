import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cafes extends BaseSchema {
  protected tableName = 'cafes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 255).notNullable()
      table.string('coordinates', 255).notNullable()
      table.string('conect', 30).notNullable()
      table.string('address', 150).notNullable()
      table.string('opening_hours', 255).notNullable()
      table.string('homepage', 255).notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
