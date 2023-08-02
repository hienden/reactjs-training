import "./App.css";

function App() {
  const handleClick = (event) => {
    console.log(event);
  };
  const handleChange = (event) => {
    console.log("change input", event.target.value);
  };
  const abc = (event) => handleChange(event, "sdas", 23);
  return (
    <>
      <button onClick={handleClick}>click</button>
      <input type="text" onChange={abc} />
      <select
        name="cars"
        id="cars"
        onChange={(e) => console.log(e.target.value)}
      >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi343">Audi</option>
      </select>
    </>
  );
}

export default App;
