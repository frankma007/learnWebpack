function Content(){
	var dom =document.getElementById('root');
	var content =document.createElement('content');
	content.innerText='content';
	dom.append(content);
}
// export default Content;
module.exports =Content;