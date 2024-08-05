import { getAllEmployees, getOneEmployee ,createEmployee  } from '@/server/DL/Controller/employeeController';

export const AllEmployees = async ()=>{
   const employees = await getAllEmployees()
   console.log("AllEmployees: ", employees);
    return employees ;
}

export const OneEmployee = async (id)=>{
        const employee = await getOneEmployee(id);
        console.log("OneEmployee: ", employee);
        return employee;
}
