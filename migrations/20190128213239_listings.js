exports.up = function(knex, Promise) {
    return knex.schema.createTable('listings', (listing) => {
        listing.increments('id')
        listing.string('location')
        listing.string('list')
        listing.string('description')
        listing.string('image')
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('listings');
};
