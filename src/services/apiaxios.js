import axios from "axios";

const baseUrl = "https://reafourb-pairone-apps.herokuapp.com/";

const apiaxios = axios.create({
  baseURL: baseUrl,
});


export default apiaxios;