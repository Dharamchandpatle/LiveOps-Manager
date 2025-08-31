// utils/payrollCalculations.jsx
export const calculateOvertime = (hoursWorked, overtimeRate) => {
  return hoursWorked * overtimeRate;
};

export const calculateAllowance = (baseSalary, travelAllowance, bonus = 0) => {
  return travelAllowance + bonus;
};

export const calculateLeaveDeduction = (leaveDays, perDaySalary) => {
  return leaveDays * perDaySalary;
};

export const calculateNetSalary = ({ baseSalary, overtime, allowance, leaveDeduction }) => {
  return baseSalary + overtime + allowance - leaveDeduction;
};
