// import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http://localhost:5000/api', // your express backend
// });

// export default API;

import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default API;
