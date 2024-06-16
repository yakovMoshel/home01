import { employeeModel} from "../Models/EmployeeModel";

export const getOneEmployee = (id) => employeeModel.findById(id);

export const getAllEmployees = () => employeeModel.find({});

export const createEmployee = (employee) => employeeModel.create(employee);
