import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  onye?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
