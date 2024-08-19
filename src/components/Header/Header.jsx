import './Style.css'

const Header = (props) => {
  const {title, description} = props
  return (
    <header>
      <h1 className="text-3xl font-bold uppercase">{title}</h1>
      <p className="text-md">{description}</p>
    </header>
  )
}

export default Header