"use server";
import { BASE_URL } from "@/utils/env";
import axios from "axios";

const satellite = axios.create({
  baseURL: BASE_URL,
  //   timeout: 5000, // in millisecond
  headers: {
    "Content-Type": "application/json",
  },
});

// Menambahkan interceptor ketika menerima response
satellite.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default satellite;
