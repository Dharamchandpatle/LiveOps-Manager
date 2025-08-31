import React, { useState } from "react";

export default function ServiceRequestForm() {
  const [formData, setFormData] = useState({
    clientName: "",
    phoneNumber: "",
    serviceName: "",
    dateOfService: "",
    location: "",
  });

  const [submittedRequests, setSubmittedRequests] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the request locally
    setSubmittedRequests((prev) => [...prev, formData]);

    alert("Service request submitted successfully!");

    // Clear form
    setFormData({
      clientName: "",
      phoneNumber: "",
      serviceName: "",
      dateOfService: "",
      location: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Service Request Form</h2>

      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Client Name:</label>
        <input
          type="text"
          name="clientName"
          value={formData.clientName}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          required
        />

        <label className="block mb-2">Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          required
        />

        <label className="block mb-2">Service Name:</label>
        <input
          type="text"
          name="serviceName"
          value={formData.serviceName}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          required
        />

        <label className="block mb-2">Date of Service:</label>
        <input
          type="date"
          name="dateOfService"
          value={formData.dateOfService}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          required
        />

        <label className="block mb-2">Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Request
        </button>
      </form>

      {submittedRequests.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Submitted Requests</h3>
          <ul className="list-disc pl-5">
            {submittedRequests.map((req, idx) => (
              <li key={idx} className="mb-2">
                {req.clientName} | {req.phoneNumber} | {req.serviceName} | {req.dateOfService} | {req.location}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
