import './styles/footer.css'
import Linkedin from '../assets/linkedin.png';
import GitHub from '../assets/github.png';

function Footer() {
    return(
        <>
            <footer>   
                <a href="https://www.linkedin.com/in/juan-camilo-cartagena-machado-39b126214/" target="_blank"><img src={Linkedin} alt="Linkedin"/></a>
                <a href="https://github.com/Sevigo-code" target='_blank'><img src={GitHub} alt="GitHub" /></a>
            </footer>
        </>
    )
}

export default Footer;