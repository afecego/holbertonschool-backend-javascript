export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    const map1 = students.map((value) => value.id);
    return map1;
  }
  return [];
}
