import configuration from 'shared/services/configuration/configuration'

export interface SuccessSections {
  ja: {
    title: string
    body: string
  }
  nee: {
    title: string
    body: string
  }
}

export interface RenderSections {
  TOO_LATE: {
    title: string
    body: string
  }
  FILLED_OUT: {
    title: string
    body: string
  }
  NOT_FOUND: {
    title: string
    body?: string
  }
}

export const renderSections: RenderSections = {
  TOO_LATE: {
    title: 'Unfortunately, you can no longer respond to this report',
    body: 'After our response, you have 2 weeks to provide feedback.',
  },
  FILLED_OUT: {
    title: 'You have already given a response to this report',
    body: 'Through your response, we know what we do well and what we can improve.',
  },
  NOT_FOUND: {
    title: 'The feedback form for this report could not be found',
  },
}

// istanbul ignore next
export const successSections: SuccessSections = configuration.featureFlags
  .reporterMailHandledNegativeContactEnabled
  ? {
      ja: {
        title: 'Thank you for your response',
        body: 'Through your response, we know what we do well and what we can improve.',
      },
      nee: {
        title: 'Thank you for your response',
        body: `Through your response, we know what we can improve.`,
      },
    }
  : {
      ja: {
        title: 'Thank you for your feedback!',
        body: 'We are continuously working to improve our services.',
      },
      nee: {
        title: 'Thank you for your feedback!',
        body: `We are continuously working to improve our services.`,
      },
    }

export const contactAllowedText =
  '\n You will immediately receive an email with an overview of your response. Within 3 working days you will read what we are going to do with it.'
