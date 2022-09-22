import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="text-center1">
        <div className='footerContainer'>
            <a className='iconDeclared' href="https://github.com/Israel2800" target="_blank" rel="noreferrer">  
                <i className="fa fa-github centerIcon iconProp"></i>
            </a>
            <a className='iconDeclared' href="https://www.linkedin.com/in/israel-aguilar-292b97243/" target="_blank" rel="noreferrer">
                <i class="fa fa-linkedin centerIcon iconProp"></i>
            </a>
            <a className='iconDeclared' href="https://stackoverflow.com/users/18821721/israel-aguilar" target="_blank" rel="noreferrer">
                <i class="fa fa-stack-overflow centerIcon iconProp"></i>
            </a>
            
        </div>
            
            <h4 className='footPhrase'>
            Made with{' '}
            <span
                className="emoji"
                role="img"
                aria-label="brain"
                aria-hidden="false"
            >
                🧠
            </span>{' '}
            by Group 7
            </h4>
        
      </div>
    </footer>
  );
};

export default Footer;
