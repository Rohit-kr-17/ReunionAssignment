import axios from "axios";
const client = axios.create({
	baseURL: "https://reunionbackend-2l7m.onrender.com",
});
export default client;
