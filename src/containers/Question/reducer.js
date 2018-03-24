import { SUBMIT_ANSWER, SET_CURRENT_QUESTION } from './constants';

const initialState = {
  questionData: {
    questions: [
      {
        id: 1010,
        question: 'Who are the 3 greatest living musicians?',
        fieldProperties: {
          type: 'text',
          label: 'Placeholder text',
          values: ''
        },
        answer: ''
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
        id: 1012,
        question: 'If you could be great at one sport which would you choose?',
        fieldProperties: {
          type: 'radiobutton',
          label: 'Placeholder text',
          values: [
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

function updateQuestions(questions, action) {
  const updatedQuestions = questions.map((question, i) => {
    if (action.id === question.id) {
      return {
        ...question,
        answer: action.answer
      };
    } else {
      return question;
    }
  });
  return updatedQuestions;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_ANSWER:
      return {
        ...state,
        questionData: {
          questions: updateQuestions(state.questionData.questions, action)
        }
      };
      break;
    default:
      return state;
  }
};
