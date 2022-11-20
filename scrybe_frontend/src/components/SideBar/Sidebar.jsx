import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.scss";

function SideBar() {
  return (
    <nav className={styles.SideBar}>
      <NavLink to="/">
        <svg
          width="174"
          height="48"
          viewBox="0 0 174 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3618_15500)">
            <path
              opacity="0.82"
              d="M31.9217 0.177874L22.8362 8.55831C24.0055 9.64466 24.6731 10.2331 25.3057 10.8603C27.904 13.3934 29.475 16.8166 29.7113 20.46C29.9476 24.1034 28.8323 27.7051 26.5835 30.5602C21.8172 36.6386 13.5464 37.8866 6.79938 33.5477C0.959662 29.7875 -1.05932 21.5719 2.26306 14.8727C5.3682 8.60034 10.585 4.81751 16.9135 2.45404C21.7245 0.646687 26.6538 -0.449365 31.9217 0.177874Z"
              fill="#006CFF"
            />
            <path
              opacity="0.82"
              d="M8.33301 48.0002L17.5973 39.4452C16.3802 38.2909 15.639 37.6249 14.9394 36.9168C12.4619 34.4002 10.9659 31.0625 10.727 27.5181C10.4881 23.9738 11.5223 20.4614 13.6392 17.6276C17.8433 11.963 25.817 10.2074 32.1072 13.5602C38.6497 17.0488 41.3875 24.0487 38.8158 31.2038C38.0683 33.273 37.0396 35.3843 35.6212 37.0461C28.5644 45.4104 19.1946 48.0131 8.33301 48.0002Z"
              fill="#B0D1FF"
            />
            <path
              d="M69.0946 23.0658C67.7083 22.3751 66.2542 21.8332 64.7563 21.4492C63.5775 21.1033 62.5872 20.8026 61.7758 20.5439C61.1087 20.3566 60.4801 20.05 59.9197 19.6386C59.7115 19.4722 59.5451 19.2584 59.4341 19.0145C59.3231 18.7707 59.2705 18.5037 59.2808 18.2354C59.2611 17.9092 59.3294 17.5836 59.4786 17.2937C59.6277 17.0038 59.852 16.7604 60.1274 16.5897C60.8599 16.1915 61.6868 16.0058 62.5169 16.053C63.3116 16.051 64.1028 16.1598 64.8682 16.3763C65.6088 16.5828 66.3338 16.8432 67.0373 17.1555C67.6027 17.4058 68.155 17.6853 68.6921 17.9929C68.9827 18.1361 69.2448 18.3323 69.4652 18.5717L72.1135 13.5085C71.3276 13.0623 70.4385 12.6161 69.446 12.1699C68.4134 11.7095 67.3449 11.3364 66.2514 11.0545C65.0917 10.7545 63.8992 10.6046 62.7022 10.6083C61.0471 10.588 59.4062 10.9184 57.8848 11.5783C56.4685 12.1871 55.2505 13.1878 54.3707 14.4655C53.4954 15.7588 53.0577 17.3301 53.0577 19.1795C53.0165 20.3369 53.2753 21.485 53.8085 22.5097C54.3691 23.4593 55.1697 24.2405 56.1277 24.7729C57.3796 25.4783 58.7077 26.0349 60.0858 26.4316C61.3126 26.8044 62.3977 27.1375 63.3411 27.4306C64.128 27.6591 64.8804 27.9952 65.5774 28.4297C65.8376 28.593 66.051 28.8226 66.1962 29.0955C66.3414 29.3684 66.4133 29.675 66.4048 29.9848C66.4094 30.2718 66.3384 30.5548 66.1992 30.8048C66.0599 31.0548 65.8574 31.2628 65.6125 31.4074C65.0843 31.748 64.2814 31.9172 63.2038 31.9151C62.1978 31.9147 61.1964 31.7777 60.2264 31.5077C59.3158 31.2596 58.4251 30.9418 57.5621 30.5571C56.8716 30.2549 56.2014 29.9072 55.5559 29.516C55.2098 29.327 54.888 29.0957 54.5975 28.8274L51.9492 34.1492C53.0108 34.8602 54.145 35.4531 55.3323 35.9177C56.5747 36.4044 57.8577 36.7777 59.1658 37.0332C60.456 37.29 61.7675 37.421 63.0824 37.4244C64.3076 37.4273 65.5289 37.284 66.721 36.9976C67.8424 36.7409 68.9078 36.2785 69.8645 35.6332C70.7844 35.0028 71.5362 34.152 72.0528 33.1566C72.6242 31.9921 72.9019 30.7024 72.861 29.4029C72.861 27.7798 72.5362 26.4747 71.8867 25.4875C71.1786 24.4494 70.2166 23.615 69.0946 23.0658Z"
              fill="#454545"
            />
            <path
              d="M87.4214 31.6562C87.0706 31.9511 86.6731 32.1839 86.2457 32.3449C85.6636 32.5563 85.0415 32.6309 84.4266 32.5631C83.8117 32.4953 83.2201 32.2869 82.6965 31.9537C82.0486 31.5104 81.5231 30.9073 81.1695 30.2013C80.7857 29.3898 80.5849 28.5021 80.5816 27.6024C80.5783 26.7027 80.7725 25.8135 81.1504 24.9991C81.5058 24.303 82.0399 23.7166 82.6965 23.3017C83.3529 22.8892 84.1124 22.676 84.8848 22.6873C85.5542 22.6807 86.2141 22.8477 86.8016 23.1723C87.3831 23.4984 87.8708 23.972 88.2168 24.5464L93.9479 22.7973C93.1734 21.2524 91.9814 19.9619 90.5105 19.0759C88.9792 18.1188 87.1104 17.6414 84.904 17.6436C82.6976 17.6457 80.8352 18.1048 79.3167 19.0209C77.8253 19.8925 76.5979 21.1604 75.7675 22.6873C74.9487 24.1909 74.5241 25.8818 74.5344 27.5986C74.5271 28.9036 74.7645 30.1982 75.234 31.4137C75.6951 32.6048 76.3895 33.6892 77.2753 34.6017C78.2 35.5535 79.308 36.3029 80.5306 36.8035C83.2264 37.8282 86.1896 37.8762 88.9164 36.9393C90.0434 36.5221 91.0843 35.8972 91.9864 35.0963C92.8246 34.3565 93.506 33.4524 93.9894 32.4387L88.2392 30.6507C88.0352 31.0375 87.7572 31.3793 87.4214 31.6562Z"
              fill="#454545"
            />
            <path
              d="M107.666 17.4042C106.473 17.4405 105.319 17.8418 104.356 18.5552C103.255 19.3576 102.37 20.4257 101.781 21.6623V17.9248H96.376V37.2366H102.254V25.5163C102.832 24.5694 103.714 23.8525 104.752 23.4859C105.985 23.0122 107.296 22.7785 108.614 22.7972V17.4398C108.499 17.4133 108.381 17.4014 108.263 17.4042H107.666Z"
              fill="#454545"
            />
            <path
              d="M119.432 31.2487L114.959 17.9247H108.89L116.237 37.3013C116.09 37.9857 115.868 38.6515 115.576 39.2865C115.389 39.7128 115.091 40.0794 114.713 40.3469C114.354 40.5676 113.939 40.6797 113.519 40.6703C113.129 40.6659 112.74 40.6226 112.359 40.5409C111.931 40.4536 111.471 40.3372 110.979 40.1885V45.2646C111.467 45.4563 111.972 45.6003 112.487 45.6946C112.985 45.782 113.489 45.8252 113.995 45.824C115.133 45.8363 116.262 45.6027 117.304 45.1385C118.287 44.6979 119.165 44.0497 119.879 43.2374C120.595 42.4222 121.139 41.4671 121.476 40.431L128.824 17.915H123.256L119.432 31.2487Z"
              fill="#454545"
            />
            <path
              d="M149.084 20.5792C148.359 19.6801 147.459 18.9425 146.439 18.4129C145.394 17.883 144.24 17.6137 143.072 17.6273C141.76 17.5956 140.462 17.9157 139.312 18.5552C138.237 19.1838 137.353 20.0986 136.756 21.1999V10.0713H130.865V37.2301H135.977V33.9969C136.587 35.1108 137.49 36.0318 138.587 36.6578C139.77 37.311 141.102 37.6377 142.449 37.6052C143.663 37.6242 144.866 37.3791 145.979 36.8866C147.091 36.394 148.086 35.6655 148.896 34.7503C149.716 33.8269 150.358 32.7567 150.79 31.5947C151.251 30.3548 151.481 29.0395 151.47 27.7148C151.478 26.3741 151.262 25.0417 150.831 23.7736C150.442 22.6118 149.85 21.53 149.084 20.5792ZM145.094 29.6321C144.883 30.2058 144.557 30.7287 144.136 31.1679C143.699 31.6165 143.178 31.9723 142.604 32.2143C142.029 32.4564 141.413 32.5799 140.791 32.5776C140.385 32.5749 139.981 32.5072 139.596 32.3771C139.197 32.2476 138.815 32.0718 138.456 31.8533C138.095 31.6298 137.768 31.3555 137.484 31.0385C137.188 30.7094 136.94 30.3379 136.75 29.936V25.9754C137.011 25.3598 137.37 24.7918 137.813 24.2941C138.238 23.8132 138.745 23.4154 139.312 23.1205C139.945 22.7972 140.652 22.6503 141.36 22.6946C142.068 22.7389 142.751 22.9729 143.34 23.3726C143.998 23.8425 144.523 24.4777 144.864 25.2156C145.233 25.9931 145.422 26.8457 145.417 27.7084C145.426 28.3673 145.316 29.0225 145.094 29.6418V29.6321Z"
              fill="#454545"
            />
            <path
              d="M172.452 22.6648C171.629 21.1491 170.414 19.8885 168.938 19.0177C167.405 18.0909 165.547 17.6274 163.367 17.6274C161.186 17.6274 159.322 18.0963 157.776 19.0339C156.286 19.9159 155.06 21.191 154.23 22.723C153.399 24.2764 152.974 26.0195 152.997 27.7861C152.99 29.0641 153.224 30.3316 153.687 31.5205C154.145 32.7002 154.839 33.7713 155.725 34.6664C156.656 35.598 157.764 36.3303 158.98 36.8197C160.375 37.3682 161.861 37.6362 163.357 37.6086C164.727 37.6254 166.089 37.3989 167.382 36.9393C168.539 36.5265 169.611 35.9018 170.545 35.0964C171.413 34.352 172.12 33.4339 172.621 32.3999L167.622 30.987C167.306 31.7302 166.74 32.3362 166.025 32.6974C165.265 33.1228 164.411 33.3453 163.542 33.344C162.844 33.3458 162.153 33.1912 161.52 32.8913C160.893 32.5983 160.354 32.142 159.958 31.569C159.536 30.9349 159.289 30.1982 159.242 29.4351H173.509C173.532 29.1926 173.564 28.9048 173.599 28.575C173.638 28.2402 173.657 27.9034 173.656 27.5663C173.673 25.8554 173.259 24.1683 172.452 22.6648ZM159.118 25.7751C159.195 25.0506 159.433 24.3531 159.814 23.7349C160.173 23.1635 160.674 22.6983 161.268 22.3867C161.899 22.0699 162.595 21.905 163.3 21.905C164.004 21.905 164.7 22.0699 165.331 22.3867C165.932 22.6941 166.44 23.1599 166.801 23.7349C167.182 24.3536 167.421 25.0507 167.5 25.7751H159.118Z"
              fill="#454545"
            />
          </g>
          <defs>
            <clipPath id="clip0_3618_15500">
              <rect
                width="173"
                height="48"
                fill="white"
                transform="translate(0.666016)"
              />
            </clipPath>
          </defs>
        </svg>
      </NavLink>
      <div className={styles.navLinks}>
        <NavLink to="/myScrybe" className={styles.navLink}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9997 7.00016V0.333496H21.6663V7.00016H12.9997ZM0.333008 11.0002V0.333496H8.99967V11.0002H0.333008ZM12.9997 21.6668V11.0002H21.6663V21.6668H12.9997ZM0.333008 21.6668V15.0002H8.99967V21.6668H0.333008ZM1.66634 9.66683H7.66634V1.66683H1.66634V9.66683ZM14.333 20.3335H20.333V12.3335H14.333V20.3335ZM14.333 5.66683H20.333V1.66683H14.333V5.66683ZM1.66634 20.3335H7.66634V16.3335H1.66634V20.3335Z"
              fill="#6A6A6A"
            />
          </svg>
          <p>My Scrybe</p>
        </NavLink>
        <NavLink to="/myScrybe" className={styles.navLink}>
          <svg
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.00033 20.3335V5.66683H7.33366V20.3335H6.00033ZM11.3337 25.6668V0.333496H12.667V25.6668H11.3337ZM0.666992 15.0002V11.0002H2.00033V15.0002H0.666992ZM16.667 20.3335V5.66683H18.0003V20.3335H16.667ZM22.0003 15.0002V11.0002H23.3337V15.0002H22.0003Z"
              fill="#006CFF"
            />
          </svg>
          <p>Analysis</p>
        </NavLink>
        <NavLink to="/myScrybe" className={styles.navLink}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9329 21.6668C8.24399 21.6668 5.88843 20.7833 3.86621 19.0162C1.84399 17.2499 0.677322 15.0224 0.366211 12.3335H1.73288C2.08843 14.6224 3.12754 16.5282 4.85021 18.0508C6.57199 19.5726 8.59954 20.3335 10.9329 20.3335C13.5329 20.3335 15.7387 19.4277 17.5502 17.6162C19.3609 15.8055 20.2662 13.6002 20.2662 11.0002C20.2662 8.40016 19.3609 6.19439 17.5502 4.38283C15.7387 2.57216 13.5329 1.66683 10.9329 1.66683C9.5551 1.66683 8.26088 1.95572 7.05021 2.5335C5.83866 3.11127 4.76621 3.91127 3.83288 4.9335H7.16621V6.26683H1.59954V0.733496H2.93288V3.9335C3.97732 2.80016 5.19421 1.91705 6.58354 1.28416C7.97199 0.650385 9.42177 0.333496 10.9329 0.333496C12.4218 0.333496 13.8107 0.611274 15.0995 1.16683C16.3884 1.72239 17.5164 2.48372 18.4835 3.45083C19.4498 4.41705 20.2107 5.54461 20.7662 6.8335C21.3218 8.12239 21.5995 9.51127 21.5995 11.0002C21.5995 12.4891 21.3218 13.8779 20.7662 15.1668C20.2107 16.4557 19.4498 17.5837 18.4835 18.5508C17.5164 19.5171 16.3884 20.2779 15.0995 20.8335C13.8107 21.3891 12.4218 21.6668 10.9329 21.6668ZM15.2329 16.1335L10.3662 11.2668V4.3335H11.6995V10.7335L16.1662 15.2002L15.2329 16.1335Z"
              fill="#6A6A6A"
            />
          </svg>
          <p>Insight</p>
        </NavLink>
        <NavLink to="/myScrybe" className={styles.navLink}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.49967 24L9.03301 20.1333C8.61079 20.0222 8.1499 19.828 7.65034 19.5507C7.1499 19.2724 6.73301 18.9778 6.39967 18.6667L2.83301 20.1667L0.333008 15.8333L3.43301 13.5C3.38856 13.2778 3.3499 13.0387 3.31701 12.7827C3.28323 12.5276 3.26634 12.2778 3.26634 12.0333C3.26634 11.8111 3.28323 11.572 3.31701 11.316C3.3499 11.0609 3.38856 10.7889 3.43301 10.5L0.333008 8.16667L2.83301 3.9L6.36634 5.36667C6.76634 5.03333 7.19434 4.73333 7.65034 4.46667C8.10545 4.2 8.55523 4 8.99967 3.86667L9.49967 0H14.4997L14.9663 3.86667C15.4775 4.06667 15.9277 4.27778 16.317 4.5C16.7055 4.72222 17.1108 5.01111 17.533 5.36667L21.1663 3.9L23.6663 8.16667L20.4663 10.5667C20.5552 10.8333 20.5997 11.0836 20.5997 11.3173V12C20.5997 12.2 20.5943 12.4169 20.5837 12.6507C20.5721 12.8836 20.533 13.1667 20.4663 13.5L23.5997 15.8333L21.0997 20.1667L17.533 18.6333C17.1108 18.9889 16.6943 19.2889 16.2837 19.5333C15.8721 19.7778 15.433 19.9778 14.9663 20.1333L14.4997 24H9.49967ZM11.9663 15.3333C12.8997 15.3333 13.6886 15.0111 14.333 14.3667C14.9775 13.7222 15.2997 12.9333 15.2997 12C15.2997 11.0667 14.9775 10.2778 14.333 9.63333C13.6886 8.98889 12.8997 8.66667 11.9663 8.66667C11.033 8.66667 10.2441 8.98889 9.59967 9.63333C8.95523 10.2778 8.63301 11.0667 8.63301 12C8.63301 12.9333 8.95523 13.7222 9.59967 14.3667C10.2441 15.0111 11.033 15.3333 11.9663 15.3333ZM11.9663 14C11.4108 14 10.9388 13.8053 10.5503 13.416C10.161 13.0276 9.96634 12.5556 9.96634 12C9.96634 11.4444 10.161 10.9724 10.5503 10.584C10.9388 10.1947 11.4108 10 11.9663 10C12.5219 10 12.9943 10.1947 13.3837 10.584C13.7721 10.9724 13.9663 11.4444 13.9663 12C13.9663 12.5556 13.7721 13.0276 13.3837 13.416C12.9943 13.8053 12.5219 14 11.9663 14ZM10.6663 22.6667H13.2663L13.7663 19.0667C14.433 18.8889 15.0388 18.6444 15.5837 18.3333C16.1277 18.0222 16.6775 17.5889 17.233 17.0333L20.533 18.4667L21.8663 16.2L18.9663 14C19.0775 13.6222 19.1499 13.272 19.1837 12.9493C19.2166 12.6276 19.233 12.3111 19.233 12C19.233 11.6667 19.2166 11.3498 19.1837 11.0493C19.1499 10.7498 19.0775 10.4111 18.9663 10.0333L21.933 7.8L20.5997 5.53333L17.1997 6.96667C16.7997 6.52222 16.2721 6.10533 15.617 5.716C14.961 5.32756 14.333 5.06667 13.733 4.93333L13.333 1.33333H10.6663L10.2663 4.93333C9.59967 5.06667 8.98279 5.29422 8.41568 5.616C7.84945 5.93867 7.28856 6.37778 6.73301 6.93333L3.39967 5.53333L2.06634 7.8L4.96634 9.96667C4.85523 10.2556 4.77745 10.5778 4.73301 10.9333C4.68856 11.2889 4.66634 11.6556 4.66634 12.0333C4.66634 12.3667 4.68856 12.7 4.73301 13.0333C4.77745 13.3667 4.84412 13.6889 4.93301 14L2.06634 16.2L3.39967 18.4667L6.69967 17.0667C7.23301 17.6 7.77745 18.0222 8.33301 18.3333C8.88856 18.6444 9.5219 18.8889 10.233 19.0667L10.6663 22.6667Z"
              fill="#6A6A6A"
            />
          </svg>
          <p>Settings</p>
        </NavLink>
      </div>
    </nav>
  );
}

export default SideBar;