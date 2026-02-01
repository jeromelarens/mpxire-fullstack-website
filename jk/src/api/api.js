const BASE_URL = "http://localhost:5000";

export const checkBackend = async () => {
  const res = await fetch(`${BASE_URL}/api/health`);
  return res.json();
};