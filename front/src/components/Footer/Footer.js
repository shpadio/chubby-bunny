import React from 'react';
import footer from '../../footer.png';

function Footer() {
  return (
        <footer>
            <div style={{ position: 'absolute', right: '50px' }}>
                <img src={footer} alt={'footer'} style={{ maxWidth: '100%', height: '100px' }}/>
            </div>
        </footer>
  );
}

export default Footer;
