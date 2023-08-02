import { memo } from "react";

const MemoComponent = (props) => {
  console.log("memo  component init");
  console.log("memo component re-render");
  return (
    <div>
      MemoComponent
      {props.name}
      {/* <button onClick={() => props.callback()}>child clicked</button> */}
    </div>
  );
};

export default memo(MemoComponent); // hight order component
