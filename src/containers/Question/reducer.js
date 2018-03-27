import { SUBMIT_ANSWER } from './constants';

const initialState = {
  questionData: {
    questions: [
      {
        id: 1010,
        question: 'Who are the 3 greatest living musicians?',
        fieldProperties: {
          type: 'text',
          label: 'Placeholder text',
          values: [],
        },
        answer: '',
      },
      {
        id: 1011,
        question: 'If you could time travel, where would you go?',
        fieldProperties: {
          type: 'dropdown',
          label: 'Placeholder text',
          values: [
            {
              name: 'India',
              value: 'IN',
            },
            {
              name: 'Germany',
              value: 'DE',
            },
            {
              name: 'Netherlands',
              value: 'NE',
            },
          ],
        },
        answer: '',
      },
      {
        id: 1012,
        question: 'If you could be great at one sport which would you choose?',
        fieldProperties: {
          type: 'radiobutton',
          label: 'Placeholder text',
          values: [
            {
              name: 'Athletics',
              value: 'ATL',
            },
            {
              name: 'Cricket',
              value: 'CRI',
            },
            {
              name: 'Football',
              value: 'FBALL',
            },
          ],
        },
        answer: '',
      },
      {
        id: 1013,
        question: 'What types of credit cards do you have (Select all that apply)?',
        fieldProperties: {
          type: 'radiobutton',
          label: 'Placeholder text',
          values: [
            {
              name: 'Visa',
              value: 'VISA',
            },
            {
              name: 'Master Card',
              value: 'MC',
            },
            {
              name: 'American Express',
              value: 'AE',
            },
            {
              name: 'Diners Club',
              value: 'DC',
            },
          ],
        },
        answer: '',
      },
      {
        id: 1015,
        question: 'What is your opinion on Brexit',
        fieldProperties: {
          type: 'text',
          label: 'Placeholder text',
          values: [],
        },
        answer: '',
      },
      {
        id: 1016,
        question: 'Which season do you like the most?',
        fieldProperties: {
          type: 'dropdown',
          label: 'Placeholder text',
          values: [
            {
              name: 'Spring',
              value: 'SPR',
            },
            {
              name: 'Autumn',
              value: 'AUT',
            },
            {
              name: 'Monsoon',
              value: 'MON',
            },
            {
              name: 'Summer',
              value: 'SUM',
            },
          ],
        },
        answer: '',
      },
      {
        id: 1017,
        question: 'Do you like spicy food and why?',
        fieldProperties: {
          type: 'text',
          label: 'Placeholder text',
          values: [],
        },
        answer: '',
      },
    ],
  },
};

function updateQuestions(questions, action) {
  const updatedQuestions = questions.map((question) => {
    if (action.id === question.id) {
      return {
        ...question,
        answer: action.answer,
      };
    }
    return question;
  });
  return updatedQuestions;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_ANSWER:
      return {
        ...state,
        questionData: {
          questions: updateQuestions(state.questionData.questions, action),
        },
      };
    default:
      return state;
  }
};
