function Sidebar(){
	var dom =document.getElementById('root');
	var sidebar =document.createElement('sidebar');
	sidebar.innerText='sidebar';
	dom.append(sidebar);
}
// export default Sidebar;
module.exports =Sidebar;