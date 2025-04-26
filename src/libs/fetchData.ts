import { FetchParam } from "@ttypes/FetchParam";
import { Response } from "@rsrc/types/Response";
import { getApiData } from "@rsrc/data/apiData";

const { api } = getApiData();

export const fetchData = async (params: FetchParam): Promise<Response> => {
    const { url, method, data, headers } = params;

    const options: RequestInit = {
        method,
        headers,
        body: JSON.stringify(data),
    };

    try {
        const response = await fetch(api + url, options);
        const jsonData: Response = await response.json();
        return jsonData;
    } catch (error) {
        throw new Error(`Fetch error: ${error}`);
    }
};
