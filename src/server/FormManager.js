import Axios from "axios";

const url = 'http://localhost:4000/insurance'

export const getFormData = async () => {

    try {
        const result = await Axios.get(url)
        return result.data

    } catch (error) {

        if (error.response && error.response.status) {
            if (error.response.data.message) {
                alert(error.response.data.message)
            }
        }
        return null
    }
}


export const submitForm = async (data) => {

    try {
        const result = await Axios.post(url, { data })
        return result.data

    } catch (error) {
        if (error.response && error.response.status) {
            if (error.response.data.message) {
                alert(error.response.data.message)
            }
        }
        return null
    }
}


