import React, { useState } from "react";
import SalaryForm from "../components/SalaryForm";
import AllowanceForm from "../components/AllowanceForm";
import { calculateOvertime, calculateAllowance, calculateLeaveDeduction, calculateNetSalary } from "../utils/payrollCalculations";

export default function EmployeePayroll({ onPayrollComplete }) {
  const [employee, setEmployee] = useState({});

  const handleSalary = ({ baseSalary, overtimeHours, leaveDays }) => {
    const overtime = calculateOvertime(overtimeHours, 200); // ₹200/hr rate
    const leaveDeduction = calculateLeaveDeduction(leaveDays, baseSalary / 30);

    setEmployee((prev) => ({ ...prev, baseSalary, overtime, leaveDeduction }));
  };

  const handleAllowance = ({ travelAllowance, bonus }) => {
    const allowance = calculateAllowance(employee.baseSalary, travelAllowance, bonus);
    const netSalary = calculateNetSalary({
      baseSalary: employee.baseSalary,
      overtime: employee.overtime,
      allowance,
      leaveDeduction: employee.leaveDeduction,
    });

    const finalData = { ...employee, allowance, netSalary, name: "John Doe" };
    setEmployee(finalData);

    if (onPayrollComplete) onPayrollComplete(finalData);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Employee Payroll</h2>
      <SalaryForm onSave={handleSalary} />
      <AllowanceForm onSave={handleAllowance} />

      {employee.netSalary && (
        <div className="mt-6 p-4 border rounded bg-green-50">
          <h3 className="text-xl font-semibold">Final Salary Generated</h3>
          <p>Employee: {employee.name}</p>
          <p>Net Salary: ₹{employee.netSalary}</p>
        </div>
      )}
    </div>
  );
}
