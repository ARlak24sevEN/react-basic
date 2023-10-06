import { useState } from "react";
function App() {
  const [students, setStudent] = useState([
    { id: 1, name: "arlak" },
    { id: 2, name: "nadia" },
    { id: 3, name: "anna" },
  ]);

  const [show,setShow] = useState(true)// true show , false no show

  function deleteStudent(id){
   setStudent(students.filter(item => item.id !== id ))
  }
  return (
    <>
      <h1> จำนวนนักเรียน = {students.length}</h1>
      
      <button onClick={()=>setShow(!show)}> สลับ</button>
      <ul>
        {show && students.map((item)=>(
          <li key={item.id}>
            <p>{item.id} - {item.name}</p>
            <button onClick={()=>deleteStudent(item.id)}>ลบ</button>
          </li>
        ))}
      </ul>
      
    </>
  );
}

export default App;
