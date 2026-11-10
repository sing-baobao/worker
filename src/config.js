// src/config.js
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

export const API_URL = isLocal 
  ? 'http://127.0.0.1:8787' 
  : 'https://beetlskillsapi.singbaobao.com';