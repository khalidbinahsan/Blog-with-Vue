const baseUrl = 'https://jsonplaceholder.typicode.com'
const fn = {
    async fetchPublicApi(endPoint = "", params = "", requestType = "GET") {
        let request = {
            method: requestType.toUpperCase(),
            headers: {
                "Access-Control-Allow-Origin": "*",
                Accept: "application/vnd.api+json",
                "Content-Type": "application/vnd.api+json",
            },
        }
        if (requestType.toUpperCase() == "POST" || "PUT" == requestType.toUpperCase()) {
            request.body = JSON.stringify(params);
        }
        const response = await fetch(baseUrl + endPoint, request);
        const data = await response.json();
        return data;
    },
}
export default fn