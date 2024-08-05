'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from './style.module.scss';

export default function LoginForm({ employee, manager }) {
  const router = useRouter()
  const [formData, setFormData] = useState({ email: '', password: '', name: '', role: '' });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(  employee + manager );
  }, [])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleRoleChange = (e) => {
    const role = e.target.value;
    setFormData({ ...formData, role });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = users.find(user =>
        user.email === formData.email && user.password === formData.password
      );
      if (!user) {
        throw new Error('Invalid email or password');
      }
      if (user.status === 'employee') {
        router.push(`/employee/${user._id}`);
      } else if (user.status === 'manager') {
        router.push(`/manager/${user._id}`);
      }
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
