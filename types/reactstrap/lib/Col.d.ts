export type ColumnProps
  = string
  | boolean
  | number
  | {
    size?: boolean | number | string
    push?: string | number
    pull?: string | number
    offset?: string | number
    order?: string | number
  };

export interface ColProps extends React.HTMLProps<HTMLDivElement> {
  tag?: React.ReactType;
  xs?: ColumnProps;
  sm?: ColumnProps;
  md?: ColumnProps;
  lg?: ColumnProps;
  xl?: ColumnProps;

  //custom widths
  widths?: string[];
}

declare const Col: React.StatelessComponent<ColProps>;
export default Col;
