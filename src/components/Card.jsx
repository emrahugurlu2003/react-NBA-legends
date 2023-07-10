import { useState } from "react";
//parent tan bir {data} nesenesi prop olarak alınıyor.
const Card = ({ data }) => {
  /* useState and onClick function */
  const [activeCards, setActiveCards] = useState([]); // active durumunu tutacak dizi
  const [query, setQuery] = useState(""); //searchbar içindeki değerin güncel olarak tutulması için

  const handleClick = (index) => {
    setActiveCards((prevState) => {
      // index'e göre active durumunu güncelle
      const updatedState = [...prevState];
      //updatedState nesnesini toogle ediyor.
      //toggle edilecek hangisiyse ona [index] ile erişiyor
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };

  let filteredArr = []; //önce initialize ettik
  //data nasnesi, filter metodu ile searchbox içindeki metnin lowercase şeklini
  // içerenler olacak şekilde süzülüyor ve filteredArr dizisine yollanıyor.
  filteredArr = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  //console.log(filteredArr);

  const handleSearch = (e) => {
    //serachbar içindeki değer her güncellendiğinde setQuery, onun değerini Query statine atıyor.
    setQuery(e.target.value);
  };

  /* fetching data */
  //data yapısını incelemek için loga yazdıralım.
  // console.log(data);
  return (
    <div>
      {/* //searchBar input aşağıda */}
      <input
        className="form-control mb-4 w-50 m-auto"
        type="text"
        placeholder="Search Player.."
        //değeri her değiştiğinde handleSearch metodu çağrılıyor.
        onChange={handleSearch}
      />
      <div className="bg p-4 d-flex flex-wrap gap-5 container justify-content-center ">
        {/*filteredarray in her bir elemanına item diyelim. Her elamanın indeksine de bir paramtre verelim: */}
        {filteredArr.map((item, index) => {
          //bu arrow fonksiyonu bir html nesnesi return ediyor.
          return (
            //her bir card_container içinde 2 div var:
            //card-header ve card_content
            <div
              key={index} //böylece unique olur ve warning gider
              className="card card_container"
              style={{ width: "200px" }} //yani const mystyle {width:"200px"}; style ={myStyle}
            >
              <div className="card-header border-top">
                <p className="card-text">{item.name}</p>
              </div>
              <div
                //jsx içinde bir javascript çalıştıracağımızdan dolayı, tüm ifede, {} içinde olmalı
                //çalıştırılan javascript, string template veya template literel denen şeyi üretiyor.
                //sonuçta bir string oluşturulacak. string başı, statik olup "card_content " şeklinde
                //devamı ise parametreden gelecek. index numarası le erişilen activeCards elemanının
                //değeri true ise ikinci bir class olan "flipCard"" eklenecek, değilse "" eklenecek
                className={`card_content ${
                  activeCards[index] ? "flipCard" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {/* card-content de aslında front_card ve back_card şeklinde iki karttan oluşuyor */}
                <div className="front_card">
                  <div className="img_div">
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt={item.name}
                    />
                  </div>
                </div>
                <div className="back_card text-center">
                  <ul className="text-start">
                    <li>🏀 {item.statistics[0]}</li>
                    <li>🏀 {item.statistics[1]}</li>
                    <li>🏀 {item.statistics[2]}</li>
                    <li>🏀 {item.statistics[3]}</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Card;
