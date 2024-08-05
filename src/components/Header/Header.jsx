import './Style.css'

const Header = (props) => {
  const {title, description} = props
  return (
    <header>
      <h1 className="fs-1">{title}</h1>
      <p className="fs-5">{description}</p>
    </header>
  )
}

export default Header