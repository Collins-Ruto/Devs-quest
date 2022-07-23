import axios from "axios";

const url = "http://localhost:8000";

export const getForums = () => axios.get(`${url}/forums`);
export const createForum = (newForum) => axios.post(`${url}/forums`, newForum);

console.log("api" + getForums)