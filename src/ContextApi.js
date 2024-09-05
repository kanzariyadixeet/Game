import axios from "axios";
import { createContext, useState } from "react";

// Create a Context
const Context = createContext();

const ContextApi = ({ children }) => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [count, setcount] = useState(1)
    const [Correct, setCorrect] = useState(0)
    const [wrong, setwrong] = useState(0)
    const [Countdown, setCountdown] = useState(false)

    const [Skip, setSkip] = useState(0)

    const api = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`https://opentdb.com/api.php?amount=1`);
            setData(response.data);
        } catch (err) {
            setError(err);
            console.error("Error fetching data", err);
        } finally {
            setLoading(false);
        }
    }





    return (
        <Context.Provider value={{ api, data, loading, error, setcount, count, Correct, setCorrect, wrong, setwrong, Countdown, setCountdown, Skip, setSkip }}>
            {children}
        </Context.Provider>
    );
};

export default ContextApi;
export { Context };
