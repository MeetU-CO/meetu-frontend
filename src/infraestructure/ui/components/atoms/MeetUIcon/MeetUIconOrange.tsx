import React from "react";
import { Link } from "react-router-dom";
import "./MeetUIconOrange.scss";

const MeetUIconOrange = () => {
  return (
    <Link to="/" className="meetUIconOrange">
      <svg
        width="100%"
        viewBox="0 0 150 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M54.224 28.224C53.7333 28.224 53.3493 28.0853 53.072 27.808C52.816 27.5307 52.688 27.1467 52.688 26.656V6.784C52.688 6.272 52.8267 5.888 53.104 5.632C53.3813 5.35467 53.7547 5.216 54.224 5.216C54.672 5.216 55.0133 5.30133 55.248 5.472C55.504 5.62133 55.7387 5.89867 55.952 6.304L64.336 21.952H63.344L71.696 6.304C71.9093 5.89867 72.1333 5.62133 72.368 5.472C72.6027 5.30133 72.944 5.216 73.392 5.216C73.8613 5.216 74.224 5.35467 74.48 5.632C74.736 5.888 74.864 6.272 74.864 6.784V26.656C74.864 27.1467 74.736 27.5307 74.48 27.808C74.2453 28.0853 73.8827 28.224 73.392 28.224C72.9013 28.224 72.528 28.0853 72.272 27.808C72.016 27.5307 71.888 27.1467 71.888 26.656V10.144H72.592L65.168 23.872C64.9973 24.192 64.816 24.4267 64.624 24.576C64.432 24.7253 64.1653 24.8 63.824 24.8C63.4827 24.8 63.2053 24.7253 62.992 24.576C62.7787 24.4053 62.5867 24.1707 62.416 23.872L54.928 10.112H55.696V26.656C55.696 27.1467 55.568 27.5307 55.312 27.808C55.0773 28.0853 54.7147 28.224 54.224 28.224ZM87.1625 28.288C85.4558 28.288 83.9838 27.968 82.7465 27.328C81.5305 26.6667 80.5812 25.7387 79.8985 24.544C79.2372 23.328 78.9065 21.888 78.9065 20.224C78.9065 18.6027 79.2372 17.184 79.8985 15.968C80.5598 14.752 81.4665 13.8027 82.6185 13.12C83.7705 12.4373 85.0825 12.096 86.5545 12.096C87.6425 12.096 88.6132 12.2773 89.4665 12.64C90.3198 12.9813 91.0452 13.4933 91.6425 14.176C92.2612 14.8373 92.7198 15.648 93.0185 16.608C93.3385 17.568 93.4985 18.6453 93.4985 19.84C93.4985 20.2027 93.3918 20.48 93.1785 20.672C92.9652 20.8427 92.6452 20.928 92.2185 20.928H81.4665V18.944H91.3225L90.7785 19.392C90.7785 18.3253 90.6185 17.4187 90.2985 16.672C89.9998 15.9253 89.5412 15.36 88.9225 14.976C88.3252 14.5707 87.5785 14.368 86.6825 14.368C85.6798 14.368 84.8265 14.6027 84.1225 15.072C83.4398 15.5413 82.9172 16.192 82.5545 17.024C82.1918 17.856 82.0105 18.8267 82.0105 19.936V20.128C82.0105 22.0053 82.4478 23.424 83.3225 24.384C84.2185 25.3227 85.5092 25.792 87.1945 25.792C87.8345 25.792 88.5065 25.7067 89.2105 25.536C89.9358 25.3653 90.6185 25.0773 91.2585 24.672C91.6212 24.4587 91.9412 24.3627 92.2185 24.384C92.5172 24.4053 92.7518 24.5013 92.9225 24.672C93.1145 24.8427 93.2318 25.056 93.2745 25.312C93.3172 25.568 93.2745 25.8347 93.1465 26.112C93.0185 26.368 92.7945 26.6027 92.4745 26.816C91.7492 27.3067 90.9065 27.68 89.9465 27.936C88.9865 28.1707 88.0585 28.288 87.1625 28.288ZM104.35 28.288C102.643 28.288 101.171 27.968 99.934 27.328C98.718 26.6667 97.7687 25.7387 97.086 24.544C96.4247 23.328 96.094 21.888 96.094 20.224C96.094 18.6027 96.4247 17.184 97.086 15.968C97.7473 14.752 98.654 13.8027 99.806 13.12C100.958 12.4373 102.27 12.096 103.742 12.096C104.83 12.096 105.801 12.2773 106.654 12.64C107.507 12.9813 108.233 13.4933 108.83 14.176C109.449 14.8373 109.907 15.648 110.206 16.608C110.526 17.568 110.686 18.6453 110.686 19.84C110.686 20.2027 110.579 20.48 110.366 20.672C110.153 20.8427 109.833 20.928 109.406 20.928H98.654V18.944H108.51L107.966 19.392C107.966 18.3253 107.806 17.4187 107.486 16.672C107.187 15.9253 106.729 15.36 106.11 14.976C105.513 14.5707 104.766 14.368 103.87 14.368C102.867 14.368 102.014 14.6027 101.31 15.072C100.627 15.5413 100.105 16.192 99.742 17.024C99.3793 17.856 99.198 18.8267 99.198 19.936V20.128C99.198 22.0053 99.6353 23.424 100.51 24.384C101.406 25.3227 102.697 25.792 104.382 25.792C105.022 25.792 105.694 25.7067 106.398 25.536C107.123 25.3653 107.806 25.0773 108.446 24.672C108.809 24.4587 109.129 24.3627 109.406 24.384C109.705 24.4053 109.939 24.5013 110.11 24.672C110.302 24.8427 110.419 25.056 110.462 25.312C110.505 25.568 110.462 25.8347 110.334 26.112C110.206 26.368 109.982 26.6027 109.662 26.816C108.937 27.3067 108.094 27.68 107.134 27.936C106.174 28.1707 105.246 28.288 104.35 28.288ZM120.834 28.288C119.554 28.288 118.477 28.064 117.602 27.616C116.728 27.168 116.077 26.5067 115.65 25.632C115.224 24.7573 115.01 23.6907 115.01 22.432V14.88H113.09C112.664 14.88 112.333 14.7733 112.098 14.56C111.864 14.3253 111.746 14.016 111.746 13.632C111.746 13.2267 111.864 12.9173 112.098 12.704C112.333 12.4907 112.664 12.384 113.09 12.384H115.01V9.088C115.01 8.55467 115.149 8.14933 115.426 7.872C115.725 7.59467 116.13 7.456 116.642 7.456C117.154 7.456 117.549 7.59467 117.826 7.872C118.104 8.14933 118.242 8.55467 118.242 9.088V12.384H121.986C122.413 12.384 122.744 12.4907 122.978 12.704C123.213 12.9173 123.33 13.2267 123.33 13.632C123.33 14.016 123.213 14.3253 122.978 14.56C122.744 14.7733 122.413 14.88 121.986 14.88H118.242V22.176C118.242 23.3067 118.477 24.16 118.946 24.736C119.437 25.312 120.226 25.6 121.314 25.6C121.698 25.6 122.029 25.568 122.306 25.504C122.605 25.4187 122.85 25.3653 123.042 25.344C123.277 25.344 123.469 25.4293 123.618 25.6C123.768 25.7493 123.842 26.048 123.842 26.496C123.842 26.816 123.778 27.1147 123.65 27.392C123.544 27.6693 123.341 27.8507 123.042 27.936C122.786 28.0213 122.434 28.096 121.986 28.16C121.56 28.2453 121.176 28.288 120.834 28.288ZM135.338 28.288C133.823 28.288 132.49 28.096 131.338 27.712C130.186 27.3067 129.215 26.7093 128.426 25.92C127.658 25.1307 127.071 24.1493 126.666 22.976C126.26 21.8027 126.058 20.448 126.058 18.912V6.88C126.058 6.32533 126.196 5.90933 126.474 5.632C126.772 5.35467 127.188 5.216 127.722 5.216C128.255 5.216 128.66 5.35467 128.938 5.632C129.236 5.90933 129.386 6.32533 129.386 6.88V18.848C129.386 21.0453 129.887 22.688 130.89 23.776C131.914 24.864 133.396 25.408 135.338 25.408C137.3 25.408 138.783 24.864 139.786 23.776C140.788 22.688 141.29 21.0453 141.29 18.848V6.88C141.29 6.32533 141.428 5.90933 141.706 5.632C142.004 5.35467 142.41 5.216 142.922 5.216C143.455 5.216 143.86 5.35467 144.138 5.632C144.415 5.90933 144.554 6.32533 144.554 6.88V18.912C144.554 20.96 144.202 22.688 143.498 24.096C142.815 25.4827 141.791 26.528 140.426 27.232C139.06 27.936 137.364 28.288 135.338 28.288Z"
          fill="#F05600"
        />
        <path
          d="M3.5 7L0 11H7V27.5H12.5V11H17V27.5H22V11H27V27.5H32.5V11H37.5L41 7H3.5Z"
          fill="#F05600"
        />
      </svg>
    </Link>
  );
};

export default MeetUIconOrange;