import axios from "axios";

const response = await fetch('https://localhost:44390/api/BookControler');
const data = await response.json();