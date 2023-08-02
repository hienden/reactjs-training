import CssModuleComponent from "./CssModuleComponent/CssModuleComponent";
import CssStylesheetComponent from "./CssStylesheetComponent/CssStylesheetComponent";
import InlineStyleComponent from "./InlineStyleComponent/InlineStyleComponent";
import ScssComponent from "./ScssComponent/ScssComponent";

function App() {
  return (
    <>
      <InlineStyleComponent></InlineStyleComponent>
      <CssStylesheetComponent></CssStylesheetComponent>
      <CssModuleComponent></CssModuleComponent>
      <ScssComponent></ScssComponent>
    </>
  );
}

export default App;
