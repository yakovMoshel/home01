import { getManagerWithEmployees,getAllManagers } from "../DL/Controller/ManagerController";

export const OneManager = async (id)=>{
    const Manager = await getManagerWithEmployees(id);
    return Manager;
}

export const AllManagers = async ()=>{
    const Managers = await getAllManagers()
     return Managers ;
 }
 