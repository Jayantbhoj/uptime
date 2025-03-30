import axios from "axios";

export async function checkWebsiteStatus(url: string) {
  try {
    const startTime = Date.now();
    await axios.get(url, { timeout: 5000 }); 
    const responseTime = Date.now() - startTime;

    return { url, status: "UP", responseTime };
  } catch (error) {
    return { url, status: "DOWN", responseTime: 0 };
  }
}
