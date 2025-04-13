import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

const RiskForm = () => {
    const [formData, setFormData] = useState({ name: "", age: "", sex: "", p1: "", p2: "", p3: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/results", { state: formData });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
            <div className="flex gap-2">
                <InputField label="Patient name" name="name" onChange={handleChange} />
                <InputField label="Age" name="age" onChange={handleChange} />
                <InputField label="Sex" name="sex" onChange={handleChange} />
            </div>
            <InputField label="Placeholder 1" name="p1" onChange={handleChange} />
            <InputField label="Placeholder 2" name="p2" onChange={handleChange} />
            <InputField label="Placeholder 3" name="p3" onChange={handleChange} />
            <button className="bg-red-600 text-white px-4 py-2 rounded" type="submit">
                Predict your risk
            </button>
        </form>
    );
};

export default RiskForm;
