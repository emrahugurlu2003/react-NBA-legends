import Main from "./components/Main";
import Header from "./components/Header";

//hem normal bootstrap hem de ayrıca scss dosyası kullanacağız
import "bootstrap/dist/css/bootstrap.min.css";
//harici olarka verilmiş olan scss de de şu style lar tanımlı:
//card_container flipCard headr body bg
//Bunlardan card_container ve header nested yapıda
import "./sass/style.scss";

function App() {
  return (
    <div className="App">
      {/* //Header sadece bir logo ve başlık içeriyor. */}
      <Header />
      <Main />
    </div>
  );
}

export default App;
