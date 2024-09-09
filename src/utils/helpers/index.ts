export const getStatusClass = (status: string) => {
  switch (status) {
    case "review":
      return {
        style:
          "text-[#FFB836] border-[#FFB836] w-[105px] border-[1px] flex items-center justify-center",
        text: "In Review",
      };
    case "interview":
      return {
        style:
          "border-[#56CDAD] text-[#56CDAD] w-[86px] border-[1px] flex items-center justify-center",
        text: "Interview",
      };
    case "offered":
      return {
        style:
          "border-[#0046BF] text-[#0046BF] w-[76px] border-[1px] flex items-center justify-center",
        text: "Offered",
      };
    case "assessment":
      return {
        style:
          "border-[#26A4FF] text-[#26A4FF] w-[107px]  border-[1px] flex items-center justify-center",
        text: "Assessment",
      };
    case "unsuitable":
      return {
        style:
          "border-[#FF6550] text-[#FF6550] w-[96px] border-[1px] flex items-center justify-center",
        text: "Unsuitable",
      };
  }
};
