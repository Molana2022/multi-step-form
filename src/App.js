import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import ProgressBar from "./components/ProgressBar";

import './styles/App.css';
import "./styles/animations.css";


function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    postcode: "",
  });
  const [currentStep, setCurrentStep] = useState(1);

  // Go to next step with validation
  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.name.trim() || !formData.email.trim()) {
        alert("Please fill out all fields in Step 1.");
        return;
      }

      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        alert("Please enter a valid email address.");
        return;
      }
    }

    if (currentStep === 2) {
      if (!formData.city.trim() || !formData.postcode.trim()) {
        alert("Please fill out all fields in Step 2.");
        return;
      }
      if (!/^[A-Za-z]/.test(formData.city)) {
        alert("City must start with a letter (A–Z)");
        return;
      }
    }

    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  // Go one step back
  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  // Restart form WITHOUT clearing data 
  const goToStart = () => {
    setCurrentStep(1);
  };

  // Render the current step
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    city: false,
    postcode: false,
  });

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <div className="fade-in"><Step1 formData={formData} setFormData={setFormData} touched={touched} setTouched={setTouched} /></div>;
      case 2:
        return <div className="fade-in"><Step2 formData={formData} setFormData={setFormData} touched={touched} setTouched={setTouched} /></div>;
      case 3:
        return <div className="fade-in"><Step3 formData={formData} /></div>;
      case 4:
        return (
          <div className="fade-in"><Step4 formData={formData} goToStart={goToStart} /></div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      {/* Progress bar only visible for steps 1-3 */}
      {currentStep <= 3 && (<ProgressBar currentStep={currentStep} />)}

      {renderStep()}

      {/* Buttons (hidden on Step4) */}
      {currentStep <= 3 && (
        <div className="button-group">
          {currentStep > 1 && (
            <button aria-label="Go to previous step" onClick={prevStep} className={currentStep === 3 ? "back-blue" : ""}>
              Back
            </button>
          )}
          {currentStep < 3 && (
            <button 
              onClick={nextStep}
              aria-label="Go to next step"
              className={currentStep === 1 ? "back-blue" : ""}
              disabled={
                (currentStep === 1 && (!formData.name.trim() || !formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))) ||
                (currentStep === 2 && (!formData.city.trim() || !formData.postcode.trim()))
              }
            >
              Next
            </button>
          )}

          {/* Step3 -> Go to Success Page */}
            {currentStep === 3 && (
              <button 
                onClick={nextStep}
                className="submit-btn"
                aria-label="Submit form"
              >
                Submit
              </button>
            )}
        </div>
      )}
    </div>
  );
}

export default App;
