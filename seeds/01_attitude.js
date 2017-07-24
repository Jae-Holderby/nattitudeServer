
exports.seed = (knex, Promise) => {

  return knex.raw('DELETE FROM nick; ALTER SEQUENCE nick_id_seq RESTART WITH 6;')

  .then(() => {

    let attitudes = [{
      id: 1,
      date: '2017/06/24',
      time: '09:15:23',
      situation: 'After stand down nick furrowed his brow and had a grimace on his face.',
      scale: 5
    }, {
      id: 2,
      date: '2017/06/24',
      time: '09:50:15',
      situation: 'After it was suggested that I was going to make the nattitude app, Nick shrugged.',
      scale: 4
    }, {
      id: 3,
      date: '2017/06/24',
      time: '10:15:00',
      situation: 'Nick placed his head on the table and asked me to smash his head in with his laptop',
      scale: 2
    }, {
      id: 4,
      date: '2017/06/24',
      time: '10:45:00',
      situation: 'After I made a mistake during the lecture Nick laughed and smiled a bit.',
      scale: 5
    }, {
      id: 5,
      date: '2017/06/24',
      time: '11:56:00',
      situation: 'Nick put his feet up on the table. This indicates that he is a bit agitated.',
      scale: 3
    }];

    return knex('nick').insert(attitudes);
  });
};
