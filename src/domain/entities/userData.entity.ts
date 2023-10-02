import { Types } from "mongoose";

export class UserDataEntity {
  constructor(
    public _id: Types.ObjectId,
    public name: string,
    public email: string,
    public countryCode: string,
    public phoneNumber: string,
    public identificationCard: string,
    public status: boolean
  ) {}
}
