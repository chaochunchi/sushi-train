// 價格配置
const prices = {
    standard: 3000,
    premium: 5000,
    luxury: 8000
};

// 當座位等級改變時更新價格
document.addEventListener('DOMContentLoaded', function() {
    const seatClassSelect = document.getElementById('seatClass');
    const passengersSelect = document.getElementById('passengers');
    
    if (seatClassSelect) {
        seatClassSelect.addEventListener('change', updatePrice);
    }
    
    if (passengersSelect) {
        passengersSelect.addEventListener('change', updatePrice);
    }
    
    // 設定最小日期為今天
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
    
    // 訂票表單提交
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }
});

// 更新價格
function updatePrice() {
    const seatClass = document.getElementById('seatClass').value;
    const passengers = parseInt(document.getElementById('passengers').value) || 1;
    
    if (seatClass && prices[seatClass]) {
        const price = prices[seatClass];
        const totalPrice = price * passengers;
        
        document.getElementById('seatPrice').textContent = '¥' + price.toLocaleString('ja-JP');
        document.getElementById('passengerCount').textContent = passengers;
        document.getElementById('totalPrice').textContent = '¥' + totalPrice.toLocaleString('ja-JP');
    } else {
        document.getElementById('seatPrice').textContent = '¥0';
        document.getElementById('totalPrice').textContent = '¥0';
    }
}

// 處理訂票提交
function handleBookingSubmit(e) {
    e.preventDefault();
    
    // 收集表單數據
    const formData = {
        departure: document.getElementById('departure').value,
        destination: document.getElementById('destination').value,
        date: document.getElementById('date').value,
        passengers: document.getElementById('passengers').value,
        seatClass: document.getElementById('seatClass').value,
        mealPlan: document.getElementById('mealPlan').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        totalPrice: document.getElementById('totalPrice').textContent
    };
    
    // 驗證出發地和目的地不同
    if (formData.departure === formData.destination) {
        alert('出發城市和目的地必須不同');
        return;
    }
    
    // 模擬訂票確認
    console.log('訂票信息:', formData);
    
    // 顯示成功消息
    alert(`訂票成功！\n\n姓名: ${formData.name}\n路線: ${formData.departure} → ${formData.destination}\n日期: ${formData.date}\n乘客數: ${formData.passengers}\n總價: ${formData.totalPrice}\n\n確認信息已發送至 ${formData.email}`);
    
    // 重置表單
    document.getElementById('bookingForm').reset();
    document.getElementById('totalPrice').textContent = '¥0';
    document.getElementById('seatPrice').textContent = '¥0';
}

// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 導航連結的平滑滾動
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.includes('#')) {
            e.preventDefault();
            const targetId = href.split('#')[1];
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});