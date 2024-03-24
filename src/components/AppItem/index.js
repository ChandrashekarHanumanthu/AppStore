import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails

  return (
    <li className="list-card">
      <img src={imageUrl} alt={appName} className="image" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
