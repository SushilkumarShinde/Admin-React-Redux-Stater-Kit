import { API_REQUEST } from "../constants";
export const apiRequest = (method, url, body, onSuccess, onError) => {
	return {
		type: API_REQUEST,
		payload: body,
		meta: { method, url, onSuccess, onError },
	};
};
