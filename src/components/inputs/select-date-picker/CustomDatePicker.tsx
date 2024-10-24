"use client";
import { daysData, handleReturnYear, monthData } from "@/utils/helpers/date";
import SelectInput from "../select-input/SelectInput";
import { customDateTypes } from "./CustomDatePicker.types";

const CustomDatePicker = ({
  name,
  onChange,
  dateValue,
  overrideStyles,
}: customDateTypes) => {
  const yearsData = handleReturnYear();

  return (
    <section className="mb-4 w-full">
      <label
        htmlFor={name}
        className="text-sm md:text-base capitalize text-[rgba(27,27,27,1)]"
      >
        date <span className="lowercase">of</span> birth
      </label>
      <div className={` grid sm:grid-cols-3 sm:gap-8 gap-6 ${overrideStyles}`}>
        <SelectInput
          overrideStyles="border-[#D6DDEB] border-2"
          onChange={onChange}
          label=""
          name="day"
          placeholder="Day"
          value={dateValue.day}
          optionsData={
            <>
              {daysData.map((day, i) => (
                <option value={day} key={i}>
                  {day}
                </option>
              ))}
            </>
          }
        />
        <SelectInput
          overrideStyles="border-[#D6DDEB] border-2"
          onChange={onChange}
          label=""
          name="month"
          placeholder="Month"
          value={dateValue.month}
          optionsData={
            <>
              {monthData.map((month, i) => (
                <option key={i} value={month.abbr}>
                  {month.name}
                </option>
              ))}
            </>
          }
        />
        <SelectInput
          overrideStyles="border-[#D6DDEB] border-2"
          onChange={onChange}
          label=""
          name="year"
          placeholder="Year"
          value={dateValue.year}
          optionsData={
            <>
              {yearsData.map((year, i) => {
                return (
                  <option value={year} key={i}>
                    {year}
                  </option>
                );
              })}
            </>
          }
        />
      </div>
    </section>
  );
};

export default CustomDatePicker;
