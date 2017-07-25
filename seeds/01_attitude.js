
exports.seed = (knex, Promise) => {

  return knex.raw('DELETE FROM nick; ALTER SEQUENCE nick_id_seq RESTART WITH 7;')

  .then(() => {

    let attitudes = [{
      id: 1,
      date: '2017/06/24',
      time: '09:15:23',
      situation: 'Nick showed up for class.',
      scale: 5
    }, {
      id: 2,
      date: '2017/06/24',
      time: '09:50:15',
      situation: 'After it was suggested that I was going to make the nattitude app, Nick shrugged.',
      scale: 3
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
    }, {
      id: 6,
      date: '2017/06/24',
      time: '02:30:00',
      situation: 'Nick tried to run light server and his app server on the same port. This didn\'t work and he got pissed.',
      scale: 1
    }];

    return knex('nick').insert(attitudes);
  });
};
