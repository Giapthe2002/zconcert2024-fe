import { ApiData } from "@rsrc/types/ApiData";

const DEVELOPMENT = false;

export const getApiData = (): ApiData => {
    const development = DEVELOPMENT;
    const api = development ? "http://localhost:3000/" : "https://ceras.id.vn/";

    return {
        development,
        api,
    };
};
