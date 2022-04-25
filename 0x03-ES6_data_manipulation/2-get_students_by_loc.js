export default function getStudentsByLocation(students, city) {
  const result = students.filter((word) => word.location === city);
  return result;
}
