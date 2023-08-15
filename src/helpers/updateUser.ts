import axios from "axios";

const updateUser = async (user: any) => {
    try {
        const data = await axios.post("/api/updateUserData", user);
        console.log(data);
    } catch (error: any) {
        console.log(error.message)
    }
}

export default updateUser;