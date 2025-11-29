import "../styles/Step4.css";

function Step4({ formData, goToStart }) {
  return (
    <div className="step4-container fade-in">
      <h2 className="step4-title">🎉 Success!</h2>
      <p className="step4-subtitle">Your form has been submitted successfully.</p>

      <div className="step4-summary">
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>Postcode:</strong> {formData.postcode}</p>
      </div>

      <button className="restart-btn" onClick={goToStart}>
        Back to Start
      </button>
    </div>
  );
}

export default Step4;
