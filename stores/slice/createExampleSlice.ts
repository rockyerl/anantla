import { produce } from "immer";
import { clientGet, clientDel, clientPost, clientPut } from "@/utils/interceptors";
import { StateCreator } from "zustand";
import { AxiosResponse } from "axios";

export type ExampleData = {
  name: string
}

export type ExampleState = {
  loading: boolean,
  page: number,
  items: ExampleData[],
  itemPerPage: number,
  itemTotals: number
}

export type ExampleAction = {
  getExample: (payload: unknown) => Promise<void>
  postExample: (payload: unknown) => Promise<AxiosResponse>
  putExample: (payload: {data: unknown, id: string}) => Promise<AxiosResponse>
  deleteExample: (id: string) => Promise<AxiosResponse>
}

export type ExampleSlice = ExampleState & ExampleAction;

export const initialState:ExampleState = {
  loading: false,
  page: 1,
  items: [],
  itemPerPage: 10,
  itemTotals: 0
}

const createExampleSlice:StateCreator<ExampleSlice> = (set) => ({
  ...initialState,
  getExample: async (payload: unknown) => {
    set(produce((state: ExampleState) => {state.loading = true}))
    try{
      const res = await clientGet(`clients/example`, {params: payload})

      if (res) {
        set(produce((state: ExampleState) => {
          state.loading = false;
          state.items = res?.data?.data;
          state.page = res?.data?.page;
          state.itemPerPage = res?.data?.itemPerPage;
          state.itemTotals = res?.data?.itemTotals;
        }))
      }
    }catch(err) {
    console.log(err)
    set(produce((state: ExampleState) => {state.loading = false}))
    }
  },
  postExample: async (payload: unknown) => {
    return new Promise(async (resolve, reject) => {
      set(produce((state: ExampleState) => {state.loading = true}))
      try {
        const res = await clientPost(`clients/example`, payload);

        if (res) {
          set(produce((state: ExampleState) => {state.loading = false}));
        }
        resolve(res);
      }catch(err) {
        set(produce((state: ExampleState) => {state.loading = false}));
        reject(err);
      }
    })
  },
  putExample: async (payload: {data: unknown, id: string}) => {
    return new Promise(async (resolve, reject) => {
      set(produce((state: ExampleState) => {state.loading = true}))
      try {
        const res = await clientPut(`clients/example/${payload.id}`, payload.data);

        if (res) {
          set(produce((state:ExampleState) => {state.loading = false}));
        }
        resolve(res)
      } catch(err) {
        set(produce((state: ExampleState) => {state.loading = false}));
        reject(err)
      }
    })
  },
  deleteExample: async (id: string) => {
    return new Promise(async (resolve, reject) => {
      set(produce((state: ExampleState) => {state.loading = true}))
      try {
        const res = await clientDel(`clients/example/${id}`);

        if (res) {
          set(produce((state: ExampleState) => {state.loading = false}))
        }
        resolve(res)
      } catch (err) {
        set(produce((state: ExampleState) => {state.loading = false}))
        reject(err)
      }
    })
  }
})

export default createExampleSlice

