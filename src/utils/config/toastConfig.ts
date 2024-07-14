import { toast } from "react-hot-toast";

type toastProps = {
  msg: string;
  type: "SUCCESS" | "ERROR";
  background?: string;
  color?: string;
};
export const showToast = ({ msg, type, background, color }: toastProps) => {
  switch (type) {
    case "SUCCESS":
      return toast.success(msg, {
        position: "top-center",
        style: {
          background: background || "#5297DB33",
          color: color || "#001956",
          border: "1px solid #0046BF",
          fontSize: "14px",
        },
      });
    case "ERROR":
      return toast.error(msg, {
        position: "top-center",
        style: {
          background: background || "#FAE8EA",
          color: color || "#CF142B",
          border: "1px solid #993844",
          borderRadius: "16px",
        },
      });
    default:
      return;
  }
};
