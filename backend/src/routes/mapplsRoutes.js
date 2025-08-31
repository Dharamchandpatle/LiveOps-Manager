import express from "express";
import axios from "axios";

const router = express.Router();

// 🔑 Get OAuth Token from Mappls
const getAccessToken = async () => {
  try {
    const response = await axios.post(
      "https://outpost.mappls.com/api/security/oauth/token",
      null,
      {
        params: {
          grant_type: "client_credentials",
          client_id: process.env.MAPPLS_CLIENT_ID,
          client_secret: process.env.MAPPLS_CLIENT_SECRET,
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching token:", error.response?.data || error.message);
    throw new Error("Unable to fetch access token");
  }
};

// 🔹 Nearby Search API
router.get("/nearby", async (req, res) => {
  try {
    const { keywords, lat, lng } = req.query;
    const token = await getAccessToken();

    const url = `https://atlas.mappls.com/api/places/nearby/json?keywords=${keywords}&refLocation=${lat},${lng}`;

    const response = await axios.get(url, {
      headers: { Authorization: `bearer ${token}` },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching nearby:", error.response?.data || error.message);
    res.status(500).json({ message: "Error fetching nearby data" });
  }
});

// 🔹 Route API
router.get("/route", async (req, res) => {
  try {
    const { startLat, startLng, endLat, endLng } = req.query;
    const token = await getAccessToken();

    const url = `https://apis.mappls.com/advancedmaps/v1/${process.env.MAPPLS_KEY}/route_adv/driving/${startLat},${startLng};${endLat},${endLng}`;

    const response = await axios.get(url, {
      headers: { Authorization: `bearer ${token}` },
    });

    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching route" });
  }
});

export default router;
