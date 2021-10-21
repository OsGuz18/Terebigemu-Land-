import React from 'react';
import "./footer.css";
import FaceLogo from '../assets/images/FaceLogo.png';
import twitchLogo from '../assets/images/twitchLogo.png';
import twitterLogo from '../assets/images/twitterLogo.png';
import youtubeLogo from '../assets/images/youtubeLogo.png';


function Footer(){
    return (
        <React.Fragment>
			<footer>

                <div class="container_foot">
                    <a class="to_menu" href="/">INICIO DE PÁGINA</a>
                </div>
            
                <div class="container_foot2">
            
                    <ul class="vinculos_footer">
                         <b>INFORMACIÓN</b> 
                        <li><a href="#">Acerca de</a></li>
                        <li><a href="#">Visión, Misión y Valores</a></li>
                        <li><a href="#">Trabaja con nosotros</a></li>
                        <li><a href="#">Otros recursos</a></li>
                    </ul>
            
                    <ul class="vinculos_footer">
                        <b>ATENCIÓN A CLIENTES</b> 
                        <li><a href="#">Quejas y sugerencias</a></li>
                        <li><a href="#">Soporte</a></li>
                        <li><a href="#">Garantías</a></li>
                    </ul>
            
                    <ul class="vinculos_footer">
                        <b>COMPRAS Y VENTAS</b>
                        <li><a href="#">Vender</a></li>
                        <li><a href="#">Comprar</a></li>
                        <li><a href="#">Reglas de transacción</a></li>
                    </ul>
            
                
                    <ul class="vinculos_footer_Contact">
                        <b>CONTACTO</b>
                        <div class="socialMedia">
                        <a href="#"><img src={FaceLogo} class="FaceLogo"/></a>
                        <a href="#"><img src={twitchLogo} class="twitchLogo"/></a>
                        <a href="#"><img src={twitterLogo} class="twitterLogo"/></a>
                        <a href="#"><img src={youtubeLogo} class="youtubeLogo"/></a>
                        
                        </div>
                    </ul>
            
                </div>
                
            </footer>
 
    <div class="Terms_Conditions">
         <b>Términos y condiciones | Aviso de privacidad @2021 TerebigemuLand. Todos los derechos reservados.</b>
    </div>

        </React.Fragment>
    )
}
export default Footer;