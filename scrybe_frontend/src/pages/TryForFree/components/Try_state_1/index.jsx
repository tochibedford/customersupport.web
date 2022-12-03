// eslint-disable-next-line no-warning-comments
// TODO disable eslint warning for this todo ;)
import React, { useState, useRef } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import styles from "./try_state_1.module.scss";
import RecordingLogo from "../../assets/Recording-logo.png";

export default function TryState1() {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event.dataTransfer.files);
    setFiles(event.dataTransfer.files);
  };

  const uploadFiles = () => {
    axios
      .post("https://api.heed.hng.tech/tryForFree", files)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log("the name");
  };

  if (files)
    return (
      <div className={styles.recordingSection}>
        <div
          className={styles.recordingDrag}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className={styles.recordingContent}>
            <div className={styles.recordingImageContainer}>
              <img src={RecordingLogo} alt="some" />
            </div>
            <div>
              {Array.from(files).map((file, idx) => (
                <h4 key={idx}>{file.name}</h4>
              ))}
            </div>
            <div className={styles.Or}>
              <div className={styles.orLeft} />
              <div className={styles.pDiv}>
                <p>OR</p>
              </div>
              <div className={styles.orRight} />
            </div>

            <input
              type="file"
              onChange={(event) => {
                setFiles(event.target.files);
                console.log(event.target.files);
              }}
              name="file"
              hidden
              ref={inputRef}
            />

            <p
              className={styles.Upload}
              onClick={() => inputRef.current.click()}
            >
              Select another file from your computer
            </p>
            {/* 
              <Link to="/try-processing">
              </Link> */}
            <button onClick={uploadFiles}>upload</button>
            <button
              onClick={uploadFiles}
              className={styles.selectButton2}
              type="submit"
            >
              Transcribe
            </button>
          </div>
        </div>
        <div className={styles.tryNote}>
          <p>Please note;</p>
          <ul>
            <li>
              You may upload, transcribe and analyse only one recording at a
              time.
            </li>
            <li>File must not be larger than 5mb.</li>
            <li>
              Transcription may take up to 3 minutes, kindly wait or sign up to
              use the job ID feature.
            </li>
            <li>
              Downloading sentiment anlysis is currently only available on the
              webapp.
            </li>
            <li>
              Tracking sentiment anlysis records is currently only available on
              the webapp.
            </li>
          </ul>
        </div>
      </div>
    );

  return (
    <div className={styles.recordingSection}>
      {!files && (
        <div
          className={styles.recordingDrag}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className={styles.recordingContent}>
            <div className={styles.recordingImageContainer}>
              <img src={RecordingLogo} alt="some" />
            </div>

            <h4>Drag and drop agent audio call recordings</h4>

            <div className={styles.Or}>
              <div className={styles.orLeft} />
              <div className={styles.pDiv}>
                <p>OR</p>
              </div>
              <div className={styles.orRight} />
            </div>
            <input
              type="file"
              onChange={(event) => {
                setFiles(event.target.files);
                console.log(event.target.files);
              }}
              hidden
              ref={inputRef}
            />

            <p
              className={styles.Upload}
              onClick={() => inputRef.current.click()}
            >
              Browse from your computer
            </p>

            <button className={styles.selectButton1} type="button">
              Transcribe
            </button>
          </div>
        </div>
      )}

      <div className={styles.tryNote}>
        <p>Please note;</p>
        <ul>
          <li>
            You may upload, transcribe and analyse only one recording at a time.
          </li>
          <li>File must not be larger than 5mb.</li>
          <li>
            Transcription may take up to 3 minutes, kindly wait or sign up to
            use the job ID feature.
          </li>
          <li>
            Downloading sentiment anlysis is currently only available on the
            webapp.
          </li>
          <li>
            Tracking sentiment anlysis records is currently only available on
            the webapp.
          </li>
        </ul>
      </div>
    </div>
  );
}
