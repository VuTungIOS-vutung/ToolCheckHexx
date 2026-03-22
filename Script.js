document.addEventListener('DOMContentLoaded', () => {
    // 1. Loading Screen
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
            document.querySelector('.main-container').classList.add('loaded');
        }, 500);
    }, 1000);

    // 2. Theme Toggle (Dark/Light Mode)
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    themeBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.replace('dark-mode', 'light-mode');
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            body.classList.replace('light-mode', 'dark-mode');
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    });

    // 3. Lofi Music Player (Tuân thủ UX: tắt mặc định, âm lượng 30%)
    const musicBtn = document.getElementById('music-toggle');
    const bgMusic = document.getElementById('bg-music');
    bgMusic.volume = 0.3; // Âm lượng thấp dễ chịu
    let isPlaying = false;

    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.classList.remove('playing');
            musicBtn.innerHTML = '<i class="fa-solid fa-music"></i>';
        } else {
            bgMusic.play();
            musicBtn.classList.add('playing');
            musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    });

    // 4. Search Functionality
    const searchInput = document.getElementById('search-input');
    const linkCards = document.querySelectorAll('.link-card');

    searchInput.addEventListener('input', (e) => {
        const text = e.target.value.toLowerCase();
        linkCards.forEach(card => {
            const title = card.querySelector('h3').innerText.toLowerCase();
            const desc = card.querySelector('p').innerText.toLowerCase();
            if (title.includes(text) || desc.includes(text)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // 5. Category Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            linkCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 6. Copy to Clipboard & Toast
    const copyBtns = document.querySelectorAll('.copy-btn');
    const toast = document.getElementById('toast');

    copyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Ngăn click lan ra thẻ cha
            const url = btn.getAttribute('data-url');
            navigator.clipboard.writeText(url).then(() => {
                showToast();
            });
        });
    });

    function showToast() {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }
});
