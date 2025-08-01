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
    <div>
    <form onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>
      <label htmlFor="first-name">First Name: </label>
      <input
        id="first-name"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      /><br />
      <label htmlFor="last-name">Last Name: </label>
      <input
        id="last-name"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      /><br />
      <button type="submit">Submit</button>
    </form>
    {fullName && (
     <p>Full Name: {fullName}</p>
    )}
  </div>
  );
}