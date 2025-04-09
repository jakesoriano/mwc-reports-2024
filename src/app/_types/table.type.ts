export type Column = {
  key: string;
  label: string;
  align?: string;
};

export type DataRow = {
  [key: string]: string;
};

export type DataTableProps = {
  columns: Column[];
  data: DataRow[];
  headClass?: string;
  color?: 'primary' | 'secondary';
};
