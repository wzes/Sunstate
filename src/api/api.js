import axios from 'axios'

let base = 'http://192.168.1.100:8060'
export const submitTask = (params) => { return axios.post(`${base}/task/build?token=tspider`, params).then(res => res.data) }

export const queryTask = (id) => { return axios.get(`${base}/task/detail/` + id + `?token=tspider`).then(res => res.data) }

export const downloadTask = (id) => { return axios.get(`${base}/task/result/` + id + `?token=tspider`).then(res => res.data) }

export const getContractList = (data) => { return axios.post(`${base}/api/services/app/contract/GetAll`, data, {headers: {'Content-Type': 'application/json'}}).then(res => res.data) }
