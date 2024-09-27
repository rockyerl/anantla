import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { lens, withLenses } from "@dhmk/zustand-lens";
import createExampleSlice, { ExampleSlice } from "./slice/createExampleSlice";
import createResponseSlice, { ResponseSlice } from "./slice/createResponseSlice";
import createMailerSlice, { MailerSlice } from "./slice/createMailerSlice";

export type StoreState = {
  example: ExampleSlice; // Assuming `Example.Slice` is the type for your example slice
  response: ResponseSlice;
  mailer: MailerSlice;
};

export type UseStoreSelf = ReturnType<typeof useStoreSelf>;

const useStoreSelf = create<StoreState>()(
  devtools(
    immer(
      withLenses<StoreState>({
        example: lens(createExampleSlice),
        response: lens(createResponseSlice),
        mailer: lens(createMailerSlice),
      })
    )
  )
);

export default useStoreSelf;
