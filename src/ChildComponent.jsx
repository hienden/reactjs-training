const ChildComponent = (props) => {
  return (
    <div>
      ChildComponent - {props.userInfomation.name} {props.userInfomation.age}
    </div>
  );
};

export default ChildComponent;

// const ChildComponent = (props) => {
//   return <div>ChildComponent - {props.name}</div>;
// };

// export default ChildComponent;
