const initialState = {
  questionData: {
    currentQuestion: 0,
    questions: [
      {
        id: 1,
        question: '',
        type: '',
        answer: ''
      },
      {
        id: 2,
        question: '',
        type: '',
        answer: ''
      },
      {
        id: 3,
        question: '',
        type: '',
        answer: ''
      },
      {
        id: 4,
        question: '',
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
