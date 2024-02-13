import React from 'react';
import Button from 'react-bootstrap/Button';
import "./FooterComponent.css"

const FooterComponent = () => {
    return (

        <div className="footer">
            <p>Copyrights:  pablomessa@gmail.com</p>
            <div className="buttonContaiener">
            <Button variant='' size="sm"><a href="https://www.instagram.com/evolucion_plant/" target='_blank'><img src="../images/instagram_f_icon-icons.com_65485.png" alt="" /></a></Button>{' '}
            <Button variant='' size="sm"><img src="../images/whatsapp-logo_icon-icons.com_57054.png" alt="" /></Button>{' '}
            <Button variant='' size="sm"><img src="../images/fb_icon-icons.com_65434.png" alt="" /></Button>{' '}
            <Button variant='' size="sm"><img src="../images/1904660-email-envelope-letter-mail-message-post-send_122510.png" alt="" /></Button>{' '}
            </div>
        </div>

    );
}
export default FooterComponent