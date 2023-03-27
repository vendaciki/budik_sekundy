/*
Umožněte uživateli zadat počet vteřin skrze připravené textové poličko. K získání hodnoty z políčka použijte vlastnost value. Nezapomeňte obsah políčka zkonvertovat na číslo. Minutku spusťte tlačítkem Start.

Zařiďte, aby minutka správně odpočítávala vteřiny a začala zvonit ve chvíli, kdy dosáhne nuly. Pokud si věříte, zkuste celý program napsat rovnou bez nápovědy. Pokud malinko ztrácíte půdu pod nohama, následujte tyto kroky.

Vytvořte si proměnou time, do které uložíte počáteční počet vteřin zadaný uživatelem.
Při kliknutí na Start nastavte časovač pomocí setInterval. Ten se bude opakovat každou vteřinu a pokaždé sníží hodnotu v proměnné time o jedna.
Jakmile proměnná time dosáhne nuly, zapněte zvonění a zrušte časovač aby nezačal počítat do mínusu.
*/


const minutka = (event) => {
	event.preventDefault()
	let time = Number(document.querySelector(".time-input").value)

    const alarm = document.querySelector(".alarm")
    alarm.classList.remove("alarm--ring")

	const sekundy = document.querySelector(".alarm__seconds")
	sekundy.textContent = String(time)

	const odpocet = () => {
		if (time > 0) {
			time -= 1
			sekundy.textContent = String(time)
		}
		if (time <= 0) {
			clearInterval(casovac)
			alarm.classList.add("alarm--ring")
			document.querySelector("audio").play()
		}
	}
	const casovac = setInterval(odpocet, 1000)
}

const formular = document.querySelector(".controls")
formular.addEventListener("submit", minutka)