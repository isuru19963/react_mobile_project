import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertMobile = payload => api.post(`/mobile`, payload)
export const getAllMobile = () => api.get(`/mobile`)
export const updateMobileById = (id, payload) => api.put(`/mobile/${id}`, payload)
export const deleteMobileById = id => api.delete(`/mobile/${id}`)
export const getMobileById = id => api.get(`/mobile/${id}`)
export const createMobileCart = payload => api.post(`/mobile`, payload)


const apis = {
    insertMobile,
    getAllMobile,
    updateMobileById,
    deleteMobileById,
    getMobileById,
    createMobileCart
}

export default apis