export class User {
  readonly username: string;
  readonly token: string;

  constructor(username: string, token: string) {
    this.username = username;
    this.token = token;
  }
}
