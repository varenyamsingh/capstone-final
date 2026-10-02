import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { setRole } from '../../store/interactions';

const AdminPanel = ({ medical, provider, dispatch }) => {
  const [address, setAddress] = useState('');
  const [role, setRoleValue] = useState('0'); // Default to Patient
  const account = useSelector(state => state.provider.account);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setRole(medical, provider, address, parseInt(role), dispatch);
    setAddress('');
  };

  return (
    <div className="admin-panel">
      <h2>Role Management</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Address:</label>
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRoleValue(e.target.value)}>
            <option value="0">Patient</option>
            <option value="1">Doctor</option>
            <option value="2">Admin</option>
          </select>
        </div>
        <button type="submit">Assign Role</button>
      </form>
    </div>
  );
};

export default AdminPanel;
