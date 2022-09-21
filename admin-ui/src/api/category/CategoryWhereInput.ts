import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  item?: JsonFilter;
};
