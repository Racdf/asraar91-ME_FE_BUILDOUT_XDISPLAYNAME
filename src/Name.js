import { useState } from 'react';

export default function Name() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      setFullName(`${firstName} ${lastName}`);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>
      <span>First Name: </span>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      /><br />
      <span>Last Name: </span>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      /><br />
      <button type="submit">Submit</button>
      {fullName && (
        <p>Full Name: {fullName}</p>
      )}
    </form>
  );
}