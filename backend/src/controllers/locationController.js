import Location from "../models/Location.js";

export const updateLocation = async (req, res) => {
  const { lat, lng, taskId } = req.body;
  const loc = await Location.create({ employeeId: req.user.id, taskId, lat, lng });
  res.json(loc);
};

export const getEmployeeLocation = async (req, res) => {
  const loc = await Location.findOne({ employeeId: req.params.id }).sort({ ts: -1 });
  res.json(loc || { error: "No location" });
};
