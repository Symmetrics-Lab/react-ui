import { ColumnDef } from '@tanstack/react-table';
import React, { Dispatch, SetStateAction } from 'react';
export interface Options {
  sorting?: boolean;
  filtering?: boolean;
  footer?: boolean;
  hiddenColumns?: Array<string>;
  skipPageReset?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getSelection?: Dispatch<SetStateAction<any>>;
  /////
  actionsCellStyle?: React.CSSProperties;
  detailPanelColumnStyle?: React.CSSProperties;
  editCellStyle?: React.CSSProperties;
  actionsColumnIndex?: number;
  addRowPosition?: 'first' | 'last';
  columnsButton?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultExpanded?: boolean | ((rowData: any) => boolean);
  debounceInterval?: number;
  detailPanelType?: 'single' | 'multiple';
  doubleHorizontalScroll?: boolean;
  draggable?: boolean;
  emptyRowsWhenPaging?: boolean;
  exportAllData?: boolean;
  exportButton?: boolean;
  exportDelimiter?: string;
  exportFileName?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  exportCsv?: (columns: any[], renderData: any[]) => void;
  filterCellStyle?: React.CSSProperties;
  filterRowStyle?: React.CSSProperties;
  fixedColumns?: { left?: number; right?: number };
  groupRowSeparator?: string;
  header?: boolean;
  headerStyle?: React.CSSProperties;
  hideFilterIcons?: boolean;
  initialPage?: number;
  loadingType?: 'overlay' | 'linear';
  maxBodyHeight?: number | string;
  minBodyHeight?: number | string;
  padding?: 'default' | 'dense';
  paging?: boolean;
  grouping?: boolean;
  overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'initial' | 'inherit';
  pageSize?: number;
  pageSizeOptions?: number[];
  paginationType?: 'normal' | 'stepped';
  rowStyle?:
    | React.CSSProperties
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | ((data: any, index: number, level: number) => React.CSSProperties);
  showEmptyDataSourceMessage?: boolean;
  showFirstLastPageButtons?: boolean;
  showSelectAllCheckbox?: boolean;
  showTitle?: boolean;
  showTextRowsSelected?: boolean;
  search?: boolean;
  searchText?: string;
  searchFieldAlignment?: 'left' | 'right';
  searchFieldStyle?: React.CSSProperties;
  searchFieldVariant?: 'standard' | 'filled' | 'outlined';
  searchAutoFocus?: boolean;
  selection?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectionProps?: any | ((data: any) => any);

  tableLayout?: 'auto' | 'fixed';
  thirdSortClick?: boolean;
  toolbar?: boolean;
  toolbarButtonAlignment?: 'left' | 'right';
  detailPanelColumnAlignment?: 'left' | 'right';
  cspNonce?: string;
}

export interface Localization {
  body?: {
    dateTimePickerLocalization?: object; // The date-fns locale object applied to the datepickers
    emptyDataSourceMessage?: React.ReactNode;
    filterRow?: {
      filterTooltip?: React.ReactNode;
    };
    editRow?: {
      saveTooltip?: React.ReactNode;
      cancelTooltip?: React.ReactNode;
      deleteText?: React.ReactNode;
    };
    addTooltip?: React.ReactNode;
    deleteTooltip?: React.ReactNode;
    editTooltip?: React.ReactNode;
  };
  header?: {
    actions?: React.ReactNode;
  };
  grouping?: {
    groupedBy?: React.ReactNode;
    placeholder?: React.ReactNode;
  };
  pagination?: {
    firstTooltip?: React.ReactNode;
    firstAriaLabel?: string;
    previousTooltip?: React.ReactNode;
    previousAriaLabel?: string;
    nextTooltip?: React.ReactNode;
    nextAriaLabel?: string;
    labelDisplayedRows?: React.ReactNode;
    labelRowsPerPage?: string | React.ReactNode;
    lastTooltip?: React.ReactNode;
    lastAriaLabel?: string;
    labelRowsSelect?: string | React.ReactNode;
  };
  toolbar?: {
    addRemoveColumns?: React.ReactNode;
    nRowsSelected?: React.ReactNode | ((rowCount: number) => React.ReactNode);
    showColumnsTitle?: React.ReactNode;
    showColumnsAriaLabel?: string;
    exportTitle?: React.ReactNode;
    exportAriaLabel?: string;
    exportName?: React.ReactNode;
    searchTooltip?: React.ReactNode;
    searchPlaceholder?: React.ReactNode;
  };
}

export interface Action {
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: string | (() => React.ReactElement<any>);
  isFreeAction?: boolean;
  position?: 'auto' | 'toolbar' | 'toolbarOnSelect' | 'row';
  tooltip?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (event: any) => void;
  hidden?: boolean;
}

//export interface TableProps<D extends React.ElementType = 'table'> {
export interface TableProps {
  className?: string;
  hasError?: boolean;
  Padding?: 'normal' | 'checkbox' | 'none' | 'default';
  Size?: 'small' | 'medium';
  //defaultComponent: D;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  title?: string | React.ReactElement<any>;
  columns: ColumnDef<object>[];
  data: object[];
  localization?: Localization;
  options?: Options;
  actions?: Action[];
  //action

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // TableBody: React.ReactNode;
  // TableCell: React.ReactNode;
  // TableRow: React.ReactNode;
}
