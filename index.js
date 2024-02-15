const tutorials = [
    'What Does The This Keyword Mean?',
    'What Is The Constructor OO Pattern?',
    'Implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What Is NaN And How Can We Check For It',
    'What Is The Difference Between StopPropagation And PreventDefault?',
    'Immutable State And Pure Functions',
    'What Is The Difference Between == And ===?',
    'What Is The Difference Between Event Capturing And Bubbling?',
    'What Is JSONP?'

];

const titleCased = () => {
  return tutorials.map(tutorial => {
    const words = tutorial.split(' ');
    const capitalizedWords = words.map(word => {
      const firstLetter = word[0].toUpperCase();
      const restOfWord = word.slice(1);
      return firstLetter + restOfWord;
    });
    return capitalizedWords.join(' ');
  });
}

const titleCaseTutorialNames = titleCased();
console.log(titleCaseTutorialNames);

