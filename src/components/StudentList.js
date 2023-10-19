import { useState } from "react";
import "./StudentList.css";
export default function StrudentList() {
  const [students, setStudent] = useState([
    { id: 1, name: "arlak" },
    { id: 2, name: "nadia" },
    { id: 3, name: "anna" },
  ]);

  const [show, setShow] = useState(true); // true show , false no show

  function deleteStudent(id) {
    setStudent(students.filter((item) => item.id !== id));
  }
  return (
    <>
      <ul>
        <div className="header">
          <h1> จำนวนนักเรียน = {students.length}</h1>

          <button onClick={() => setShow(!show)}> สลับ</button>
        </div>
        {show &&
          students.map((item) => (
            <li key={item.id}>
              <p>
                {item.id} - {item.name}
              </p>
              <button onClick={() => deleteStudent(item.id)} className="delete">
                ลบ
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
