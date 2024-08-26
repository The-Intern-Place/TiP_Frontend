import { DropDownControllerProps } from "./DropDownController.types";
import useDropDownController from "./useDropDownController";

export default function DropDownController(props: DropDownControllerProps) {
  const h = useDropDownController(props);

  return (
    <div ref={h.dropDownRef as never} className="relative w-full h-full">
      <button
        onClick={h.toggleOptionsOpen}
        type="button"
        className="w-full h-full"
        style={{ textAlign: "unset" }}
      >
        {props.children}
      </button>

      {h.isOptionsOpen && (
        <ul
          className="absolute bg-white border border-white border-opacity-5 rounded-[14px] z-20 drop-shadow-[0_4px_10px_#00000033] max-w-[280px] w-full max-h-[280px] overflow-auto"
          style={{
            top: props.top ?? undefined,
            bottom: props.bottom ?? undefined,
            right: props.right ?? undefined,
            left: props.left ?? undefined,
            minWidth: props.width ?? 180,
          }}
        >
          {(!props.options || props.options.length === 0) && (
            <li className="text-white text-xs text-center py-3 px-5">
              No options at this moment.
            </li>
          )}

          {props.options?.map((option) => (
            <li
              key={option.id}
              className="py-3 font-epilogue px-3 hover:bg-opacity-5 bg-white bg-opacity-0 text-xs font-semibold flex items-center gap-2.5 cursor-pointer border-[#515B6F33] border-opacity-5 border-b last:border-none"
              onClick={() => !option.readonly && h.handleOptionClick(option)}
            >
              {option.component ? (
                <option.component />
              ) : (
                <>
                  {option.icon}
                  <div>
                    {option.description ? (
                      <p className="text-[20px] font-600 text-grey">
                        {option.name}
                      </p>
                    ) : (
                      <span>{option.name}</span>
                    )}
                    {option.description && (
                      <span className="block mt-1 font-sm text-grey text-opacity-40">
                        {option.description}
                      </span>
                    )}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
