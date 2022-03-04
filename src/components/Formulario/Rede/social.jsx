import './social.scss'

import git from '../../../icons/git-icon.png'
import link from '../../../icons/link-icon.png'

export function Social({currentForm}) {
    return(
        <div className="social__container">
            <h3 className='social__title'>or {currentForm} using</h3>

            <div className="social__icons">
                <img className='social__icons--size space' src={git} alt="icone github" />
                <img className='social__icons--size link' src={link} alt="icone linkediin" />
            </div>
        </div>
    )
}