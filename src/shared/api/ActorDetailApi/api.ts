import { baseInstance } from "../base";
import { Actor } from "./types";

export const getActorById = async (id?: string) =>
  (await baseInstance.get<Actor>(`v1/staff/${id}`)).data;
