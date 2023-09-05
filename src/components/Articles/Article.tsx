import './index.css';
import Line1 from './images/Line3.png';
import Frame from './images/Frame.png';
import Post1 from './images/Post1.png';
import Post2 from './images/Post2.png';
import Post3 from './images/Post3.png';
import Post4 from './images/Post4.png';
import Post5 from './images/Post5.png';
import Post6 from './images/Post6.png';
import Post7 from './images/Post7.png';
import Post8 from './images/Post8.png';
import Post9 from './images/Post9.png';
import Post10 from './images/Post10.png';
import Post11 from './images/Post11.png';
import Post12 from './images/Post12.png';

export const Articles = () => {
	return (
		<>
			<section className='section2'>
				<article className='sec1'>
					<div className='write1'>
						<img src={Line1} alt='pictures' />
						<a href='www' className='headline'>
							Featured Article
						</a>
					</div>

					<div className='write2'>
						<img src={Frame} alt='pictures' />
						<a href='www' className='headline'>
							See All Article
						</a>
					</div>
				</article>
				<div className='Posts1'>
					<img src={Post1} alt='pictures' />
					<img src={Post2} alt='pictures' />
					<img src={Post3} alt='pictures' />
					<img src={Post4} alt='pictures' />
				</div>
				<article className='sec2'>
					<div className='write1'>
						<img src={Line1} alt='pictures' />
						<a href='www' className='headline'>
							CSS
						</a>
					</div>
					<div className='write2'>
						<img src={Frame} alt='pictures' />
						<a href='www' className='headline'>
							See All Article
						</a>
					</div>
				</article>
				<div className='Posts2'>
					<img src={Post5} alt='pictures' />
					<img src={Post2} alt='pictures' />
					<img src={Post6} alt='pictures' />
					<img src={Post3} alt='pictures' />
				</div>
				<article className='sec3'>
					<div className='write1'>
						<img src={Line1} alt='pictures' />
						<a href='www' className='headline'>
							Javascript
						</a>
					</div>
					<div className='write2'>
						<img src={Frame} alt='pictures' />
						<a href='www' className='headline'>
							See All Article
						</a>
					</div>
				</article>
				<div className='Posts3'>
					<img src={Post7} alt='pictures' />
					<img src={Post1} alt='pictures' />
					<img src={Post8} alt='pictures' />
					<img src={Post9} alt='pictures' />
				</div>
				<article className='sec4'>
					<div className='write1'>
						<img src={Line1} alt='pictures' />
						<a href='www' className='headline'>
							React JS
						</a>
					</div>
					<div className='write2'>
						<img src={Frame} alt='pictures' />
						<a href='www' className='headline'>
							See All Article
						</a>
					</div>
				</article>
				<div className='Posts4'>
					<img src={Post10} alt='pictures' />
					<img src={Post11} alt='pictures' />
					<img src={Post12} alt='pictures' />
					<img src={Post4} alt='pictures' />
				</div>
				<button className='smal1'>More Article</button>
			</section>
		</>
	);
};