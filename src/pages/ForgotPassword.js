import React, { useState } from 'react';

const ForgotPasswordForm = () => {
    // State to manage the email input
    const [email, setEmail] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your logic for handling forgot password here
        console.log('Forgot password form submitted:', email);
        // Clear the email input after submission
        setEmail('');
    };

    return (
        <div className="forgot-password-form">
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;
