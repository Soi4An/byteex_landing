type Props = {
  paragraphs: string[];
};

const TextParagraphs = ({ paragraphs }: Props) => (
  <div className="flex flex-col gap-5">
    {paragraphs.map((text, ind) => (
      <p key={`about-us-par-${ind}`}>{text}</p>
    ))}
  </div>
);

export default TextParagraphs;
