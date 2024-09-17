import React from "react";

const IC_Camera = ({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) => {
  return (
    <svg
      width="24"
      height="21"
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.75 3.125H17.7181L16.2273 0.889375C16.1475 0.769666 16.0393 0.671503 15.9124 0.603584C15.7856 0.535665 15.6439 0.500086 15.5 0.5H8.5C8.35609 0.500086 8.21443 0.535665 8.08756 0.603584C7.96069 0.671503 7.85252 0.769666 7.77266 0.889375L6.28078 3.125H3.25C2.55381 3.125 1.88613 3.40156 1.39384 3.89384C0.901562 4.38613 0.625 5.05381 0.625 5.75V18C0.625 18.6962 0.901562 19.3639 1.39384 19.8562C1.88613 20.3484 2.55381 20.625 3.25 20.625H20.75C21.4462 20.625 22.1139 20.3484 22.6062 19.8562C23.0984 19.3639 23.375 18.6962 23.375 18V5.75C23.375 5.05381 23.0984 4.38613 22.6062 3.89384C22.1139 3.40156 21.4462 3.125 20.75 3.125ZM21.625 18C21.625 18.2321 21.5328 18.4546 21.3687 18.6187C21.2046 18.7828 20.9821 18.875 20.75 18.875H3.25C3.01794 18.875 2.79538 18.7828 2.63128 18.6187C2.46719 18.4546 2.375 18.2321 2.375 18V5.75C2.375 5.51794 2.46719 5.29538 2.63128 5.13128C2.79538 4.96719 3.01794 4.875 3.25 4.875H6.75C6.89409 4.87509 7.03598 4.8396 7.16305 4.77167C7.29013 4.70375 7.39847 4.60549 7.47844 4.48563L8.96812 2.25H15.0308L16.5216 4.48563C16.6015 4.60549 16.7099 4.70375 16.8369 4.77167C16.964 4.8396 17.1059 4.87509 17.25 4.875H20.75C20.9821 4.875 21.2046 4.96719 21.3687 5.13128C21.5328 5.29538 21.625 5.51794 21.625 5.75V18ZM12 6.625C11.0482 6.625 10.1177 6.90725 9.32632 7.43605C8.53491 7.96486 7.91808 8.71647 7.55383 9.59584C7.18958 10.4752 7.09428 11.4428 7.27997 12.3764C7.46566 13.3099 7.92401 14.1674 8.59705 14.8405C9.27009 15.5135 10.1276 15.9718 11.0611 16.1575C11.9947 16.3432 12.9623 16.2479 13.8417 15.8837C14.721 15.5194 15.4726 14.9026 16.0014 14.1112C16.5303 13.3198 16.8125 12.3893 16.8125 11.4375C16.8111 10.1616 16.3036 8.93835 15.4014 8.03615C14.4991 7.13394 13.2759 6.62645 12 6.625ZM12 14.5C11.3943 14.5 10.8022 14.3204 10.2986 13.9839C9.79494 13.6474 9.40241 13.1691 9.17062 12.6095C8.93883 12.0499 8.87818 11.4341 8.99634 10.84C9.11451 10.246 9.40619 9.70028 9.83449 9.27199C10.2628 8.84369 10.8085 8.55201 11.4025 8.43384C11.9966 8.31568 12.6124 8.37633 13.172 8.60812C13.7316 8.83991 14.2099 9.23244 14.5464 9.73607C14.8829 10.2397 15.0625 10.8318 15.0625 11.4375C15.0625 12.2497 14.7398 13.0287 14.1655 13.603C13.5912 14.1773 12.8122 14.5 12 14.5Z"
        fill="#1976D2"
      />
    </svg>
  );
};

export default IC_Camera;
