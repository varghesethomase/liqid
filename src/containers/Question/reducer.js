const initialState = {
  questionData: {
    currentQuestion: 0,
    questions: [
      {
        id: 1,
        question: 'Question 1',
        type: '',
        answer: ''
      },
      {
        id: 2,
        question: 'Question 2',
        type: '',
        answer: ''
      },
      {
        id: 3,
        question: 'Question 3',
        type: '',
        answer: ''
      },
      {
        id: 4,
        question: 'Question 4',
        type: '',
        answer: ''
      }
    ]
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case '':
      return {};
    default:
      return state;
  }
};
