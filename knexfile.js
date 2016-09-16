module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost:5432/grestaurants',
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  },
  production: {
    client: 'pg',
    postgres:'postgres://gpqpqymbgfcugw:rvM5dmii49XbNkYjJYpIJDDPrf@ec2-54-243-63-130.compute-1.amazonaws.com:5432/d3gi2b3k7ag2p1',
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  }
};
