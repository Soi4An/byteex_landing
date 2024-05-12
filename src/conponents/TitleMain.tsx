type Props = {
  text: string;
};

const TitleMain = ({ text }: Props) => (
  <h1 className="text-center text-blue-text text-3xl md:text-3xl lg:text-4xl">
    {text}
  </h1>
);

export default TitleMain;
