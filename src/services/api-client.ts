import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "9efa23a65bba4fb5aa303dca35efdebb"
    }
})