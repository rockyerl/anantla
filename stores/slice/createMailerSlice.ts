import { produce } from "immer";
import {
  clientGet,
  clientPost,
} from "@/utils/interceptors";
import { StateCreator } from "zustand";
import { AxiosResponse } from "axios";

export type MailerData = {
  // Define the structure of an email
};

export type SubscriberData = {
  // Define the structure of a subscriber
};

export type MailerState = {
  loading: boolean;
  emails: MailerData[];
  subscribers: SubscriberData[];
  error: string | null;
};

export type MailerAction = {
  sendEmails: (payload: unknown) => Promise<AxiosResponse>;
  getSubscribers: () => Promise<void>;
};

export type MailerSlice = MailerState & MailerAction;

export const initialState: MailerState = {
  loading: false,
  emails: [],
  subscribers: [],
  error: null,
};

const createMailerSlice: StateCreator<MailerSlice> = (set) => ({
  ...initialState,
  sendEmails: async (payload: unknown) => {
    return new Promise(async (resolve, reject) => {
      set(
        produce((state: MailerState) => {
          state.loading = true;
          state.error = null;
        })
      );
      try {
        const res = await clientPost(`/send_emails`, payload);
        if (res) {
          set(
            produce((state: MailerState) => {
              state.loading = false;
              state.emails.push(res.data);
            })
          );
        }
        resolve(res);
      } catch (err: any) {
        set(
          produce((state: MailerState) => {
            state.loading = false;
            state.error = err?.response?.data || "An error occurred";
          })
        );
        reject(err);
      }
    });
  },
  getSubscribers: async () => {
    set(
      produce((state: MailerState) => {
        state.loading = true;
        state.error = null;
      })
    );
    try {
      const res = await clientGet(`/subscribers`);
      if (res) {
        set(
          produce((state: MailerState) => {
            state.loading = false;
            state.subscribers = res.data;
          })
        );
      }
    } catch (err: any) {
      set(
        produce((state: MailerState) => {
          state.loading = false;
          state.error = err?.response?.data || "An error occurred";
        })
      );
    }
  },
});

export default createMailerSlice;
