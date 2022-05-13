import { Address } from "./IAddress";
import { Gender } from "../Enums/Gender";
import { UserType } from"../Enums/UserType";

export interface IUser {
  Id:number;
  Name:string;
  password:string;
  Price:number;
  Image:string;
  Email:number;
  UserType:UserType;
  PhoneNumber:string;
  Gender: Gender;
  BirthDate:Date;
  Address:Address;
}
