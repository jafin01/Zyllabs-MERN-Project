import React from 'react';
import SchoolRoute from './routes/SchoolRoutes/SchoolRoute';
import StaffRoute from './routes/StaffRoutes/StaffRoute';
import StudentRoute from './routes/StudentRoutes/StudentRoute';

function App() {
  return (
    <>
      <SchoolRoute />
      <StaffRoute />
      <StudentRoute />
    </>
  );
}

export default App;
