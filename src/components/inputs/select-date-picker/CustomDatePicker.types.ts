type dateValueProps = {
  day: string;
  month: string;
  year: string;
};

export type customDateTypes = {
  onChange: (_e: any) => void;
  dateValue: dateValueProps;
  overrideStyles?: string;
  name: string;
};
