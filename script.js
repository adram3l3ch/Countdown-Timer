const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

let endDate = new Date("nov 8 2021").getTime();
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

const getRemaining = () => {
	let today = new Date().getTime();
	let remainingTime = endDate - today;
	if (remainingTime < 0) {
		endDate += 10 * oneDay;
	}
	let remainingDays = parseInt(remainingTime / oneDay);
	let remainingHours = parseInt((remainingTime % oneDay) / oneHour);
	let remainingMinutes = parseInt(
		((remainingTime % oneDay) % oneHour) / oneMinute
	);
	let remainingSeconds = parseInt(
		(((remainingTime % oneDay) % oneHour) % oneMinute) / 1000
	);

	days.textContent = remainingDays < 10 ? "0" + remainingDays : remainingDays;
	hours.textContent =
		remainingHours < 10 ? "0" + remainingHours : remainingHours;
	minutes.textContent =
		remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes;
	seconds.textContent =
		remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
};
setInterval(getRemaining, 1000);
