import { baseInstance } from "@/shared/api/base";
import { Movie, SequelsAndPrequels, Staff } from "./types";

export const getFilm = async (id: string | undefined) =>
  (await baseInstance.get<Movie>(`v2.2/films/${id}`)).data;

export const getSequelsAndPrequels = async (id: string | undefined) =>
  (
    await baseInstance.get<SequelsAndPrequels[]>(
      `v2.1/films/${id}/sequels_and_prequels`
    )
  ).data;

export const getStaff = async (id: string | undefined) =>
  (
    await baseInstance.get<Staff[]>("v1/staff", {
      params: {
        filmId: id,
      },
    })
  ).data;
