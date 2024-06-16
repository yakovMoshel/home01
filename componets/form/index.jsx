'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from './style.module.scss';

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('', formData);
      const user = response.data;

      if (user.role === 'employee') {
        router.push(`/employee/${user._id}`);
      } else if (user.role === 'manager') {
        router.push(`/manager/${user._id}`);
      }
    } catch (error) {
      alert('Invalid email or password');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
