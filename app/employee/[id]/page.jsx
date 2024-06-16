import React from 'react'
import styles from './style.module.scss';
import { users } from '@/app/data';

export default function Employee({ params }) {
  const { id } = params;
  const employee = users.find(user => user.id === parseInt(id)); // Find employee by ID

  if (!employee) {
    return <div>Loading...</div>; // Handle case where employee is not found
  }

  return (
    <div className={styles.employeeContainer}>
      <h1>Welcome, {employee.fullName}!</h1>
      <div className={styles.tasksContainer}>
        <h2>Tasks:</h2>
        <ol>
          {employee.tasks.map((task, index) => (
            <li key={index}> {task}</li>
          ))}
        </ol>
      </div>
      <div className={styles.otherDetails}>
        <p>Email: {employee.email}</p>
        {/* Add any other details you want to display */}
      </div>
    </div>
  );
}