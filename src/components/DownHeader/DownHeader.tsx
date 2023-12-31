import './index.css';
import Line3 from './images/Line3.png';
import Frame from './images/Frame.png';
import Cs from './images/css.png';
import Js from './images/js.png';
import Tailwind from './images/tailwind.png';
import Vu from './images/vue.png';
import Rec from './images/rec.png';


export const Downheader = () => {
	return (
		<>
			<section className='section1'>
				<div className='section_item1'>
					<div className='text1'>
						<img src={Line3} alt='pictures' />
						<a href='www' className='headline'>
							Browse the category
						</a>
					</div>
					<div className='text2'>
						<a href='www' className='headline'>
							see all category
						</a>
						<img src={Frame} alt='pictures' />
					</div>
				</div>
				<div className='section_item2'>
					<img src={Cs} alt='pictures' />
					<img src={Js} alt='pictures' />
					<img src={Tailwind} alt='pictures' />
					<img src={Vu} alt='pictures' />
					<div className='Card5'>
						<img src={Rec} alt='pictures' />
					</div>
				</div>
			</section>
		</>
	);
};