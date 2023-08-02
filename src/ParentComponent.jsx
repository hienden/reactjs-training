import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const userInfo = {
    name: "hien",
    age: 27,
  };
  //   const name = "hien";
  return (
    <div>
      ParentComponent
      <ChildComponent userInfomation={userInfo}></ChildComponent>
      {/* <ChildComponent name={name}></ChildComponent> */}
    </div>
  );
};

export default ParentComponent;
