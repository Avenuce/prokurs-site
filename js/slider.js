var s1 = new Slider({
			sliderId : 'slider1',
			slidesToShow: 3,
			infinite: false,
		});

function Slider(settings){//передаем в него объект settings(в разметке)
	var slider = document.getElementById(settings.sliderId);// создали переменну, что бы получить объект
	//внутри него sliderContent, с ним будем работать, который будем искать внутри слайдера 								
	var sliderContent = slider.getElementByClassName('slider-content')[0];
	//Надо получить иширину, что бы выставить эллементы правильно, в правильном размере, правильном порядке
	var sliderWidth = parseFloat(getComputedStyle(sliderContent).width); // ширина ьбудет в пикселях, но может быть дробнаое число
														//поэтому округляем его до целого
	var singleSlideWidth = sliderWidth / settings.slidesToShow ;//получаем ширину одного слайда, делим его
														// на количество слайдов.
	//нужно пройтись по всем slider-item и дать им правильную ширину
	var sliderItems = slider.getElementsByClassName('slider-item'); //получили все элементы slider-item
	for (var i= 0; i < sliderItems.length; i++){
		sliderItems[i].slyle.width = singleSlideWidth + 'px';
		//для каждого элемента устанавливаем значение, которое 
		sliderItems[i].style.left = (singleSlideWidth * i) + 'px';
	}

}
