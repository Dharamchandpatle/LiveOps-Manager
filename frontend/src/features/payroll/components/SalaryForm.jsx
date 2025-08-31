// src/features/payroll/components/SalaryForm.jsx
import { useState } from "react";

export default function SalaryForm({ employees, updateEmployee }) {
  const [selectedId, setSelectedId] = useState("");
  const [overtime, setOvertime] = useState(0);
  const [travelAllowance, setTravelAllowance] = useState(0);
  const [leaves, setLeaves] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(selectedId, { overtime, travelAllowance, leaves });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Update Employee Payroll</h2>

      <select
        value={selectedId}
        onChange={(e) => setSelectedId(Number(e.target.value))}
        className="border p-2 rounded mb-2"
      >
        <option value="">Select Employee</option>
        {employees.map((emp) => (
          <option key={emp.id} value={emp.id}>
            {emp.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Overtime Hours"
        value={overtime}
        onChange={(e) => setOvertime(Number(e.target.value))}
        className="border p-2 rounded mb-2 block"
      />
      <input
        type="number"
        placeholder="Travel Allowance"
        value={travelAllowance}
        onChange={(e) => setTravelAllowance(Number(e.target.value))}
        className="border p-2 rounded mb-2 block"
      />
      <input
        type="number"
        placeholder="Leaves Taken"
        value={leaves}
        onChange={(e) => setLeaves(Number(e.target.value))}
        className="border p-2 rounded mb-2 block"
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Update
      </button>
    </form>
  );
}
