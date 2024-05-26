$(function(){
	$('.bars').on('click', function(){
		$('.nav').slideToggle(150)
	})
})
document.addEventListener('DOMContentLoaded', () => {
    const texts = ["EdisonPts", "Ютубер", "Стример", "Геймер"];
    const element = document.querySelector('.animated-text');
    let currentIndex = 0;
    let charIndex = 0;
    let isAdding = true;
    let delay = 200;

    function typeAnimation() {
        if (isAdding) {
            if (charIndex < texts[currentIndex].length) {
                element.textContent += texts[currentIndex].charAt(charIndex);
                charIndex++;
                delay = 200; // скорость добавления текста
            } else {
                isAdding = false;
                delay = 2000; // пауза перед удалением текста
            }
        } else {
            if (charIndex > 0) {
                element.textContent = texts[currentIndex].substring(0, charIndex - 1);
                charIndex--;
                delay = 100; // скорость удаления текста
            } else {
                isAdding = true;
                currentIndex = (currentIndex + 1) % texts.length;
                delay = 500; // пауза перед добавлением следующего текста
            }
        }
        setTimeout(typeAnimation, delay);
    }

    typeAnimation();
});
