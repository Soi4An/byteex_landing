type Props = {
  isOpen: boolean;
  handlerClick: () => void;
};

const CollapseButton = ({ isOpen, handlerClick }: Props) => (
  <button
    onClick={handlerClick}
    className="text-blue-text text-5xl hover:text-gray-text-dark transition-colors"
  >
    {isOpen ? "-" : "+"}
  </button>
);

export default CollapseButton;
