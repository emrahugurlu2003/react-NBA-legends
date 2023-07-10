//bir nesne olarak logo resmi import ediliyor.
//kullanılırken süslü parantez içinde kullanılarak parametrk hale gettiriliyor.
import logo from "../assets/nba-logo.png";
const Header = () => {
  //header sadece bir logo ve başlık içeriyor
  //bootstrap style olarak 'container mt-4 text-center' uygulanıyor.
  //harici scss içinde de .header style tanımlanmış
  //scss içinde img ve h1 için genel bir style tanımlı
  return (
    <div className="header container mt-4 text-center">
      <img className="" src={logo} alt="" />
      <h1 className="my-3 text-bold">NBA Legends</h1>
    </div>
  );
};

export default Header;
