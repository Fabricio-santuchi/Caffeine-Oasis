/* eslint-disable react/prop-types */

import SpanDB from "./SpanDB";

const TituloDB = ({ children, subtitle }) => {
  return (
    <h2 className="text-center text-white uppercase pb-14 text-6xl font-bold">
      <SpanDB>{children}</SpanDB> {subtitle}
    </h2>
  );
};

export default TituloDB;
