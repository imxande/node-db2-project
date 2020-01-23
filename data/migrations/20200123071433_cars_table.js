// creating a table
exports.up = function(knex) {
  // creating table schema
  return knex.schema.createTable("cars", tbl =>{
      // id column
      tbl.increments();

      // vehicle identification number
      tbl.integer('VIN').unique();

      // the make column
      tbl.string('make');

      // the model column here
      tbl.string('model');

      // the milage column
      tbl.integer('milage');

      // type of transmission
      tbl.string('transmission type');

      // title status
      tbl.string('title status');

  });
};

exports.down = function(knex) {
    // undo changes from the up function
  return knex.schema.dropTableIfExist('cars');
};
