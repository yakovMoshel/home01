import { ManagerModel } from "@/server/DL/Models/ManagerModel";
import { EmployeeModel } from '@/server/DL/Models/employeeModel';

export const getManagerWithEmployees = async (_id) => {
  try {
    const manager = await ManagerModel.findOne({ _id }).lean().exec();
    const employees = await EmployeeModel.find({ _id: { $in: manager.employees } }).lean().exec();

    // החלף את ה-IDs של העובדים עם המידע המלא
    manager.employees = employees;

    return manager;
  } catch (error) {
    console.error('Error fetching manager and employees:', error);
    return null;
  }
};


export const getAllManagers = async () => {
    const allManagers = await ManagerModel.find();
    return allManagers;
 }
 