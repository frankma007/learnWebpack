import pic from './pic.jpg';
import style from './index.scss';
function createPic(){
	var img =new Image();
	img.src =pic;
	img.classList.add(style.pic);
	var roo=document.getElementById('root');
	roo.append(img);

}
export default createPic;