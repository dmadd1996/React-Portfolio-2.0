import React from 'react';
import './resume.css'

function Resume() {
  return (
    <section className="resumeBody my-5" >
        <div id="doc2" className="yui-t7">
		<div id="inner">

			<div id="hd">
				<div className="yui-gc">
					<div className="yui-u first">
						<h1>Derek Madderom</h1>
						<h2>Web Developer, IT Technician </h2>
					</div>

					<div className="yui-u">
						<div className="contact-info">
							<h3><a id="pdf" href="Resume.pdf" download="Resume">Download PDF</a></h3>
							<h3><a href="mailto:dmadd1996@gmail.com">dmadd1996@gmail.com</a></h3>
							<h3>(920) - 988-3064</h3>
							<h3><a id="portfolio" href="https://react-portfolio-derek-madderom.herokuapp.com/"
									target="_blank">My Portfolio --(tinyurl.com/5dxnp3h7)</a></h3>
						</div>
					</div>
				</div>
			</div>	<div id="bd">
				<div id="yui-main">
					<div className="yui-b">

						<div className="yui-gf">
							<div className="yui-u first">
								<h2>Profile</h2>
							</div>
							<div className="yui-u">
								<h4 className="enlarge">
									A lifelong learner, I am inspired to create computer systems that bring my
									background in psychology to the forefront of intuitive web design. My experiences
									include general IT, front and back-end web design, server development and
									maintenance. Being a team-player and a fair leader are the standards with which I
									measure my character.
								</h4>
							</div>
						</div>

						<div className="yui-gf">
							<div className="yui-u first">
								<h2>Skills</h2>
							</div>
							<div className="yui-u">

								<div className="talent">
									<h2>Web Design</h2>
									<h4>Combining technical skills with an understanding of cognitive science to create
										intuitive web applications. Passionate about delivering elegant and
										user-friendly solutions. Experienced in improving the user experience.</h4>
								</div>

								<div className="talent">
									<h2>IT Experience</h2>
									<h4>Experienced IT professional, able to complete projects independently. Proficient
										in multiple technologies and able to solve problems creatively. Committed to
										delivering high-quality results and improving technical abilities. </h4>
								</div>

								<div className="talent">
									<h2>Leadership Skills</h2>
									<h4>Experienced manager with diverse background in retail and restaurant operations.
										Skilled in leading teams and ensuring customer satisfaction. Committed to
										promoting a positive work environment and driving growth and success.</h4>
								</div>
							</div>
						</div>

						<div className="yui-gf">
							<div className="yui-u first">
								<h2>Technical</h2>
							</div>
							<div className="yui-u">
								<ul className="talent">
									<li>HTML5</li>
									<li>CSS3</li>
									<li>Javascript</li>
									<li>Bootstrap</li>
									<li className="last">Jquery</li>
								</ul>

								<ul className="talent">
									<li>Fetch API</li>
									<li>JSON</li>
									<li>NODE.js</li>
									<li>OOP</li>
									<li className="last">Express</li>
								</ul>

								<ul className="talent">
									<li>SQL</li>
									<li>ORM</li>
									<li>MongoDB</li>
									<li>Bootstrap</li>
									<li className="last">React</li>
								</ul>
							</div>
						</div>

						<div className="yui-gf">

							<div className="yui-u first">
								<h2>Experience</h2>
							</div>

							<div className="yui-u">

								<div className="job">
									<h2>BridgeWay To Independence</h2>
									<h3>IT Director</h3>
									<h4>2019-2022</h4>
									<h5>Streamlined terabytes of data archival systems, implemented email security
										measures and employee website portal validation. Worked on in-house data server
										systems and solved any tech challenges that would come up in day to day
										operations. Major focuses on website maintenance, email systems, data management
										and electronic visit verification (EVV) required by the state of Minnesota.</h5>
								</div>

								<div className="job">
									<h2>Taste of Saigon, Maplewood</h2>
									<h3>Restaurant Manager</h3>
									<h4>2018-2019</h4>
									<h5>Managed food safety (MN certified). Handled scheduling, hiring and training of
										staff, as well as day to day operations of the restaurant. Kept stock and
										interfaced with distributors to keep the business running up to and during the
										pandemic.</h5>
								</div>

								<div className="job last">
									<h2>Sentry Foods</h2>
									<h3>Retail Manager</h3>
									<h4>2015-2018</h4>
									<h5>Managed scheduling and opertations for front of house staff (cashiers, floral,
										deli, customer service). Accounted for cash, payroll and recorded stock at end
										of shift. Directed customer service and implemented corporate policy </h5>
								</div>

							</div>
						</div>

						<div className="yui-gf last">

							<div className="yui-u first">
								<h2>Education</h2>
							</div>

							<div className="yui-u">

								<div className="job">
									<h2>University of Minnesota - Duluth, MN</h2>
									<h3>Applied Science - Psychology Major, Cognitive Science Minor &mdash;
										<strong>Class of 2019</strong> </h3>
								</div>

								<div className="job last">
									<h2>University of Minnesota - Minneapolis, MN</h2>
									<h3>Employer-Ready Bootcamp Certificate - Full Stack Web Development &mdash;
										<strong>2022</strong> </h3>
								</div>

							</div>
						</div>


					</div>
				</div>
			</div>	<div id="ft">
				<h4>Derek Madderom &mdash; <a href="mailto:dmadd1996@gmail.com">dmadd1996@gmail.com</a> &mdash; (920) -
					988-3064</h4>
			</div>

		</div>


	</div>  </section>
  );
}

export default Resume;