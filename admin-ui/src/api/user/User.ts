import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  onye: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
