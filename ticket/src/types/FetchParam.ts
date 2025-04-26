import { FetchMethod } from "@tenums/FetchMethod";

export type FetchParam = {
    url: string;
    method: FetchMethod;
    data?: Object;
    headers?: HeadersInit | undefined;
};
