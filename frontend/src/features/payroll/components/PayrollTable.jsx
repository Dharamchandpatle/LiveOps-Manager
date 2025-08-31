// src/features/payroll/components/PayrollTable.jsx
import { calculateNetSalary } from "../utils/payrollCalculations";

export default function PayrollTable({ employees }) {
  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Name</th>
          <th className="border p-2">Base Salary</th>
          <th className="border p-2">Overtime</th>
          <th className="border p-2">Travel</th>
          <th className="border p-2">Leaves</th>
          <th className="border p-2">Net Salary</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td className="border p-2">{emp.name}</td>
            <td className="border p-2">₹{emp.baseSalary}</td>
            <td className="border p-2">{emp.overtime} hrs</td>
            <td className="border p-2">₹{emp.travelAllowance}</td>
            <td className="border p-2">{emp.leaves}</td>
            <td className="border p-2 font-semibold">
              ₹{calculateNetSalary(emp)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
