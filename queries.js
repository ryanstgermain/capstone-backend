const db = require('./database-connection');
    module.exports = {
        dbQueryGetAll(){
            return db.select().from('listings')
        },
        dbQueryGetById(id){
            return db('listings').where({id: id}).first()
        },
        dbQueryCreateListing(newListing){
            return db('listings').insert(newListing).returning('*')
        },
        dbQueryUpdateListing(id, updatedListingInfo){
            return db('listings').where('id', id).update(updatedListingInfo).returning('*')
        },
        deleteListing(id){
            return db('listings')
                .where('id', id)
                .delete()
        }
}
