import { QuestionFieldType } from 'types/question'

const locatie = {
  meta: {
    featureTypes: [],
    label: 'Where is it?',
    language: {
      title: 'Select the location',
      subTitle: 'Where is it?',
      description:
        'Enter the nearest address, click the location on the map or use "My location"',
      submit: 'Bevestigen',
    },
    shortLabel: 'Where is it?',
  },
  render: QuestionFieldType.LocationSelect,
  options: {
    validators: ['required'],
  },
}

export default locatie
