import './index.css'

const singleApp = props => {
  const {singleAppDetails, delete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = singleAppDetails
  const deleting = () => {
    delete id
  }
  return (
    <li className="single-container">
      <h1>{timeAccessed}</h1>
      <img src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <p className="domain-setting">{domainUrl}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        className="delete-icon-setting"
        alt="delete"
        onClick={deleting}
      />
    </li>
  )
}
export default singleApp
