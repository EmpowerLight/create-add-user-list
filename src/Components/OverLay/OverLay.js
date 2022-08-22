import style from "./OverLay.module.css"

const OverLay = (props) => {
  return (
    <div className={style["overlay__outer-layer"]}>
      <div className={style.overlay__container}>
        <div className={style.overLay__header}>
          <h1 className={style.overlay__heading}>Invalid Input</h1>
        </div>
        <div>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default OverLay
