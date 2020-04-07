const bar = document.getElementById('bar');
const menu = document.getElementById('menu');
const year = document.getElementById('date');
const login = document.getElementById('login');
const loginCopy = document.getElementById('login1');
const login3 = document.getElementById('login2');
const register = document.getElementById('register');
const registerCopy = document.getElementById('register1');
const register3 = document.getElementById('register2');
const registerBox = document.getElementById('registration');
const registerBox2 = document.getElementById('registration2');

const options = {
	type: 'carousel',
	perView: 3,
	startAt: 0,
	breakpoints: {
		800: {
			perView: 2
		},
		600: {
			perView: 1
		}
	}
};
new Glide('.glide', options).mount();

let output = new Date().getFullYear();
year.innerHTML = output;
year.style.color = '#ffffff';

function toggleDropdown(dp_id, arr_id) {
	document.getElementById(dp_id).classList.toggle('s-dropdown-opened');
	document.getElementById(arr_id).classList.toggle('s-arr-opened');
}

function setValue(input_id, value) {
	input = document.getElementById(input_id);
	input.value = value;
	input.click();
}

const style = () => {
	menu.classList.toggle('active');
};
bar.addEventListener('click', () => {
	style();
});
login.addEventListener('click', () => {
	registerBox.style.display = 'none';
	registerBox2.style.display = 'none';
});

loginCopy.addEventListener('click', () => {
	registerBox.style.display = 'block';
	registerBox2.style.display = 'none';
});
login3.addEventListener('click', () => {
	registerBox.style.display = 'none';
	registerBox2.style.display = 'none';
});
register.addEventListener('click', () => {
	registerBox2.style.display = 'none';
	registerBox.style.display = 'none';
});
registerCopy.addEventListener('click', () => {
	registerBox2.style.display = 'none';
	registerBox.style.display = 'none';
});
register3.addEventListener('click', () => {
	registerBox2.style.display = 'none';
	registerBox.style.display = 'none';
});
window.addEventListener('click', event => {
	if (event.target == registerBox) {
		registerBox.style.display = 'none';
	}
	if (event.target == registerBox2) {
		registerBox2.style.display = 'none';
	}
	if (event.target == menu) {
		menu.classList.remove('active');
	}
});
