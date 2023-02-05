import React from "react";

const Search = (props) => {
  const { tarih, changeHandler } = props; //App2teki tarihi buraya props olarak aldım.
  return (
    <div>
      <input
        value={tarih}
        onChange={(event) => changeHandler(event.target.value)}
        name="date"
        type="date"
      />
      {/*value olarak tarihi aktardım. tarihi inputa aktardım. inputta bir şey değiştiği zaman onChange ile yakaladığım changeHandler fonksiyonunu çalıştırdım. changeHandler fonksiyonunu da App.js içinde yazacağım.*/}
    </div>
  );
};

export default Search;
