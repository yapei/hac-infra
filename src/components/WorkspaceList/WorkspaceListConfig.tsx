import * as React from 'react';
import { Td } from '@patternfly/react-table';
import { Label, Button } from '@patternfly/react-core';

export type WorkspaceRowData = {
  name: string;
  labels: string[];
  uid: string;
};

type RowProps<T> = {
  obj: T;
};

export const wsRowActions = [
  {'title': 'action one'},
  {'title': 'action two'}
]
// Component defining the design for each row in the list
export const WorkspaceRow: React.FC<RowProps<WorkspaceRowData>> = ({ obj }) => {
  return (
    <>
      <Td dataLabel="name">
        {/* TODO: This button should link to the Workspace Details UI */}
        <Button variant="link" isInline>
          {obj.name}
        </Button>
      </Td>
      <Td dataLabel="labels">
        {obj.labels.map((label) => (
          <Label className="pf-u-mr-sm" color="blue" key={label}>
            {label}
          </Label>
        ))}
      </Td>
      <Td dataLabel='uid'>
          <Label>
            {obj.uid}
          </Label>
      </Td>
    </>
  );
};

// Properties and style for column headers
export const workspaceColumns = [
  {
    title: 'Name',
    id: 'name',
    props: {
      className: '',
    },
  },
  {
    title: 'Labels',
    id: 'labels',
    props: {
      className: '',
    },
  },
  {
    title: 'UID',
    id: 'uid',
    props: {
      className: 'testclass-uid',
    },
  }
];

// Workspace list filters (defines the Search input at the top of the list)
export const workspaceFilters = [
  {
    id: 'name',
    label: '',
  },
];

export const defaultErrorText = 'An error occured while retrieving the workspaces';
