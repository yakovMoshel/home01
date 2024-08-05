import React from 'react'
import styles from './style.module.scss';
import Link from 'next/link';
import { connectToMongo } from '@/server/DL/conectToMongo';
import { OneManager } from '@/server/BL/ManagerService';

export default async function Manager({ params }) {
  await connectToMongo();
  const manager = await OneManager({ _id: params.id });

  const { name, email, tasks = [], employees = [] } = manager;

  console.log("tasks:", tasks)

  return (
    <div className={styles.ManagerContainer}>
      <h1>Welcome {name }!</h1>
      <div className={styles.tasksContainer}>
        <h2>Tasks:</h2>
        {tasks.length > 0 ? (
          <ol>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ol>
        ) : (
          <p>No tasks assigned</p>
        )}
      </div>
      <div className={styles.otherDetails}>
        <h2>Email:</h2> 
        {email}
      </div>

      <div className={styles.employeesList}>
        <h2>Employees:</h2>
    
          <ul>
            {employees.map((employee, index) => (
            <li key={employee._id.toString()}>
            <Link href={`/employee/${employee._id.toString()}`}>
              Employee: {employee.name}
            </Link>
          </li>
            ))}
          </ul>
     
      </div>
    </div>
  );
}