// src/features/payroll/pages/PayrollDashboard.jsx
import { useState } from "react";
import PayrollTable from "../components/PayrollTable";
import SalaryForm from "../components/SalaryForm";

export default function PayrollDashboard() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Ankit Sharma", baseSalary: 40000, overtime: 10, travelAllowance: 2000, leaves: 2 },
    { id: 2, name: "Riya Mehta", baseSalary: 50000, overtime: 5, travelAllowance: 3000, leaves: 0 },
  ]);

  const updateEmployee = (id, updatedData) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === id ? { ...emp, ...updatedData } : emp))
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Payroll Dashboard</h1>
      <SalaryForm employees={employees} updateEmployee={updateEmployee} />
      <PayrollTable employees={employees} />
    </div>
  );
}
