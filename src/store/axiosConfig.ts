import axios from "axios";

export const $host = axios.create({
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token 516a9657553851400cc8cab67a8b023803866e84"
    }
})
