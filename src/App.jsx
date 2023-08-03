import { useState } from "react";
import ChildComponent from "./ChildComponent";
import CountComponent from "./CountComponent";
import UsersComponent from "./UsersComponent";

/**
 * phân biệt sự khác nhau giữa state và props.
 * giống nhau: điều để hiển thị dữ liệu trong component
 * khác nhau:
 *  - đối với props là dữ liệu được truyền từ component cha sang component con và nó chỉ được đọc nghĩa là không thể thay đổi được giá trị của dữ liệu.
 *  - state thì m có thể theo dõi trạng thái và thay đổi giá trị của dữ liệu.
 *
 */

function App() {
  const [name, setName] = useState("tho"); // khởi tạo giá trị ban đầu cho state
  const [count, setCount] = useState(0); // Sử dụng Hook để theo dõi giá trị số
  const [isToggled, setIsToggled] = useState(false); // Sử dụng Hook để theo dõi giá trị boolean
  const [myArray, setMyArray] = useState([1, 2, 3]); // Sử dụng Hook để theo dõi mảng
  const [myObject, setMyObject] = useState({
    name: "hien",
    age: 18,
    gender: "nam",
  }); // Sử dụng Hook để theo dõi đối tượng
  return (
    <>
      <button onClick={() => setName("tho")}>clicked</button>
      <button
        onClick={() =>
          setMyObject((prev) => ({ ...prev, age: 27, gender: "nu" }))
        }
      >
        update object
      </button>
      <button onClick={() => setMyArray((prev) => [...prev, 4])}>
        update array
      </button>

      <h1>xin chao {name}</h1>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <p>Toggle: {isToggled ? "On" : "Off"}</p>
      <p>Array: {myArray.join(", ")}</p>
      <p>
        Object: {myObject.name} - {myObject.age} - {myObject.gender}
      </p>

      <ChildComponent name={name}></ChildComponent>
      <br />
      <br />
      <CountComponent />
      <UsersComponent />
    </>
  );
}

export default App;
