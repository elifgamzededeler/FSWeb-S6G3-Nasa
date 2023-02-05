import React from "react";

const Img = (props) => {
  //const { url, title } = props; bunu tanımlamak yerine farklı bir yöntem deneyelim.
  return (
    <main>
      <img src={props.url} alt={props.title} />{" "}
      {/*eger propsu yukarıda tanımlamazsam bu şekilde de alabilirim. normalde url ve title olarak 2 tane props tanımlayacaktım.*/}
      {/*yukarıda Img Componenti props alır dedim. eğer oraya props yerine başka bir kelime yazsaydım.. kelime.url demem gerekirdi*/}
    </main>
  );
};

export default Img;
