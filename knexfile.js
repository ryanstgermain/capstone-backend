module.exports = {
    
development: {
    client: 'pg',
    connection: 'postgresql://localhost/grailtrader'
},

production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
}

};
