import { getAllEmployees, getOneEmployee ,createEmployee  } from "../DL/Controller/EmployeeController";

export const AllEmployees = async ()=>{
    console.log("AllEmployees: ",getAllEmployees);
    return await getAllEmployees();
}

export const OneEmployee = async (id)=>{
    try {
        const employee = await getOneEmployee(id);
        if (!employee) {
          throw new Error('Employee not found');
        }
        console.log("OneEmployee: ", employee);
        return employee;
      } catch (error) {
        console.error('Error fetching employee:', error);
        throw new Error(error.message);
      }

}

export const CreateEmployee = async (employee) => {
    try {
      // בדיקה אם עובד עם אותו מייל כבר קיים במערכת
      const existingEmployee = await getOneEmployee({ id: employee.id });
      if (existingEmployee) {
        throw new Error('this Employee already exists');
      }
      // יצירת עובד חדש ושמירתו במערכת
      const newEmployee = await createEmployee(employee);
      return newEmployee;
    } catch (error) {
      console.error('Error creating employee:', error);
      throw new Error(error.message);
    }
  };