import styles from "./CalcInput.module.css";

function CalcInput({DisplayValue}) {
  return (
    <div className="row text-center mx-auto">
      <div className="col-12">
        <input type="text"  readOnly value = {DisplayValue}
        className={`${styles["display-input"]}`} />
      </div>
    </div>
  );
}

export default CalcInput;
