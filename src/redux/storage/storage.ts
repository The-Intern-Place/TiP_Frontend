// Define the key for storing the token in localStorage
const TOKEN_KEY = "authToken";

// Function to set the token in localStorage
export const setAuthToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

// Function to get the token from localStorage
export const getAuthToken = (): string | null => {
  if (typeof window === "undefined") return null
  return localStorage.getItem(TOKEN_KEY);
};
