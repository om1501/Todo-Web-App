export class RegisterUser {
  username: string;
  email: string;
  password: string;
  roles: string[];

  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.roles = ['ROLE_USER']; // send as array
  }
}
