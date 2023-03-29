export class User {
  userID: number;
  username: string;
  password: string;
  admin: boolean;

  constructor();
  constructor(userID: number, username: string, password: string, admin: boolean);
  constructor(userID?: number, username?: string, password?: string, admin?: boolean) {
    this.userID = userID || 0;
    this.username = username || '';
    this.password = password || '';
    this.admin = admin || false;
  }
}
