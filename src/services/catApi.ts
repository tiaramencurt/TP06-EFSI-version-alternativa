import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1/images/search';

export interface CatPost {
  id: string;
  url: string;
  width: number;
  height: number;
}

export const fetchCatPosts = async (limit: number = 12): Promise<CatPost[]> => {
  const response = await axios.get(`${API_URL}?limit=${limit}`);
  return response.data;
};