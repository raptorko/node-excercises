const expect = require('expect');
const {Users} =require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users =[{
      id: '1',
      name: 'mike',
      room: 'Node Course'
    },{
      id: '2',
      name: 'jen',
      room: 'React Course'
    },{
      id: '3',
      name: 'Pepe',
      room: 'Node Course'
    }]
  });

  it('Should add a new user', () => {
    var users = new Users();
    var user = {
      id:'123',
      name:'LOLko',
      room: 'blbecci'
    };

    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var removeUser = users.removeUser('1');
    expect(removeUser).toEqual([{
      id: '1',
      name: 'mike',
      room: 'Node Course'
    }]);
    expect(users.users.length).toBe(2);
  });

  it('should not find a user', () => {
    var getUser = users.getUser('8');
    expect(getUser).toEqual([]);
  });

  it('should find user', () => {
    var getUser = users.getUser('1');
    expect(getUser).toEqual([{
      id: '1',
      name: 'mike',
      room: 'Node Course'
    }]);
  });

  it('should not remove a user', () => {
  var removeUser = users.removeUser('8');
  expect(removeUser).toEqual([]);
  expect(users.users.length).toBe(3);
  });

  it('should return names for node course ', () => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['mike','Pepe']);
  });
  it('should return names for react course ', () => {
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['jen']);
  });
});
