/* eslint-disable consistent-return */
import baseUrl from '../../constants/baseUrl';

// Get all students
export const getAllStudents = async () => {
  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWVjYjE1NmY1OGI1ODhjNzA1MWI4NiIsImlhdCI6MTY3MzYwMzUzOSwiZXhwIjoxNjc2MTk1NTM5fQ.CQYvHzQz377s4aZcqub62UGYOfxrNoFecLKxK_fPeHo',
  });

  try {
    const response = await fetch(`${baseUrl}/api/school/students/get-all-students`, {
      method: 'GET',
      headers: myHeaders,
    });

    const students = await response.json();
    return students;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Create a student
export const saveNewStudent = async (student) => {
  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWVjYjE1NmY1OGI1ODhjNzA1MWI4NiIsImlhdCI6MTY3MzYwMzUzOSwiZXhwIjoxNjc2MTk1NTM5fQ.CQYvHzQz377s4aZcqub62UGYOfxrNoFecLKxK_fPeHo',
  });

  try {
    const response = await fetch(`${baseUrl}/api/school/students/add-student`, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(student),
    });

    const newStudent = await response.json();
    return newStudent;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update a student
export const updateStudent = async (student) => {
  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWVjYjE1NmY1OGI1ODhjNzA1MWI4NiIsImlhdCI6MTY3MzYwMzUzOSwiZXhwIjoxNjc2MTk1NTM5fQ.CQYvHzQz377s4aZcqub62UGYOfxrNoFecLKxK_fPeHo',
  });

  const response = await fetch(`${baseUrl}/api/school/students/${student.id}`, {
    method: 'PATCH',
    headers: myHeaders,
    body: JSON.stringify(student),
  });

  const updatedStudent = await response.json();
  return updatedStudent;
};

// Delete a student
export const deleteStudent = async (id) => {
  const myHeaders = new Headers({
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWVjYjE1NmY1OGI1ODhjNzA1MWI4NiIsImlhdCI6MTY3MzYwMzUzOSwiZXhwIjoxNjc2MTk1NTM5fQ.CQYvHzQz377s4aZcqub62UGYOfxrNoFecLKxK_fPeHo',
  });

  const response = await fetch(`${baseUrl}/api/school/students/${id}`, {
    method: 'DELETE',
    headers: myHeaders,
  });

  const deletedStudent = await response.json();
  return deletedStudent;
};
