const dev_api_url = "http://localhost:3001";
const prod_api_url = "";

export function getApiUrl() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return dev_api_url;
    } else {
        return prod_api_url;
    }
}