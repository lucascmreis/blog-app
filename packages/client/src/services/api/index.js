import axios from 'axios';

const url = 'http://localhost:8000/articles';

export const fetchArticles = () => axios.get(url);
export const createArticle = (newArticle) => axios.post(url, newArticle);
export const updateArticle = (id, updatedArticle) => axios.patch(`${url}/${id}`, updatedArticle);
export const deleteArticle = (id) => axios.delete(`${url}/${id}`);
