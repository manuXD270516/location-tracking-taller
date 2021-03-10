const { morphism } = require('morphism');

const mapperUserColaboratorForSession = (userSessionActive) => {
  const userColaboratorSchema = {
    CI: 'User.Employee.Dni',
    Names: 'User.Employee.Names',
    Lastnames: 'User.Employee.Lastnames',
    Email: 'User.Employee.Email',
    Phone: 'User.Employee.Phone',
    authorization: ({ SessionActive = false }, src, dest) => !!SessionActive,
    userWithRoles: {
      UserId: 'User.UserId',
      Username: 'User.Username',
      Password: 'User.Password',
      NannyId: 'User.NannyId',
      ParentsId: 'User.ParentsId',
      EmployeeId: 'User.EmployeeId',
      Roles: 'User.Roles',
    },
    tokenSession: 'TokenSession',
  };

  return morphism(userColaboratorSchema, userSessionActive);
};

// Modificar
const mapperUserNannyForSession = (userSessionActive) => {
  const userColaboratorSchema = {
    TokenSession: 'TokenSession',
    SessionDate: 'CreatedIn',
    Authenticated: ({ SessionActive }, src, dest) => !!SessionActive,
    User: {
      EmployeeId: 'User.EmployeeId',
      CI: '1234567',
      Username: 'User.Username',
      Names: 'User.Employee.Names',
      Lastnames: 'User.Employee.Lastnames',
      Email: 'User.Employee.Email',
      Phone: 'User.Employee.Phone',
    },
  };

  return morphism(userColaboratorSchema, userSessionActive);
};

module.exports = {
  mapperUserColaboratorForSession,
};
