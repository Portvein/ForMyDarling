// Функция для инициализации музыки
function initMusic() {
    // Проверяем, нет ли уже плеера на странице
    if (!document.getElementById('bg-music')) {
        const audio = document.createElement('audio');
        audio.id = 'bg-music';
        audio.loop = true;
        
        // Определяем путь к музыке (если мы в папке objects, нужно выйти на уровень выше)
        const isSubDir = window.location.pathname.includes('/objects/');
        audio.src = isSubDir ? '../lovely_times.mp3' : 'lovely_times.mp3';
        
        document.body.appendChild(audio);

        // Включаем музыку при первом клике (требование браузеров)
        document.addEventListener('click', () => {
            audio.play().catch(e => console.log("Браузер заблокировал звук:", e));
        }, { once: true });
    }
}

// Запускаем при загрузке страницы
window.addEventListener('load', initMusic);
