import './index.css'

const TabItem = props => {
  const {details, changeState, isActive} = props
  const {id, buttonText} = details
  const classEl = isActive === true ? 'activeEl' : 'notActive'

  const ok = () => {
    changeState(id)
  }

  return (
    <li className="button-list">
      <button type="button" className={classEl} onClick={ok}>
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
