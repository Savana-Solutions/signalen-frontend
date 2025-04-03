import type { FunctionComponent } from 'react'
import { useEffect } from 'react'

import { themeSpacing, Column } from '@amsterdam/asc-ui'
import styled from 'styled-components'

import LoadingIndicator from 'components/LoadingIndicator'
import Notification from 'components/Notification'
import useGetReportOpen from 'hooks/api/useGetReportOpen'
import useGetReportReopenRequested from 'hooks/api/useGetReportReopenRequested'
import type { Report } from 'types/api/report'

import BarGraph from './components/BarGraph'
import { Color as GraphColor } from './components/BarGraph/BarGraph'
import GraphDescription from './components/GraphDescription'
import GraphEmpty from './components/GraphEmpty'

const StyledColumn = styled(Column)`
  height: 100%;
  border-bottom: 2px solid;
  padding-top: ${themeSpacing(6)};
  padding-bottom: ${themeSpacing(8)};

  @media (max-width: ${({ theme }) => theme.layouts.large.min}px) {
    margin-bottom: ${themeSpacing(8)};
  }
`

const endReopenRequestedDate = new Date()
const daysInThePast = 14
endReopenRequestedDate.setDate(endReopenRequestedDate.getDate() - daysInThePast)
const endReopenRequested = endReopenRequestedDate.toISOString()

const Signaling: FunctionComponent = () => {
  const {
    isLoading: openLoading,
    data: openData,
    error: errorOpen,
    get: getReportOpen,
  } = useGetReportOpen()

  const {
    isLoading: reopenRequestedLoading,
    data: reopenRequestedData,
    error: errorReopenRequested,
    get: getReportReopenRequested,
  } = useGetReportReopenRequested()

  useEffect(() => {
    getReportOpen()
    getReportReopenRequested({ end: endReopenRequested })
  }, [getReportOpen, getReportReopenRequested])

  const getGraphDataFromReport = (report?: Report) => {
    if (!report) return []

    return report.results.map(({ category, signal_count }) => {
      const item = {
        description: category.name,
        value: signal_count,
      }

      if (category.departments.length > 0) {
        item.description = `${category.name} (${category.departments.join(
          ', '
        )})`
      }

      return item
    })
  }

  const graphDataOpen = getGraphDataFromReport(openData)
  const totalOpen = openData ? openData.total_signal_count : null
  const graphDataReopenRequested = getGraphDataFromReport(reopenRequestedData)
  const totalReopenRequested = reopenRequestedData
    ? reopenRequestedData.total_signal_count
    : null

  if (errorOpen || errorReopenRequested) {
    return (
      <Notification
        title="Something went wrong"
        message="The data could not be retrieved"
        variant="error"
      />
    )
  }

  if (openLoading || reopenRequestedLoading) {
    return <LoadingIndicator />
  }

  return (
    <>
      <StyledColumn span={6} wrap>
        {totalOpen !== null ? (
          <GraphDescription
            title="Outside the handling period"
            description="All outstanding reports, the processing time of which is longer than 3x the processing time."
            total={totalOpen}
          />
        ) : null}

        {totalOpen === 0 ? (
          <GraphEmpty text={'Here is nothing more to report'} />
        ) : (
          <BarGraph
            maxValue={1000}
            data={graphDataOpen}
            color={GraphColor.Red}
          />
        )}
      </StyledColumn>
      <StyledColumn span={6} wrap>
        {totalReopenRequested !== null && (
          <GraphDescription
            title="Request to reopen"
            description={`Reports where the reporter made a "request to reopen" more than 2 weeks ago.`}
            total={totalReopenRequested}
          />
        )}

        {totalReopenRequested === 0 ? (
          <GraphEmpty text={'Here is nothing more to report'} />
        ) : (
          <BarGraph
            maxValue={1000}
            data={graphDataReopenRequested}
            color={GraphColor.Blue}
          />
        )}
      </StyledColumn>
    </>
  )
}

export default Signaling
