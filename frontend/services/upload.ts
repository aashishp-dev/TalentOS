import api from "./api";

export async function generateSubmission() {
  const response = await api.get("/submit");
  return response.data;
}