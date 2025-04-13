const InputField = ({ label, ...props }) => (
    <div className="mb-4">
        <label className="block text-gray-700">{label}</label>
        <input
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            {...props}
        />
    </div>
);
export default InputField;