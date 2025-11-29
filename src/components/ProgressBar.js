import "../styles/ProgressBar.css";

function ProgressBar({ currentStep }) {
  return (
    <div 
      className="progress-container"
      role="progressbar"
      aria-valuenow={currentStep}
      aria-valuemin="1"
      aria-valuemax="4"
    >
      {[1, 2, 3].map((step) => (
        <div
          key={step}
          className={`progress-step ${currentStep === step ? "active" : ""}`}
        >
          {step}
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
