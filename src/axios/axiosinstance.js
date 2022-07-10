import axios from "axios";

export const fincoLogin = axios.create({
  baseURL: "http://finco360.com/",
  headers: {
    "content-type": "application/json",
    UserAgent: "WebAgent",
    "X-TenantID": "finco3",
  },
});

export const fincoDefault = axios.create({
  baseURL: "http://finco360.com/",
  headers: {
    "content-type": "application/json",
    UserAgent: "WebAgent",
    "X-TenantID": "finco3",
  },
});

export const fincoMemberEndpoints = [
  "finco/api/auth/member/status/list",
  "finco/api/auth/member/category/list",
];
