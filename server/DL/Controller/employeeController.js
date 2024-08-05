import { EmployeeModel } from "@/server/DL/Models/EmployeeModel";
export const getOneEmployee = async (_id) => {
    const employee = await EmployeeModel.findOne({ _id});
    return employee;   
};

export const getAllEmployees = async () => {
   const allEmployees = await EmployeeModel.find();
   return allEmployees;
}

