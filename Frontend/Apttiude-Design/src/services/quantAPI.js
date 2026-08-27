const API_BASE_URL = "http://localhost:5000/api/quants";

export const getQuantTopics = async () => {
  const response = await fetch(API_BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch quantitative topics");
  }

  return response.json();
};