import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import jobs from "../data/jobData";
import styles from "./applypage.module.css";
function ApplyPage({ submitApplication }) {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [jobData, setJobData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const job = jobs.find((job) => job.id === parseInt(id));
    setJobData(job);
  }, [id]);

  const onSubmit = (data) => {
    const application = {
      jobId: jobData.id,
      jobTitle: jobData.title,
      company: jobData.company,
      location: jobData.location,
      name: data.name,
      email: data.email,
      resume: data.resume[0],
    };
    submitApplication(application);
    console.log(`Application submitted for Job ID: ${id}`);
    console.log("Form data:", data);
    alert("Application Submitted");
    navigate("/applications");
  };

  return (
    <div className={styles.applyPage}>
      <h3>
        Apply for {jobData ? jobData.title : "Loading..."} at{" "}
        {jobData ? jobData.company : ""}
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            className={styles.inputtext}
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>

        <div>
          <input
            className={styles.inputtext}
            type="email"
            placeholder="Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>

        <div>
          <p>Upload resume</p>
          <input
            type="file"
            {...register("resume", { required: "Resume is required" })}
          />
          {errors.resume && (
            <span className={styles.error}>{errors.resume.message}</span>
          )}
        </div>
        <div>
          <button className={styles.buttonStyle} type="submit">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default ApplyPage;
