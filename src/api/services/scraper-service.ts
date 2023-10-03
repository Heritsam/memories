import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrapeImage(keyword: string) {
  try {
    const requestUrl = `https://www.google.com/search?q=${keyword}&tbm=isch`;

    const response = await axios.get(requestUrl, {
      withCredentials: false,
      headers: {
        // 'Accept-Encoding': 'text/html; charset=UTF-8',
        'Content-Type': 'text/plain',
      },
    });
    const html = response.data;

    const $ = cheerio.load(html);

    const imgUrl = $('.rg_i.Q4LuWd').text().trim();
    console.log(`imgUrl ${imgUrl}`);
  } catch (error) {
    console.error('scrapeImage error', error);
  }
}
