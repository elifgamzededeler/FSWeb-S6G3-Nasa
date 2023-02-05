import React from "react";
import Img from "./img";
import Text from "./text";

const Nasa = (props) => {
  const { data } = props;

  return (
    <div>
      <Img url={data.url} title={data.title} />{" "}
      {/*datanın url i img in props
      urli olsun. şimdi gidip img a url props ekleyeceğim.*/}
      <Text data={data} />
    </div>
  );
};

export default Nasa;
