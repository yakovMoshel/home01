
import Form from "@/componets/form";
import { AllEmployees } from "@/server/BL/employeeService";
import { AllManagers } from "@/server/BL/ManagerService";

import { connectToMongo } from "@/server/DL/conectToMongo";

export default async function Login() {
  await connectToMongo();

  const allEmployees = await AllEmployees()
  const allManagers = await AllManagers()

  return (
    <div style={{ display: "flex",alignItems: "center"  ,justifyContent: "center" }}>
      <Form employee={allEmployees}  manager={allManagers}/>
    </div>
  );
}
