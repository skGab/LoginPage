import './social.scss'

import git from '../../icons/git-icon.png'
import insta from '../../icons/insta-icon.png'
import link from '../../icons/link-icon.png'

export function Social() {
    return(
        <div className="social__container">
            <h3 className='social__title'>or sing up using</h3>

            <div className="social__icons">
                <img className='social__icons--size' src={git} alt="icone github" />
                <img className='social__icons--size' src={link} alt="icone linkediin" />
            </div>
        </div>
    )
}