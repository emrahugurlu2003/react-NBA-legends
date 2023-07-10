import Card from "./Card";
//data burada named import ediliyor ve prop olarak Card componentine yolanıyor.
import { Legends } from "../helpers/data";

//Main de sadece Card komponentini içeriyor
const Main = () => {
  return (
    <div>
      <Card data={Legends} />
    </div>
  );
};

export default Main;
