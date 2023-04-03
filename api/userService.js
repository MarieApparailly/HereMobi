const rootEndpoint =
  "https://piimarieapparailly.azurewebsites.net/api/UserApiController";

// Model class for a user
export class User {
  constructor(
    id,
    pseudo,
    password,
    firstName,
    lastName,
    phone,
    mail,
    photo,
    car,
    status
  ) {
    this.id = id;
    // ajouter variables si carte fonctionne !!!
    this.pseudo = pseudo;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.mail = mail;
    this.photo = photo;
    this.car = car;
    this.status = status;
    this.team = team;
    this.admin = admin;
    this.missions = missions;
  }
}

class UserService {
  async getUsers() {
    const users = await this.fetchFromApi(`${rootEndpoint}`);
    return this.createListUsers(users);
  }

  async fetchFromApi(query) {
    console.log(`Fetching API with query ${query}`);
    try {
      const response = await fetch(query);
      // FIXME: JSON parse error when users not found
      const content = await response.json();
      return content.users;
    } catch (e) {
      console.error(e);
    }
  }

  // Create a User model object from a subset of data fields returned by API
  createUser(user) {
    return new User(
      user.idUser,
      user.pseudoUser,
      user.passwordUser,
      user.firstNameUser,
      user.lastNameUser,
      user.phoneUser,
      user.mailUser,
      user.photoUser,
      user.carUser,
      user.statusUser,
      user.teamUser,
      user.adminUser,
      user.missionsUser
    );
  }

  createListUsers(users) {
    // Create a user object for each element in the array
    return users.map((user) => this.createUser(user));
  }
}

export default new UserService();
