import { useEffect, useRef } from "react";

function Step2({ formData, setFormData, touched, setTouched  }) {
  const cityRef = useRef();

  // Autofocus on the first field when Step2 is loaded
  useEffect(() => {
    cityRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Step 2 - Address Info</h2>

      {/* City Field */}
      <label htmlFor="city">City:</label>
      <input
        id="city"
        ref={cityRef}
        type="text"
        value={formData.city}
        onChange={(e) =>
          setFormData({ ...formData, city: e.target.value })
        }
        onBlur={() => setTouched({ ...touched, city: true })}
      />
      {/* Error: City required */}
      {touched.city && !formData.city.trim() && (
        <p className="error">City is required</p>
      )}
      {/* Error: City must start with a letter */}
      {touched.city && formData.city.trim() !== "" && !/^[A-Za-z]/.test(formData.city.trim()) && (
        <p className="error">City must start with a letter (A–Z)</p>
      )}

      {/* Postcode Field */}
      <label htmlFor="postcode" style={{ marginTop: "15px" }}>Postcode:</label>
      <input
        id="postcode"
        type="text"
        value={formData.postcode}
        onChange={(e) =>
          setFormData({ ...formData, postcode: e.target.value })
        }
        onBlur={() => setTouched({ ...touched, postcode: true })}
      />
      {/* Error: Postcode required */}
      {touched.postcode && !formData.postcode.trim() && (
        <p className="error">Postcode is required</p>
      )}
    </div>
  );
}

export default Step2;
