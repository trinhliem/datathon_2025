import Header from "../components/Header";
import RiskForm from "../components/RiskForm";

const HomePage = () => (
    <div>
        <Header title="Predict your patient’s risk of heart disease with AI." />
        <div className="p-6">
            <h2 className="text-xl mb-4 font-semibold">Get started</h2>
            <RiskForm />
        </div>
    </div>
);
export default HomePage;
