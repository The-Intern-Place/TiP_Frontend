"use client";
import { LiaAngleDownSolid } from "react-icons/lia";
import TextInput from "../text-input/TextInput";

const CustomDatePicker = () => {
  return (
    <section className="mb-4 w-full">
      <label
        htmlFor="dateOfBirth"
        className="text-sm md:text-base capitalize text-[rgba(27,27,27,1)]"
      >
        date <span className="lowercase">of</span> birth
      </label>
      <div className="mt-1 grid sm:grid-cols-3 sm:gap-8">
        {["Day", "Month", "Year"].map((item, i) => (
          <TextInput
            key={i}
            label=""
            placeholder={item}
            type="text"
            name={item}
            iconRight={
              <button
                type="button"
                aria-label="dropdown-toggle"
                className="text-[#575757] text-lg"
              >
                <LiaAngleDownSolid />
              </button>
            }
          />
        ))}
      </div>
    </section>
  );
};

export default CustomDatePicker;
