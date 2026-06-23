const binId = import.meta.env.JSONBIN_BIN_ID;
const apiKey = import.meta.env.JSONBIN_API_KEY;

export async function GetPostData() {
    console.log("Fetching data from JSONBin with binId:", binId, apiKey);
    const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': apiKey.replace(/\\\$/g, '$')
        }
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(`Error fetching data from JSONBin: ${data.message || response.statusText}`);
    }
    console.log("Data fetched from JSONBin:", data);
    return data.record;
}
