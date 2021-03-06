import { graphql } from "react-relay";
import * as SystemDynamicTableLogsQueryTypes from "./__generated__/SystemDynamicTableLogsQuery.graphql";
import { useLazyLoadQuery, } from "react-relay/hooks";

const query = graphql`
  query SystemDynamicTableLogsQuery($systemId: String!) {
    system(id: $systemId) {
      id
      name
      ...DynamicTableLogsFragment
    }
  }
`;

export const useSystemDynamicTableLogs = (
  options: Parameters<typeof useLazyLoadQuery>[2],
  variables: SystemDynamicTableLogsQueryTypes.SystemDynamicTableLogsQueryVariables,
): SystemDynamicTableLogsQueryTypes.SystemDynamicTableLogsQueryResponse => {
  const queryData = useLazyLoadQuery<SystemDynamicTableLogsQueryTypes.SystemDynamicTableLogsQuery>(
    query,
    variables,
    options
  );
  return queryData;
}

export * as SystemDynamicTableLogsQueryTypes from "./__generated__/SystemDynamicTableLogsQuery.graphql";
