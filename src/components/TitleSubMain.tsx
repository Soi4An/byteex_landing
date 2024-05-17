import React from "react";

type Props = {
  text: string;
};

const TitleSubMain = React.memo(({ text }: Props) => (
  <h2 className="text-center sm:text-start text-blue-text text-2xl xl:text-3xl font-bold">
    {text}
  </h2>
));

export default TitleSubMain;
