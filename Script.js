const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const question = document.getElementById('question');
const gif = document.getElementById('gif');
const btnGroup = document.getElementById('btn-group');

// Khi người ấy bấm nút "Đồng ý"
yesBtn.addEventListener('click', () => {
    // Đổi câu hỏi thành lời cảm ơn/yêu thương
    question.innerHTML = "Mình biết ngay mà! Yêu cậu nhiều lắm ❤️❤️❤️";
    
    // Đổi ảnh GIF thành ảnh ôm nhau/hạnh phúc
    gif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
    
    // Ẩn các nút bấm đi
    btnGroup.style.display = 'none';
});

// Khi con trỏ chuột chạm vào nút "Từ chối"
noBtn.addEventListener('mouseover', () => {
    // Tính toán vị trí ngẫu nhiên trên màn hình
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    // Áp dụng vị trí mới cho nút "Từ chối"
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

// Đề phòng người ấy thao tác trên điện thoại (chạm vào màn hình thay vì dùng chuột)
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Ngăn chặn việc bấm được
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});
