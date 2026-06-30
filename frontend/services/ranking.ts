import api from "./api";
import { RankingResponse } from "@/types/candidate";

export async function getRanking(): Promise<RankingResponse> {
  const { data } = await api.get("/rank");
  return data;
}