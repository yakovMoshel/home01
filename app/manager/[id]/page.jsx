import React from 'react'
import styles from './style.module.scss';
import { users } from '@/app/data';
import Link from 'next/link';

export default function Manager({ params }) {
  const { id } = params;
  const manager = users.find(user => user.id === parseInt(id)); // Find Manager by ID

  if (!manager) {
    return <div>Loading...</div>; // Handle case where Manager is not found
  }

  return (
    <div className={styles.ManagerContainer}>
      <h1>Welcome, {manager.fullName}!</h1>
      <div className={styles.tasksContainer}>
        <h2>Tasks:</h2>
        <ol>
          {manager.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ol>
      </div>
      <div className={styles.otherDetails}>
        <p>Email: {manager.email}</p>
      </div>

      <div className={styles.employeesList}>
        <h2>Employees:</h2>
        <ul>
          {manager.employees.map((employee, index) => (
            <li key={index}>
            <Link href={`/employee/${employee.id}`}>{employee.fullName}</Link>
          </li>
          
          ))}
        </ul>
      </div>

    </div>
  );
}
