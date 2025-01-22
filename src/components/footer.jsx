import "../styles/footerStyle.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="contact-info">
                <p>Rue Al Antaqui, Marrakech 40000</p>
                <p>05243-02036</p>
                <p><a href="mailto:jihanedouggouj@gmail.com">jihanedouggouj@gmail.com</a></p>
            </div>
            <div className="social-media">
                <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/images/DrLogo.png`} alt="Logo" />
                </div>
            </div>
            <div className="developer-credit">
                <p>© 2025 Dr. Jihane Douggouj. Tous droits réservés.</p>
                <p>Site développé par Zakaria Ait Ahmad Ouali.</p>
            </div>
        </footer>
    );
}
