import { JsonValue } from "type-fest";

export type Category = {
  createdAt: Date;
  id: string;
  item: JsonValue;
  updatedAt: Date;
};
