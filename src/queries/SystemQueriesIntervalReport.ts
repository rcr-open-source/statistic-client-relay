import { graphql } from "react-relay";
import * as SystemQueriesIntervalReportQueryTypes from "./__generated__/SystemQueriesIntervalReportQuery.graphql";
import { useLazyLoadQuery, } from "react-relay/hooks";

const query = graphql`
query SystemQueriesIntervalReportQuery($systemId: String!) {
    system(id: $systemId) {
      id
      name
      ...QueriesIntervalReportFragment
    }
  }
  
`;

export const useSystemQueriesIntervalReport = (
  options: Parameters<typeof useLazyLoadQuery>[2],
  variables: SystemQueriesIntervalReportQueryTypes.SystemQueriesIntervalReportQueryVariables,
): SystemQueriesIntervalReportQueryTypes.SystemQueriesIntervalReportQueryResponse => {
  const queryData = useLazyLoadQuery<SystemQueriesIntervalReportQueryTypes.SystemQueriesIntervalReportQuery>(
    query,
    variables,
    options
  );
  return queryData;
}

export * as SystemQueriesIntervalReportQueryTypes from "./__generated__/SystemQueriesIntervalReportQuery.graphql";
