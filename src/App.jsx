import "./App.css";

function App() {
  const isShowElement = false;
  // Cách 1: sử dụng if...else statement
  // if (isShowElement) {
  //   return <h1>hello world</h1>;
  // }
  // return <h2>Xin chao ReactJS</h2>;

  // Cách 2: sử dụng && operator
  // return (
  //   isShowElement && (
  //     <p>
  //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam eius
  //       vitae veniam omnis? Non aut deleniti beatae dolores ducimus voluptate,
  //       facilis animi consequatur cumque consectetur dicta voluptatibus
  //       recusandae atque aspernatur.
  //     </p>
  //   )
  // );

  // cách 3: sử dụng tenary operator
  return isShowElement ? <span>tho bui</span> : <span>hien</span>;
}

export default App;
