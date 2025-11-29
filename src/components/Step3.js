import "../styles/Step3.css";

function Step3({ formData }) {

  return (
    <div className="step3-containe fade-in">
      <h2 className="step3-title">Step 3 - Summary</h2>

      {/* Summary Box */}
      <div className="summary-box">
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>Postcode:</strong> {formData.postcode}</p>
      </div>
    </div>
  );
}

export default Step3;
