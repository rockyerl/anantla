import useStoreSelf from "@/stores";
import React, { useEffect } from "react";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AlertProps {
  type: "error" | "success";
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const { clearResponse } = useStoreSelf((state) => state.response);

  useEffect(() => {
    if (type === "error") {
      toast.error(message, {
        position: "top-right",
        transition: Flip,
      });
    } else {
      toast.success(message, {
        position: "top-right",
        transition: Flip,
      });
    }
  }, [message, type]);

  useEffect(() => {
    const timer = setTimeout(() => {
      clearResponse();
    }, 4000);
    return () => clearTimeout(timer);
  }, [clearResponse]);

  return <ToastContainer  limit={2500} theme="light" hideProgressBar />;
};

export default Alert;
