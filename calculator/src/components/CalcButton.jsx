import styles from "./CalcButton.module.css";

function CalcButton({ Button_Name, ButtonClicked }) {
  return (
    <div
      className= "row  py-3 px-1 d-flex mx-5 justify-content-center "
    >
      {Button_Name.map((item) => (
        <div
          key={item}
          className="col-xl-3 p-2 mx-1  my-1 d-flex justify-content-center col-xs-12 col-sm-3 col-lg-3"
        >
          <button
            className={`${styles["btn"]} btn`}
            onClick={() => {
              ButtonClicked(item);
            }}
          >
            {item}
          </button>
        </div>
      ))}
    </div>
  );
}

export default CalcButton;
