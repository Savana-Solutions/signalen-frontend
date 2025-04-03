import type { FC } from 'react'

import { Heading, Paragraph, List, ListItem, Link } from '@amsterdam/asc-ui'

import BasePage from '../BasePage'

const Toegankelijkheidsverklaring: FC = () => (
  <BasePage
    documentTitle="Accessibility Statement"
    pageTitle="Accessibility Statement"
  >
    <aside>
      <Paragraph>Created on 01-10-2021</Paragraph>

      <Paragraph>
        We strive to make the reporting form accessible to everyone and on all
        devices. We do this by complying with the accessibility requirements of
        DigiToegankelijk.nl. The requirements contained therein are based on the
        international accessibility standard WCAG 2.1 level AA. In this
        statement, you can read on which points we deviate from these
        requirements.
      </Paragraph>

      <Paragraph>This statement applies to the websites:</Paragraph>

      <List>
        <ListItem>
          <Link inList href="https://meldingen.amsterdam.nl">
            meldingen.amsterdam.nl
          </Link>
        </ListItem>
        <ListItem>
          <Link inList href="https://meldingenamsterdamsebos.amsterdam.nl">
            meldingenamsterdamsebos.amsterdam.nl
          </Link>
        </ListItem>
        <ListItem>
          <Link inList href="https://meldingenweesp.amsterdam.nl">
            meldingenweesp.amsterdam.nl
          </Link>
        </ListItem>
      </List>
    </aside>

    <section>
      <header>
        <Heading as="h2">Accessibility Assessment</Heading>
      </header>
      <List variant="bullet">
        <ListItem>
          17-10-2024: Manual assessment by Digitaal Toegankelijk:{' '}
          <Link
            variant="inline"
            icon="download"
            href="/assets/2024-04_meldingen.amsterdam.nl_Digitaal-Toegankelijk-WCAG-EM.pdf"
          >
            download document
          </Link>
        </ListItem>
        <ListItem>
          23-07-2021: Manual assessment by Firm Ground:{' '}
          <Link
            variant="inline"
            icon="download"
            href="/assets/files/2021-07-23 Toegankelijkheidsonderzoek Meldingen-systeem Amsterdam, Amsterdamse Bos en Weesp (www.meldingen.amsterdam.nl) versie 2.0.pdf"
          >
            download document
          </Link>
        </ListItem>
        <ListItem>
          The research results can be reviewed on the site:{' '}
          <Link
            variant="inline"
            href="https://www.toegankelijkheidsverklaring.nl/register/5621/"
          >
            toegankelijkheidsverklaring.nl
          </Link>
        </ListItem>
      </List>
    </section>

    <section>
      <header>
        <Heading as="h2">Components That Are Not Yet Accessible</Heading>
      </header>

      <List variant="bullet">
        <ListItem>
          Some maps have objects that can be selected, such as the map with
          waste containers. These can be reached with the keyboard, but the
          selection disappears automatically. Users who navigate the site with a
          keyboard cannot now indicate which object they are referring to.
        </ListItem>
        <ListItem>
          The map where street lights can be selected only has a number for
          screen readers. This is not clear for all users.
        </ListItem>
        <ListItem>
          When the user uploads a photo with a file size smaller than 30kB, a
          text is displayed: 'This file is too small. The minimum file size is
          30kB.' This text is not communicated to screen readers.
        </ListItem>
      </List>
      <Paragraph>
        These components will be resolved by March 1, 2022. From then on, the
        website will comply with all requirements of the international
        accessibility standard WCAG 2.1 level AA.
      </Paragraph>
    </section>

    <section>
      <header>
        <Heading as="h2">
          Approach to Promote the Accessibility of Our Website
        </Heading>
      </header>

      <Paragraph>
        This is what we do to make and keep online reporting accessible to
        everyone:
      </Paragraph>

      <List variant="bullet">
        <ListItem>
          We regularly have an accessibility assessment done of (parts of) our
          website by an independent party.
        </ListItem>
        <ListItem>
          We develop the online reporting system together with you, the
          Amsterdam resident.
        </ListItem>
        <ListItem>
          During development, we take accessibility into account.
        </ListItem>
        <ListItem>
          Our employees keep their knowledge of accessibility up to date.
        </ListItem>
      </List>
    </section>

    <section>
      <header>
        <Heading as="h2">
          Problem with the Accessibility of this Website?
        </Heading>
      </header>

      <Paragraph>
        If, despite the measures we have already taken, you have an
        accessibility problem on our website, please let us know. Report it via{' '}
        <Link
          variant="inline"
          href="https://formulieren.amsterdam.nl/tripleforms/DirectRegelen/formulier/nl-NL/evAmsterdam/Klachtenformulier.aspx"
        >
          our contact form
        </Link>
        .
      </Paragraph>
    </section>
  </BasePage>
)

export default Toegankelijkheidsverklaring
