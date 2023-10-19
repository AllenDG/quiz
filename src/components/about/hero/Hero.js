
import React, {Component} from 'react'
import './Hero.css'
import {Link} from 'react-router-dom'
import about from '../../../images/sections/about.svg'

class Hero extends Component
{
	render()
	{
		return (
			<div className = 'hero py-2 mb-5'>
				<div className = 'container'>
					<div className = 'title pt-1 pb-5 text-center'>
						<h4 className = 'sub-title text-capitalize'>about <span>us</span></h4>
					</div>
					<div className = 'row align-items-center'>
						<div className = 'c col-lg-6 col-12'>
							<div className = 'left-side mb-lg-0 mb-5 text-lg-start text-center'>
								<h5 className = 'title text-capitalize mb-3'>we are <span>Math Wise</span></h5>
								<p className  = 'desc mb-lg-4 mb-5'>Math Wise is an educational app that helps elementary school students learn the PEMDAS order of operations in mathematics through interactive lessons, practice exercises, step-by-step solutions, and personalized learning, making math enjoyable and accessible for young learners.</p>
							</div>
						</div>
						<div className = 'c col-lg-6 col-12'>
							<div className = 'right-side text-lg-end text-center'>
								<img className = 'w-75 img-fluid mb-5' src = {about} alt = 'about' />
								<div className = 'mx-auto dc text-center'>
									<Link className = 'cources text-capitalize' to = '/courses'>discover our courses <i className = 'fas fa-arrow-right ms-2'></i></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Hero
