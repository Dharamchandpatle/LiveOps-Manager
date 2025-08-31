import React from "react";

export default function SalarySlip({ employee }) {
  if (!employee) return <p>No salary slip generated yet.</p>;

  return (
    <div className="p-6 border rounded shadow bg-white mt-6 w-[400px]">
      <h2 className="text-xl font-bold text-center mb-4">Salary Slip</h2>
      <p><b>Employee:</b> {employee.name}</p>
      <p><b>Base Salary:</b> ₹{employee.baseSalary}</p>
      <p><b>Overtime:</b> ₹{employee.overtime}</p>
      <p><b>Allowance:</b> ₹{employee.allowance}</p>
      <p><b>Leave Deduction:</b> ₹{employee.leaveDeduction}</p>
      <hr className="my-2" />
      <p className="font-bold">Net Salary: ₹{employee.netSalary}</p>
    </div>
  );
}
