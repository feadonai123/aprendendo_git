import './produtos.css'
import Logo from './img/logo.png'
import Seta1 from './img/seta1.png'
import Cesta from './img/cesta.png'

export default function App() {
  return (
    <span className="flex">
        <span className="logo block">
			<a href=''><img src={Logo}></img></a>
		</span>

        <span className="link_verInstituicao block">
			<a href=''>ver instituição</a>
		</span>

        <span className="dropdown block">
			<label>categorias de doação<img src={Seta1}></img></label>
			<ul>
				<a href=''><li>item1</li></a>
				<a href=''><li>item2</li></a>
				<a href=''><li>item3</li></a>
				<a href=''><li>item4</li></a>
			</ul>
		</span>

		<span className="link_cesta block">
			<a className="flex" href=''>ver cesta<img src={Cesta}></img></a>
		</span>
    </span>
  );
}
