import girlA from "../images/GirlE.png";
import girlB from "../images/GirlB.png";
import girlC from "../images/GirlC.png";

const textQuestion = "lorem ipsum dolor sit amet";
const textAnswer =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.";

export const getQuestionsData = () => {
  function getQuestion(question: string, answer: string) {
    return { title: question, text: answer };
  }

  const sectionTitle = "Frequently asked questions.";
  const listQuestions = [
    getQuestion(textQuestion, textAnswer),
    getQuestion(textQuestion, textAnswer),
    getQuestion(textQuestion, textAnswer),
    getQuestion(textQuestion, textAnswer),
    getQuestion(textQuestion, textAnswer),
    getQuestion(textQuestion, textAnswer),
  ];
  const listPhotos = [girlA, girlB, girlC];

  return {
    sectionTitle,
    listQuestions,
    listPhotos,
  };
};
