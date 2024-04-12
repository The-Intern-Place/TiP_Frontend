type dateValueProps = {
  day: string;
  month: string;
  year: string;
};

export type customDateTypes = {
  onChange: (e: any) => void;
  dateValue: dateValueProps;
};
