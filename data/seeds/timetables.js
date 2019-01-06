
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('timetable').del()
    .then(function () {
      // Inserts seed entries
      return knex('timetable').insert([
        {User_ID: 1, Branch_ID: 1, start: '2019-02-14T20:30:00Z', end: '2019-02-15T01:30:00Z', type: 'Thing1'},
        {User_ID: 1, Branch_ID: 1, start: '2019-02-14T01:00:00Z', end: '2019-02-14T04:00:00Z', type: 'Thing2'},
        {User_ID: 2, Branch_ID: 1, start: '2019-02-14T07:00:00Z', end: '2019-02-14T12:30:00Z', type: 'Thing1'},
        {User_ID: 3, Branch_ID: 2, start: '2019-02-14T09:30:00Z', end: '2019-02-14T12:00:00Z', type: 'Thing2'},
        {User_ID: 4, Branch_ID: 2, start: '2019-02-14T13:00:00Z', end: '2019-02-14T18:00:00Z', type: 'Thing1'},
        {User_ID: 5, Branch_ID: 3, start: '2019-02-14T20:00:00Z', end: '2019-02-14T23:30:00Z', type: 'Thing3'},

        {User_ID: 6, Branch_ID: 3, start: '2019-02-15T05:30:00Z', end: '2019-02-15T07:30:00Z', type: 'Thing3'},
        {User_ID: 6, Branch_ID: 3, start: '2019-02-15T16:00:00Z', end: '2019-02-15T19:00:00Z', type: 'Thing5'},
        {User_ID: 4, Branch_ID: 3, start: '2019-02-15T21:00:00Z', end: '2019-02-15T22:00:00Z', type: 'Thing1'},

        {User_ID: 2, Branch_ID: 3, start: '2019-02-16T01:00:00Z', end: '2019-02-16T05:30:00Z', type: 'Thing5'},
        {User_ID: 5, Branch_ID: 4, start: '2019-02-16T07:30:00Z', end: '2019-02-16T09:00:00Z', type: 'Thing4'},
        {User_ID: 1, Branch_ID: 4, start: '2019-02-16T14:00:00Z', end: '2019-02-16T20:30:00Z', type: 'Thing1'},

        {User_ID: 3, Branch_ID: 5, start: '2019-02-17T09:30:00Z', end: '2019-02-17T12:00:00Z', type: 'Thing3'},
        {User_ID: 6, Branch_ID: 6, start: '2019-02-17T12:30:00Z', end: '2019-02-17T20:00:00Z', type: 'Thing3'},
        {User_ID: 4, Branch_ID: 7, start: '2019-02-17T23:30:00Z', end: '2019-02-18T04:00:00Z', type: 'Thing5'},

        {User_ID: 2, Branch_ID: 7, start: '2019-02-18T05:00:00Z', end: '2019-02-18T06:30:00Z', type: 'Thing2'},
        {User_ID: 3, Branch_ID: 7, start: '2019-02-18T18:30:00Z', end: '2019-02-18T22:30:00Z', type: 'Thing3'},
      ]);
    });
};
