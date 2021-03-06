import { graphql } from "react-relay";
import * as SystemTableLogsQueryTypes from "./__generated__/SystemTableLogsQuery.graphql";
import { useLazyLoadQuery, } from "react-relay/hooks";

const query = graphql`
  query SystemTableLogsQuery($systemId: String!) {
    system(id: $systemId) {
      id
      name
      ...TableLogsFragment
    }
  }
`;

export const useSystemTableLogs = (
  options: Parameters<typeof useLazyLoadQuery>[2],
  variables: SystemTableLogsQueryTypes.SystemTableLogsQueryVariables,
): SystemTableLogsQueryTypes.SystemTableLogsQueryResponse => {
  const queryData = useLazyLoadQuery<SystemTableLogsQueryTypes.SystemTableLogsQuery>(
    query,
    variables,
    options
  );
  return queryData;
}

export * as SystemTableLogsQueryTypes from "./__generated__/SystemTableLogsQuery.graphql";
