// api/index.js

const surveys = [
  {
    id: 1,
    name: 'Dogs',
    created_at: new Date(2017, 12, 1),
    questions: [
      {
        id: 1,
        text: 'What is your favorite dog?',
        choices: [
          { id: 1, text: 'Beagle', selected: 0 },
          { id: 2, text: 'Labrador', selected: 0 },
          { id: 3, text: 'Rottweiler', selected: 0 }]
      }, {
        id: 2,
        text: 'What is your second favorite dog?',
        choices: [
          { id: 5, text: 'Beagle', selected: 0 },
          { id: 6, text: 'Labrador', selected: 0 },
          { id: 7, text: 'Rottweiler', selected: 0 }]
      }]
  },
  {
    id: 2,
    name: 'Cars',
    created_at: new Date(2017, 12, 3),
    questions: [
      {
        id: 5,
        text: 'What is your favorite car?',
        choices: [
          { id: 17, text: 'Corvette', selected: 0 },
          { id: 18, text: 'Mustang', selected: 0 },
          { id: 19, text: 'Camaro', selected: 0 }]
      }, {
        id: 6,
        text: 'What is your second favorite car?',
        choices: [
          { id: 21, text: 'Corvette', selected: 0 },
          { id: 22, text: 'Mustang', selected: 0 },
          { id: 23, text: 'Camaro', selected: 0 }]
      }]
  }
]

export function fetchSurveys () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(surveys)
    }, 300)
  })
}

export function fetchSurvey (surveyId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const survey = surveys.find(survey => survey.id === surveyId)
      if (survey) {
        resolve(survey)
      } else {
        reject(Error('Survey does not exist'))
      }
    }, 300)
  })
}

export function saveSurveyResponse (surveyResponse) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('saving survey response...')
      resolve()
    }, 300)
  })
}

export function postNewSurvey (survey) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Saving survey ...', survey)
      resolve()
    }, 300)
  })
}
