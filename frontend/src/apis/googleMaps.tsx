import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000',
});

/**
 * 
 */
export async function getSomething(): Promise<string> {
    const res = await instance.get("/getSomething");
    return res.data
}
