export const getStatusClass = (status: string) => {
  switch (status) {
    case "review":
      return {
        style:
          "text-[#FFB836] border-[#FFB836]",
        text: "In Review",
      };
    case "interview":
      return {
        style:
          "text-[#56CDAD] border-[#56CDAD]",
        text: "Interview",
      };
    case "offered":
      return {
        style:
          "border-[#0046BF] text-[#0046BF]",
        text: "Offered",
      };
    case "assessment":
      return {
        style:
          "border-[#26A4FF] text-[#26A4FF]",
        text: "Assessment",
      };
    case "unsuitable":
      return {
        style:
          "border-[#FF6550] text-[#FF6550]",
        text: "Unsuitable",
      };
  }
};
