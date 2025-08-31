import React, { useState } from "react";

export default function AllowanceForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    employeeId: "",
    allowanceType: "",
    amount: "",
    date: new Date().toISOString().split("T")[0],
    remarks: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    // Reset form
    setFormData({
      employeeId: "",
      allowanceType: "",
      amount: "",
      date: new Date().toISOString().split("T")[0],
      remarks: ""
    });
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-4">Allowance Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Employee ID */}
        <div>
          <label className="block text-sm font-medium mb-1">Employee ID</label>
          <input
            type="text"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Allowance Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Allowance Type</label>
          <select
            name="allowanceType"
            value={formData.allowanceType}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
          >
            <option value="">Select Type</option>
            <option value="travel">Travel Allowance</option>
            <option value="overtime">Overtime</option>
            <option value="bonus">Bonus</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium mb-1">Amount (₹)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Remarks */}
        <div>
          <label className="block text-sm font-medium mb-1">Remarks</label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            rows="3"
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Allowance
        </button>
      </form>
    </div>
  );
}
