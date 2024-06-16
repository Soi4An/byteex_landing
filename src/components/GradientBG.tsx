import React, { ReactNode } from "react";
import classNames from "classnames";
import "../App.css";

interface Props {
  direction: "t" | "b";
  extraClasses?: string;
  children?: ReactNode;
}

const GradientBG: React.FC<Props> = ({ children, direction, extraClasses }) => {
  return (
    <div
      className={classNames(extraClasses, {
        "gradient-orange-bottom": direction === "b",
        "gradient-orange-top": direction === "t",
      })}
    >
      {children || ""}
    </div>
  );
};

export default GradientBG;
