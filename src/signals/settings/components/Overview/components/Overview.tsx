// Copyright (C) 2023 Gemeente Amsterdam
import type { FunctionComponent } from 'react'
import { useEffect } from 'react'

import {
  PersonalLogin,
  Student,
  Buildings,
  ThumbnailResults,
  Download,
} from '@amsterdam/asc-assets'
import { CompactThemeProvider, Row } from '@amsterdam/asc-ui'

import PageHeader from 'components/PageHeader'
import configuration from 'shared/services/configuration/configuration'
import {
  USERS_URL,
  ROLES_URL,
  DEPARTMENTS_URL,
  SUBCATEGORIES_URL,
  EXPORT_URL,
  MAIN_CATEGORIES_URL,
} from 'signals/settings/routes'

import {
  StyledVersionNumbers,
  StyledNavLink,
  StyledTopTaskLink,
  Item,
  Wrapper,
} from './styled'
import useFetch from '../../../../../hooks/useFetch'

type Keys =
  | 'departments'
  | 'groups'
  | 'settings'
  | 'users'
  | 'categories'
  | 'export'

interface Props {
  showItems: Record<Keys, boolean | undefined>
}

const Overview: FunctionComponent<Props> = ({ showItems }) => {
  const { data, get } = useFetch<{ version: string }>()

  useEffect(() => {
    get(`${configuration.apiBaseUrl}/signals/`)
  }, [get])

  if (!showItems.settings) {
    return null
  }

  return (
    <CompactThemeProvider>
      <Row>
        <PageHeader title="Settings">
          <StyledVersionNumbers>
            {`
            Versionnumber frontend: 2.26.4
            Versionnumber backend: ${data?.version}
          `}
          </StyledVersionNumbers>
        </PageHeader>
      </Row>
      <Row>
        <Wrapper>
          {showItems.users && (
            <Item data-testid="users">
              <StyledNavLink to={USERS_URL}>
                <StyledTopTaskLink
                  forwardedAs="div"
                  icon={PersonalLogin}
                  title="Users"
                />
              </StyledNavLink>
              <p>
                To gain access to the Signals application, it is necessary to
                add an employee, where the email address is the same as the
                login account. The password cannot be changed in this settings
                screen. Each user must be assigned a role and a department, this
                combination ensures the correct rights. It is not possible to
                give an employee rights in this settings screen to create or
                change users, this so-called super role can only be created in
                Django by the functional manager.
              </p>
            </Item>
          )}
          {showItems.groups && (
            <Item data-testid="groups">
              <StyledNavLink to={ROLES_URL}>
                <StyledTopTaskLink
                  forwardedAs="div"
                  icon={Student}
                  title="Roles"
                />
              </StyledNavLink>
              <p>
                The Signals application has several roles. In the settings
                screen it is possible to adjust the rights per role. This
                includes only reading rights, changing statuses, adding a note
                or being able to use the THOR button. Changes in a role are
                applied to all users with this role.
              </p>
            </Item>
          )}
          {showItems.departments && (
            <Item data-testid="departments">
              <StyledNavLink to={DEPARTMENTS_URL}>
                <StyledTopTaskLink
                  forwardedAs="div"
                  icon={Buildings}
                  title="Departments"
                />
              </StyledNavLink>
              <p>
                The Signals application uses departments. Per department it is
                possible to set which subcategories may be viewed. By granting
                access to a department to a subcategory, all employees assigned
                to this department can see all reports in this subcategory. In
                addition, it is possible to make a department responsible for a
                specific subcategory. If a department is responsible for a
                specific subcategory, this is visible on the detail page; the
                relevant department is then shown in brackets next to the
                subcategory. The role of responsibility is also used in the
                monthly reports. Assigning this responsibility automatically
                results in access being granted to this subcategory.
              </p>
            </Item>
          )}
          {showItems.categories && (
            <Item data-testid="categories">
              <StyledNavLink to={SUBCATEGORIES_URL}>
                <StyledTopTaskLink
                  forwardedAs="div"
                  icon={ThumbnailResults}
                  title="Sub categories"
                />
              </StyledNavLink>
              <p>
                Each report in the Signals application is assigned to a
                subcategory by a machine learning tool when it is created. Each
                subcategory has a description, which is only used for internal
                use. The service promise that belongs to the subcategory that is
                assigned by the machine learning tool, is used for feedback to
                the reporter. Once a report is in the application, it is
                possible to adjust the subcategory. The processing period in
                week or working days is not fed back to the reporter, who is
                intended to internally manage the processing of reports. In this
                settings page it is possible to adjust the data per subcategory.
              </p>
            </Item>
          )}
          {configuration.featureFlags.showMainCategories &&
            showItems.categories && (
              <Item data-testid="main-categories">
                <StyledNavLink to={MAIN_CATEGORIES_URL}>
                  <StyledTopTaskLink
                    forwardedAs="div"
                    icon={ThumbnailResults}
                    title="Main categories"
                  />
                </StyledNavLink>
                <p>
                  A report in Signals is automatically assigned to a main
                  category by the machine learning tool. In this settings page,
                  it is possible to adjust the display on the public maps per
                  main category. The visibility of the main category on the map
                  can be set. The public name and icon can be changed. For the
                  report card, it can be indicated whether the subcategories of
                  the main category should be visible in the filter menu.
                </p>
              </Item>
            )}
          {configuration.featureFlags.enableCsvExport && showItems.export && (
            <Item data-testid="export">
              <StyledNavLink to={EXPORT_URL}>
                <StyledTopTaskLink
                  forwardedAs="div"
                  icon={Download}
                  title="CSV Export"
                />
              </StyledNavLink>
              <p>To download all reports in CSV format.</p>
            </Item>
          )}
        </Wrapper>
      </Row>
    </CompactThemeProvider>
  )
}

export default Overview
