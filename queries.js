const db = require('./database-connection');
    module.exports = {
        dbQueryGetAll(){
            return db.select().from('grailtrader')
        },
        dbQueryGetById(id){
            return db('grailtrader').where({id: id}).first()
        },
        dbQueryCreateListing(newMovie){
            return db('grailtrader').insert(newMovie).returning('*')
        },
        dbQueryUpdateListing(id, updatedMovieInfo){
            return db('grailtrader').where('id', id).update(updatedMovieInfo).returning('*')
        },
        deleteListing(id){
            return db('grailtrader')
                .where('id', id)
                .delete()
        }
}
