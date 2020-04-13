const bar = document.getElementById('bar');
const menu = document.getElementById('menu');
const caret = document.getElementById('c-dp');
const drpdwn = document.getElementById('s-dp-list');
const year = document.getElementById('date');
const login = document.getElementById('login');
const loginCopy = document.getElementById('login1');
const login3 = document.getElementById('login2');
const register = document.getElementById('register');
const registerCopy = document.getElementById('register1');
const register3 = document.getElementById('register2');
const registerBox = document.getElementById('registration');
const registerBox2 = document.getElementById('registration2');



let output = new Date().getFullYear();
year.innerHTML = output;
year.style.color = '#ffffff';

const style = () => {
	menu.style.display = 'block';
};
bar.addEventListener('click', style);

const caretDrop = function () {
	drpdwn.classList.toggle('open-drpdwn');
	caret.classList.toggle('open-arrow');
};

const noDisplay = function () {
	registerBox.style.display = 'none';
	registerBox2.style.display = 'none';
};

caret.addEventListener('click', caretDrop, true);

window.addEventListener('mouseup', (event) => {
	// if (event.target != registerBox && event.target != registerBox) {
	// 	registerBox.style.display = 'none';
	// }
	// if (event.target != registerBox2 && event.target != registerBox2) {
	// 	registerBox2.style.display = 'none';
	// }
	
	if (event.target != menu && event.target.parentNode != menu ) {
		menu.style.display = 'none';
	}
});
