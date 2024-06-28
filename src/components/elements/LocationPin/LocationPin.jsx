import './LocationPin.css';

export default function LocationPin() {
  return (
    <>
      <div className="pin-container dark-shade">
        <svg
          className="pin-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.4627 7.73133C15.4627 9.32103 14.9829 10.7987 14.1602 12.0273H14.1746L14.0961 12.1215C13.8306 12.5057 13.5313 12.8647 13.2023 13.1941L7.73184 19.7587L2.26643 13.2002C1.93307 12.8671 1.62998 12.5037 1.36165 12.1144L1.28906 12.0273H1.30247C0.479791 10.7987 0 9.32103 0 7.73133C0 3.46144 3.46144 0 7.73133 0C12.0012 0 15.4627 3.46144 15.4627 7.73133ZM7.73302 11.1672C9.63075 11.1672 11.1692 9.6288 11.1692 7.73107C11.1692 5.83334 9.63075 4.29492 7.73302 4.29492C5.83529 4.29492 4.29688 5.83334 4.29688 7.73107C4.29688 9.6288 5.83529 11.1672 7.73302 11.1672Z"
            fill="#FFF"
          />
        </svg>
        <p className="pin-text">Seattle, WA</p>
      </div>
    </>
  );
}
