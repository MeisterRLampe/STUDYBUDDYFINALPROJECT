export class User {
  userID: number;
  userName: string;
  password: string;
  admin: boolean;

  constructor();
  constructor(userID: number, userName: string, password: string, admin: boolean);
  constructor(userID?: number, userName?: string, password?: string, admin?: boolean) {
    this.userID = userID || 0;
    this.userName = userName || '';
    this.password = password || '';
    this.admin = admin || false;
  }
}
