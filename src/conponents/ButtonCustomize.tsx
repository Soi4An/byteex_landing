import Icon from "./Icon";

type Props = {
  arrowImg?: string;
};

const ButtonCustomize = ({ arrowImg }: Props) => (
  <button className="flex gap-4 justify-center items-center w-full max-w-96 min-w-52 h-14 rounded bg-blue-text hover:bg-blue-text-hover text-white text-base transition-colors">
    <p>{'Customize Your Outfit'}</p>
    
    {!!arrowImg &&  <Icon width={'23px'} url={arrowImg} />}
  </button>
);

export default ButtonCustomize;
