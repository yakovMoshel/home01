import React from 'react'
import styles from './style.module.scss';
// import { users } from '@/app/data';
import { OneEmployee } from '@/server/BL/employeeService';
import { connectToMongo } from '@/server/DL/conectToMongo';

export default async function Employee({ params }) {
  await connectToMongo();

  const employee = await OneEmployee({ _id: params.id });

  const {name, email, tasks} = employee;

  return (
    <div className={styles.employeeContainer}>
      <h1>Welcome, {name}!</h1>
      <div className={styles.tasksContainer}>
        <h2>Tasks:</h2>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}> {task}</li>
          ))}
        </ol>
      </div>
      <div className={styles.otherDetails}>
        <h3>Email: </h3>
        {email}
      </div>
    </div>
  );
}