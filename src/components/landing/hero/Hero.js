
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Hero.css'
import hero from '../../../images/sections/hero.svg'

class Hero extends Component
{
	render()
	{
		return (
			<div className = 'hero py-5 mb-5'>
				<div className = 'container'>
					<div className = 'row align-items-center'>
						<div className = 'c col-lg-6 col-12'>
							<div className = 'left-side mb-lg-0 mb-5 text-lg-start text-center'>
								<h3 className = 'title text-capitalize'>welcome to <span>MathWise</span> !</h3>
								<p className = 'sub-title text-muted text-capitalize'>where your future begins</p>
								<p className = 'desc pb-3'>
								Unlocking the Power of PEMDAS: Nurturing Grade School Math Mastery with MathWise - Where Learning Meets Fun, One Parenthesis at a Time.
								</p>
								<div className = 'buttons'>
									<Link className = 'btn btn-danger text-capitalize me-3 shadow' to = '/about'>read more<i className="ms-2 fas fa-chevron-right"></i></Link>
									
									<a href="https://math-wise-quiz-6wme6xewv-allendg.vercel.app"  className = 'btn btn-outline-danger text-capitalize shadow'> Math Quiz<i className="ms-2 fas fa-envelope"></i></a>

									<a href="https://math-wise-quiz-6wme6xewv-allendg.vercel.app"  className = 'btn btn-outline-danger text-capitalize shadow'> Game1<i className="ms-2 fas fa-envelope"></i></a>

									<a href="https://math-wise-quiz-6wme6xewv-allendg.vercel.app"  className = 'btn btn-outline-danger text-capitalize shadow'> Game2<i className="ms-2 fas fa-envelope"></i></a>
								</div>
							</div>
						</div>

						<div className = 'c col-lg-6 col-12'>
							<div className  = 'right-side text-lg-end text-center'>
								<img className = 'w-75 img-fluid' src = {hero} alt = 'hero' />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Hero