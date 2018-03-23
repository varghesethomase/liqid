const initialState = {
  questionData: {
    currentQuestion: 0,
    questions: [
      {
        id: 1,
        question: 'Question 1',
        fieldProperties: {
          type: 'text',
          label: 'Placeholder text',
          value: ''
        },
        answer: ''
      },
      {
        id: 2,
        question: 'Question 2',
        fieldProperties: {
          type: 'dropdown',
          label: 'Placeholder text',
          value: [
            {
              name: 'Alphabets',
              value: 'az'
            },
            {
              name: 'Animals',
              value: 'mongoose'
            }
          ]
        },
        answer: ''
      },
      {
        id: 3,
        question: 'Question 3',
        fieldProperties: {
          type: 'radiobutton',
          label: 'Placeholder text',
          value: [
            {
              name: 'Alphabets',
              value: 'az'
            },
            {
              name: 'Animals',
              value: 'mongoose'
            }
          ]
        },
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
