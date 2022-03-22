import axios from 'axios';

const url = 'http://localhost:8000/docs';

export const fetchArticles = () => axios.get(url);
export const getArticle = (slug) => axios.get(`${url}/${slug}`)
export const createArticle = (newArticle) => axios.post(`${url}/new`, newArticle);
export const updateArticle = (id, updatedArticle) => axios.patch(`${url}/${id}`, updatedArticle);
export const deleteArticle = (id) => axios.delete(`${url}/${id}`);
