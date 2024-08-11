import { getAllEmployees, getOneEmployee ,createEmployee  } from '@/server/DL/Controller/employeeController';

export const AllEmployees = async ()=>{
   const employees = await getAllEmployees()
    return employees ;
}

export const OneEmployee = async (id)=>{
        const employee = await getOneEmployee(id);
        return employee;
}
