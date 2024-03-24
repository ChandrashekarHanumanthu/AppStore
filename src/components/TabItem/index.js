import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const changeTab = () => {
    updateActiveTabId(tabId)
  }
  return (
    <li className="list-item">
      <button className="btn" type="button" onClick={changeTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
