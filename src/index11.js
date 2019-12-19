
// import head from './head';
// import content from './content';
import pic from './pic.jpg';
import style from './index.scss';
import createPic from './createPic';
createPic();
var img =new Image();
	img.src =pic;
	img.classList.add(style.pic);
	var roo=document.getElementById('root');
	roo.append(img);











// dom.append('<div>head</div>')