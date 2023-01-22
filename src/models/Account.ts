import { RowDataPacket } from "mysql2";

export interface IAccount extends RowDataPacket {
  name: string;
  email: string;
  message: string;
}
