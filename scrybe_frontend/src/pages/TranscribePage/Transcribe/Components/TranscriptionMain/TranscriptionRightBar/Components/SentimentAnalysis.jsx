import React from "react";
import styles from "./SentimentAnalysis.module.scss";
import { Link } from "react-router-dom";

function SentimentAnalysis({ donwloadData }) {
  const getTranscriptionID = () => {
    let location = window.location.pathname;
    return location.substring(16, location.length);
  };
  const audioId = getTranscriptionID();
  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(donwloadData)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };
  return (
    <div className={styles.SentimentAnalysis}>
      <h2>Sentiment analysis</h2>
      <p>Monitor your agent friendliness and customer satisfaction</p>
      <div className={styles.downloadPanel}>
        <button className={styles.analysisButton} type="submit">
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 15.5002C1.58333 15.5002 1.22933 15.3542 0.938 15.0622C0.646 14.7709 0.5 14.4169 0.5 14.0002C0.5 13.5835 0.646 13.2295 0.938 12.9382C1.22933 12.6462 1.58333 12.5002 2 12.5002C2.13333 12.5002 2.25 12.5085 2.35 12.5252C2.45 12.5419 2.55 12.5919 2.65 12.6752L7.675 7.6502C7.59167 7.5502 7.54167 7.4502 7.525 7.3502C7.50833 7.2502 7.5 7.13353 7.5 7.0002C7.5 6.58353 7.646 6.22953 7.938 5.9382C8.22933 5.6462 8.58333 5.5002 9 5.5002C9.41667 5.5002 9.77067 5.6462 10.062 5.9382C10.354 6.22953 10.5 6.58353 10.5 7.0002C10.5 7.08353 10.4583 7.29186 10.375 7.6252L13.375 10.6252C13.475 10.5752 13.571 10.5419 13.663 10.5252C13.7543 10.5085 13.8667 10.5002 14 10.5002C14.1333 10.5002 14.25 10.5085 14.35 10.5252C14.45 10.5419 14.5417 10.5919 14.625 10.6752L18.675 6.6252C18.5917 6.54186 18.5417 6.4502 18.525 6.3502C18.5083 6.2502 18.5 6.13353 18.5 6.0002C18.5 5.58353 18.646 5.22953 18.938 4.9382C19.2293 4.6462 19.5833 4.5002 20 4.5002C20.4167 4.5002 20.7707 4.6462 21.062 4.9382C21.354 5.22953 21.5 5.58353 21.5 6.0002C21.5 6.41686 21.354 6.77086 21.062 7.0622C20.7707 7.3542 20.4167 7.5002 20 7.5002C19.8667 7.5002 19.75 7.49186 19.65 7.4752C19.55 7.45853 19.4583 7.40853 19.375 7.3252L15.325 11.3752C15.4083 11.4585 15.4583 11.5502 15.475 11.6502C15.4917 11.7502 15.5 11.8669 15.5 12.0002C15.5 12.4169 15.354 12.7709 15.062 13.0622C14.7707 13.3542 14.4167 13.5002 14 13.5002C13.5833 13.5002 13.2293 13.3542 12.938 13.0622C12.646 12.7709 12.5 12.4169 12.5 12.0002C12.5 11.8669 12.5083 11.7502 12.525 11.6502C12.5417 11.5502 12.5917 11.4502 12.675 11.3502L9.65 8.3252C9.55 8.40853 9.45 8.45853 9.35 8.4752C9.25 8.49186 9.13333 8.5002 9 8.5002C8.91667 8.5002 8.70833 8.45853 8.375 8.3752L3.375 13.3752C3.425 13.4752 3.45833 13.5712 3.475 13.6632C3.49167 13.7545 3.5 13.8669 3.5 14.0002C3.5 14.4169 3.354 14.7709 3.062 15.0622C2.77067 15.3542 2.41667 15.5002 2 15.5002ZM3 5.1752L2.625 4.3752L1.825 4.0002L2.625 3.6252L3 2.8252L3.375 3.6252L4.175 4.0002L3.375 4.3752L3 5.1752ZM14 3.8002L13.425 2.5752L12.2 2.0002L13.425 1.4252L14 0.200195L14.575 1.4252L15.8 2.0002L14.575 2.5752L14 3.8002Z"
              fill="white"
            />
          </svg>
          <a
            href={`/sentiment-analysis/${audioId}`}
            target="_blank"
            rel="noreferrer"
          >
            View analysis
          </a>
        </button>
        <div className={styles.downloadButton} onClick={exportData}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* <mask id="mask0_1826_28324" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="12" y="12" width="24" height="24">
                    <rect x="12" y="12" width="24" height="24" fill="#D9D9D9"/>
                    </mask> */}
            <g mask="url(#mask0_1826_28324)">
              <path
                d="M18.625 30.9999C18.1583 30.9999 17.771 30.8459 17.463 30.5379C17.1543 30.2292 17 29.8416 17 29.3749V26.9999H18V29.3749C18 29.5416 18.0627 29.6872 18.188 29.8119C18.3127 29.9372 18.4583 29.9999 18.625 29.9999H29.375C29.5417 29.9999 29.6873 29.9372 29.812 29.8119C29.9373 29.6872 30 29.5416 30 29.3749V26.9999H31V29.3749C31 29.8416 30.846 30.2292 30.538 30.5379C30.2293 30.8459 29.8417 30.9999 29.375 30.9999H18.625ZM24 27.2249L20.45 23.6999L21.175 22.9749L23.5 25.2999V16.6499H24.5V25.2999L26.825 22.9749L27.55 23.6999L24 27.2249Z"
                fill="#006CFF"
              />
            </g>
            <rect
              x="0.5"
              y="0.5"
              width="47"
              height="47"
              rx="3.5"
              stroke="#006CFF"
            />
          </svg>
        </div>
      </div>
      <div className={styles.mobileSentimentAnalysis}>
        <Link to="/sentiment-analysis/:userId">
          <div className={styles.mobileContainer}>
            <h5>sentiment analysis</h5>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.99967 0.916829L11.083 6.00016L5.99967 11.0835L5.28301 10.3668L9.16634 6.50016L0.916341 6.50016V5.50016L9.16634 5.50016L5.28301 1.6335L5.99967 0.916829Z"
                fill="#006CFF"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SentimentAnalysis;
