exports.seed = function(knex, Promise) {
  return knex('listings').del()
    .then(function () {
      return knex('listings').insert([
          {
              title: 'Supreme Box Logo Crewneck (FW18)', 
              location: '', 
              list: '', 
              description: '', 
              image: 'https://m.media-amazon.com/images/M/MV5BMTc4NDQ5NjQ2MF5BMl5BanBnXkFtZTcwNzU3NDAwMQ@@._V1_UY268_CR4,0,182,268_AL_.jpg'
          },
          {
              title: 'Nashville', 
              location: 'Robert Altman', 
              list: '', 
              description: '', 
              image: 'https://cdn.shopify.com/s/files/1/1057/4964/products/nashville-vintage-movie-image-original-1-sheet-27x41-7347.jpg?v=1535847579'
          },
          {
              title: 'Idiocracy', 
              location: 'Mike Judge', 
              list: '', 
              description: '', 
              image: 'https://m.media-amazon.com/images/M/MV5BMWQ4MzI2ZDQtYjk3MS00ODdjLTkwN2QtOTBjYzIwM2RmNzgyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
          },
          {
              title: 'Love Actually', 
              location: 'Richard Curtis', 
              list: '', 
              description: '', 
              image: 'https://www.movieposter.com/posters/archive/main/177/MPW-88655'
          },
          {
              title: 'Holy Mountain', 
              location: 'Alejandro Jodorowsky', 
              list: '', 
              description: '', 
              image: 'https://images-na.ssl-images-amazon.com/images/I/812wJ8msjmL._SY550_.jpg'
          }
      ]);
    });
};
