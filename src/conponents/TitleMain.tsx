import React from "react";

type Props = {
  text: string;
};

const TitleMain = React.memo(({ text }: Props) => (
  <h1 className="text-center sm:text-start text-blue-text text-3xl lg:text-4xl">
    {text}
  </h1>
));

export default TitleMain;
