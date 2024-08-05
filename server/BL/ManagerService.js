import { getManagerWithEmployees,getAllManagers } from "../DL/Controller/ManagerController";

export const OneManager = async (id)=>{
    const Manager = await getManagerWithEmployees(id);
    console.log("OneEmployee: ", Manager);
    return Manager;
}

export const AllManagers = async ()=>{
    const Managers = await getAllManagers()
    console.log("AllManagers: ", Managers);
     return Managers ;
 }
 