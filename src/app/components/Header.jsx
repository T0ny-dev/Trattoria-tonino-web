import "./Header.css"

function Header () {
  return (
    <div className="header">
      <div className="header_logo">
        <a href="/">
        <img src="/logo.png" alt="" />
        </a>
        <ul>
          <a href="/"><li>Inicio</li></a>
          <a href="/menu-digital"><li>Menú Digital</li></a>
        </ul>
      </div>
      <div className="header_links">
        <a href="#">+52 899 129 3399</a>
        <button className="primary_button"> <img src="/delivery.png" alt="" />Realizar Pedido</button>
      </div>
    </div>
  )
}


export default Header;