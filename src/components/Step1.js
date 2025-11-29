import { useEffect, useRef } from "react";

function Step1({ formData, setFormData, touched, setTouched }) {
  const nameRef = useRef();

  // Autofocus on the first field when Step1 is loaded
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Step 1 - User Info</h2>

      {/* Name Field */}
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        ref={nameRef}
        type="text"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
        onBlur={() => setTouched({ ...touched, name: true })}
      />
      {/* Error message for Name */}
      {touched.name && !formData.name.trim() && (
        <p className="error">Name is required</p>
      )}

      {/* Email Field */}
      <label htmlFor="email" style={{ marginTop: "15px" }}>Email:</label>
      <input
        id="email"
        type="email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        onBlur={() => setTouched({ ...touched, email: true })}
      />
      {/* Error message for Email */}
      {touched.email && (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) && (
        <p className="error">Valid email is required</p>
      )}
    </div>
  );
}

export default Step1;
