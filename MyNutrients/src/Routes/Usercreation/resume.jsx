import React, { useState } from 'react';
import axios from 'axios';
import './Usercreation.css';

const ResumeUpload = () => {
    const [resume, setResume] = useState(null);

    const handleFileChange = async (e) => {
        const selectedFile = e.target.files[0];
        setResume(selectedFile);
        console.log('Selected file:', selectedFile);

        if (selectedFile) {
            try {
                const formData = new FormData();
                formData.append('resume', selectedFile);  // Ensure 'resume' is used as the field name

                const response = await axios.post('http://localhost:5000/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                console.log('Response:', response.data);

                if (response.data.success) {
                    // Handle successful submission
                } else {
                    console.error('Resume upload failed:', response.data.message);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <>
            <form className="form">
                <div className="field">
                    <input type="file" id="resume" style={{ display: 'none' }} onChange={handleFileChange} />
                    <label htmlFor="resume" className="resume">Upload Resume</label>
                </div>
            </form>
        </>
    );
};

export default ResumeUpload;
