// Ждем полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    // Чиним кнопку на главной
    const heroBtn = document.getElementById('mainActionBtn');
    if(heroBtn) {
        heroBtn.addEventListener('click', () => {
            showPage('prices');
        });
    }

    // Инициализация отзывов
    fillTrack('track-1', 22);
    fillTrack('track-2', 22);
});

function showPage(id) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    const target = document.getElementById('page-' + id);
    if(target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
}

function fillTrack(trackId, count) {
    const track = document.getElementById(trackId);
    if(!track) return;
    
    const reviewsData = [
        "Тараканы исчезли. Рекомендую!",
        "Чисто, быстро, без лишних вопросов.",
        "Мастер приехал вовремя. Результат 10/10.",
        "Лучшая цена в городе.",
        "Заказывала уборку, все блестит!"
    ];

    for(let i=0; i < count; i++) {
        const card = document.createElement('div');
        card.className = 'rev-card';
        card.innerHTML = `
            <div class="stars">★★★★★</div>
            <p>${reviewsData[Math.floor(Math.random()*reviewsData.length)]}</p>
        `;
        track.appendChild(card);
    }
    track.innerHTML += track.innerHTML;
}

function openOrderModal(service, detailPlaceholder) {
    document.getElementById('selected-service-name').innerText = "КАНАЛ: " + service.toUpperCase();
    const detailInput = document.getElementById('dynamic-detail');
    detailInput.placeholder = detailPlaceholder;
    
    document.getElementById('orderModal').style.display = 'flex';
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
    document.getElementById('order-form-step').style.display = 'block';
    document.getElementById('order-success-step').style.display = 'none';
}

function submitFinalOrder() {
    const phone = document.getElementById('phone').value;
    if(phone.length < 6) return alert("ОШИБКА: Проверьте номер");
    
    document.getElementById('order-form-step').style.display = 'none';
    document.getElementById('order-success-step').style.display = 'block';
}
