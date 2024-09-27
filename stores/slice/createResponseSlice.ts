import { produce } from "immer";
import { StateCreator } from "zustand";

export type ResponseState = {
  code: number | null;
  message: string;
}

export const initialState: ResponseState = {
  code: null,
  message: "",
};

export type ResponseAction = {
  setResponse: (code: number, message: string) => Promise<void>;
  clearResponse: () => Promise<void>;
};

export type ResponseSlice = ResponseState & ResponseAction;

const createResponseSlice: StateCreator<ResponseSlice> = (set) => ({
  ...initialState,
  setResponse: async (code: number, message: string) => {
    set(
      produce((state: ResponseState) => {
        state.code = code;
        state.message = message;
      })
    );
  },
  clearResponse: async () =>
    set(
      produce((data: ResponseState) => {
        data.code = null;
        data.message = "";
      })
    ),
});

export default createResponseSlice;
