// @ts-check

// https://getbootstrap.com/docs/5.0/components/toasts/

const toastId = "toast"
let toast = document.getElementById(toastId)

// if (!toast) {
//   toast = document.createElement("div")
//   toast.id = "toast"
//   toast.innerHTML = `
//             <div id="toast"></div>
//             <button id="achievement-close">Закрыть</button>
//         `
//   document.body.appendChild(toast)
// }

// /* Заполняем текст */
// document.getElementById("achievement-text").textContent =
//   `Вы получили достижение: ${window.story.state.passages["ShowAchievement"].variables.$achievement}`

// /* Показать */
// toast.classList.add("show")

// /* Обработчик кнопки */
// document.getElementById("achievement-close").onclick = () => {
//   toast.classList.remove("show")
// }

// /* Автоматическое закрытие через 5 сек */
// setTimeout(() => {
//   toast.classList.remove("show")
// }, 5000)
