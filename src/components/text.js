import React from "react";

const Text = (props) => {
  const { copyright, date, explanation } = props.data;
  return (
    <section>
      <h2>{copyright}</h2>{" "}
      {/*eğer props tanımlamazsam süslü parantez içerisinde props.data.copyright yazacaktım*/}
      <h3>{date}</h3>{" "}
      {/*eğer props tanımlamazsam süslü parantez içerisinde props.data.tarih yazacaktım*/}
      {/*buradaki text yazısı dummy datanın içinden date key'inin valuesunu çekecek.p yüzden buraya date yazdım daha sonra da datanın içindeki date keyinin valuesundan gelecek*/}
      <p>{explanation}</p>{" "}
      {/*eğer props tanımlamazsam süslü parantez içerisinde props.data.description yazacaktım*/}
      {/*bu yüzden propslarımı props.data olarak yazdım*/}
    </section>
  );
};

export default Text;
