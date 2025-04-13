import { useLocation } from "react-router-dom";
import Header from "../components/Header";

const ResultPage = () => {
    const { state } = useLocation();

    return (
        <div>
            <Header title={`We got your results for ${state?.name || "your patient"}.`} />
            <div className="p-6">
                <div className="bg-gray-200 p-10 text-center text-lg font-bold">
                    Data goes here
                </div>
            </div>
        </div>
    );
};

export default ResultPage;