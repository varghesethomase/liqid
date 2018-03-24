const initialState = {
  questionData: {
    currentQuestion: 0,
    questions: [
      {
        id: 1,
        question: 'Who are the 3 greatest living musicians?',
        fieldProperties: {
          type: 'text',
          label: 'Placeholder text',
          value: ''
        },
        answer: ''
      },
      {
        id: 2,
        question: 'If you could time travel, where would you go?',
        fieldProperties: {
          type: 'dropdown',
          label: 'Placeholder text',
          value: [
            {
              name: 'India',
              value: 'IN'
            },
            {
              name: 'Germany',
              value: 'DE'
            },
            {
              name: 'Netherlands',
              value: 'NE'
            }
          ]
        },
        answer: ''
      },
      {
        id: 3,
        question: 'If you could be great at one sport which would you choose?',
        fieldProperties: {
          type: 'radiobutton',
          label: 'Placeholder text',
          value: [
            {
              name: 'Athletics',
              value: 'ATL'
            },
            {
              name: 'Cricket',
              value: 'CRI'
            },
            {
              name: 'Football',
              value: 'FBALL'
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
