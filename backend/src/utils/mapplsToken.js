import axios from "axios";

let accessToken = null;
let tokenExpiry = null; // timestamp in ms

export const getMapplsToken = async () => {
  const now = Date.now();

  // Agar token valid hai, return it
  if (accessToken && tokenExpiry && now < tokenExpiry) {
    return accessToken;
  }

  // Nahi toh naya token generate karo
  try {
    const response = await axios.post("https://outpost.mappls.com/api/security/oauth/token", null, {
      params: {
        grant_type: "client_credentials",
        client_id: process.env.MAPPLS_CLIENT_ID,
        client_secret: process.env.MAPPLS_CLIENT_SECRET,
      },
    });

    accessToken = response.data.access_token;
    const expiresIn = response.data.expires_in || 3600; // seconds
    tokenExpiry = now + expiresIn * 1000 - 60000; // 1 min early refresh

    console.log("Mappls token refreshed ✅");

    return accessToken;
  } catch (error) {
    console.error("Error fetching Mappls token:", error.message);
    throw new Error("Unable to fetch Mappls token");
  }
};
