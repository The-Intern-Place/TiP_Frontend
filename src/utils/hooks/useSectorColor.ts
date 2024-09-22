export const useJobSectorColor = (sector: string) => {
  switch (sector?.toLowerCase()) {
    case "marketing":
      return "text-[#FFB836] border border-[#FFB836]";
    case "design":
      return "text-[#4640DE] border border-[#4640DE]";
    default:
      return "text-[#56CDAD] border border-[#56CDAD]";
  }
};

export const useCategoryColor = (category: string) => {
  switch (category?.toLowerCase()) {
    case "marketing":
      return "bg-[#EB85331A] text-[#FFB836]";
    case "design":
      return "bg-[#56CDAD1A] text-[#56CDAD]";
    default:
      return "";
  }
};
