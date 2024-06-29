import React, { useState } from 'react';
import axios from 'axios';
import { MdOutlineClose } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';

const Usercreation = () => {
  // State for form data
  const [formData, setFormData] = useState({
    firstname: '',
    surname: '',
    city: '',
    country: '',
    pincode: '',
    phone: '',
    email: '',
  });

  // State for resume file
  const [resume, setResume] = useState(null);

  // State for basic data
  const [basicData, setBasicData] = useState({
    fullName: '',
    email: '',
  });

  // State for skills and interests
  const [hardSkills, setHardSkills] = useState([]);
  const [softSkills, setSoftSkills] = useState([]);
  const [interests, setInterests] = useState([]);

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file upload (resume)
  const handleFileChange = async (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    setResume(selectedFile);

    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append('resume', selectedFile);

        const response = await axios.post('http://localhost:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.data.success) {
          const { fullName, email, hardSkills, softSkills, interests } = response.data;
          setBasicData({ fullName, email });
          setHardSkills(hardSkills);
          setSoftSkills(softSkills);
          setInterests(interests);
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
      <div className="userprofile d-flex flex-column min-vh-100 bg-dark text-light">
        <Navbar />
        <form className="field">
          <div className="title">
            <CgProfile /> Profile Creation
          </div>
          <div className="button-connectivity">
            <div className="button resume btn-primary">
              <input
                className="btn"
                type="file"
                id="resume"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <label htmlFor="resume" className="btn btn-primary">
                Upload Resume
              </label>
            </div>
            <button className="resume btn btn-info">Connect With LinkedIn</button>
          </div>
        </form>

        <section className="accordion" id="accordionPanelsStayOpenExample">
          <form className="manual">
            {/* Basic Information */}
            <div className="accordion-item bg-transparent">
              <h2 className="accordion-header">
                <button
                  className="accordion-button bg-transparent text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Basic Information
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse basic-info-collapse collapse"
              >
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <div className="form-control bg-dark">
                    <input
                      className="input input-alt"
                      placeholder="Diya"
                      id="firstname"
                      name="firstname"
                      type="text"
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                    />
                    <span className="input-border input-border-alt"></span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="surname">Surname</label>
                  <div className="form-control">
                    <input
                      className="input input-alt"
                      placeholder="Agrawal"
                      id="surname"
                      name="surname"
                      type="text"
                      value={formData.surname}
                      onChange={handleChange}
                      required
                    />
                    <span className="input-border input-border-alt"></span>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <div className="form-control">
                    <input
                      className="input input-alt"
                      id="city"
                      placeholder="Delhi"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                    <span className="input-border input-border-alt"></span>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <div className="form-control">
                    <input
                      className="input input-alt"
                      placeholder="India"
                      id="country"
                      name="country"
                      type="text"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                    <span className="input-border input-border-alt"></span>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="pinCode">Pin Code</label>
                  <div className="form-control">
                    <input
                      className="input input-alt"
                      placeholder="110034"
                      id="pincode"
                      name="pincode"
                      type="text"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                    />
                    <span className="input-border input-border-alt"></span>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <div className="form-control">
                    <input
                      className="input input-alt"
                      placeholder="1123456789"
                      id="phone"
                      name="phone"
                      type="text"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <span className="input-border input-border-alt"></span>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="form-control">
                    <input
                      className="input input-alt"
                      placeholder="abc@gmail.com"
                      id="email"
                      name="email"
                      type="text"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <span className="input-border input-border-alt"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hard Skills */}
            <div className="accordion-item bg-transparent">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-transparent text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Hard Skills
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <div className="skill-container">
                    <div className="search">
                      <input
                        type="text"
                        name="search-skill"
                        placeholder="Search hard skill"
                        id="search-skill"
                        className="search-skill"
                      />
                    </div>
                    <div className="list">
                      {hardSkills.map((skill) => (
                        <div className="skill" key={skill}>
                          <span>{skill}</span>
                          <button className="remove-skill">
                            <MdOutlineClose />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="accordion-item bg-transparent">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-transparent text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFour"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFour"
                >
                  Soft Skills
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <div className="Interest-container">
                    <div className="search">
                      <input
                        type="text"
                        name="search-interest"
                        placeholder="Search soft skill"
                        id="search-softskill"
                        className="search-softskill"
                      />
                    </div>
                    <div className="list">
                      {softSkills.map((skill) => (
                        <div className="interest" key={skill}>
                          <span>{skill}</span>
                          <button className="remove-softskill">
                            <MdOutlineClose />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="accordion-item bg-transparent">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-transparent text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Underlying Interest
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <div className="Interest-container">
                    <div className="search">
                      <input
                        type="text"
                        name="search-interest"
                        placeholder="Search Interest"
                        id="search-interest"
                        className="search-Interest"
                      />
                    </div>
                    <div className="list">
                      {interests.map((interest) => (
                        <div className="interest" key={interest}>
                          <span>{interest}</span>
                          <button className="remove-interest">
                            <MdOutlineClose />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Fields (Qualification, Expected CTC, etc.) */}
            <div className="Qualification bg-dark">
              <span>Qualification</span>
              <input type="text" name="" id="" placeholder="Qualification" />
            </div>
            <div className="CTC bg-dark">
              <span>Expected CTC</span>
              <input type="range" name="" id="" />
            </div>

            {/* Submit Button */}
            <input type="submit" value="Review and submit" className="Submit-button" />
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Usercreation;
