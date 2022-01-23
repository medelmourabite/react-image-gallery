import axios from "axios";
const clientId = "0d54d7bf8f81c9ee80a75d9e1263fbb6b8267fad9d908e597b9f7c4f6bcdee23";

export const fetchPhotos = async (query = "", page = 1, filter = null, sort = null) => {
    const apiUrl = `https://api.unsplash.com/${query ? "search/" : ""}photos`;

    try {
        let params = {
            client_id: clientId,
            content_filter: "high",
            per_page: 18,
            page,
            query,
        };

        const result = await axios.get(apiUrl, { params });
        if (result.status === 200) {
            if (!query) {
                return result.data;
            } else {
                return result.data.results;
            }
        }
    } catch (error) {
        console.error(error);
    }
    return [];
};
