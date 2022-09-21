import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  onye?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
