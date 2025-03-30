export type Column = {
  key: string;
  label: string;
};

export type DataRow = {
  [key: string]: string;
};

export type DataTableProps = {
  columns: Column[];
  data: DataRow[];
  headClass?: string;
};
