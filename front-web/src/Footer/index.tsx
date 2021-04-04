import './styles.css';
import {ReactComponent as GitHubIcon} from './github.svg';
import {ReactComponent as Linkedin} from './linkedin.svg';
import {ReactComponent as Facebook} from './facebook.svg';
function Footer(){
    return(
        <footer className="main-footer">
            App para desenvolvimento pessoal - Lucas Abrantes
            <div className="footer-icons">
              <a href="https://github.com/lucasabrantes1" target="_new">
                <GitHubIcon/>
              </a>
              <a href="https://www.linkedin.com/in/lucas-silva-dantas-abrantes-18434b138/" target="_new">
                <Linkedin/>
              </a>
              <a href="https://www.facebook.com/lucasabrantess" target="_new">
                  <Facebook/>
              </a>    
            </div>
        </footer>
    )
}

export default Footer;