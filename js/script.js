// 頁面初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeBooking();
    initializeMembers();
    initializeContactForms();
});

// 訂票系統初始化
function initializeBooking() {
    const passengers = document.getElementById('passengers');
    const bookingForm = document.getElementById('bookingForm');
    const dateInput = document.getElementById('date');

    if (passengers) {
        passengers.addEventListener('change', updateBookingPrice);
    }

    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }
}

// 更新訂票價格
function updateBookingPrice() {
    const passengers = parseInt(document.getElementById('passengers').value) || 1;
    const basePrice = 850;
    let unitPrice = basePrice;
    let discount = '無';

    // 6人以上享優惠
    if (passengers >= 6) {
        unitPrice = 800;
        discount = '6人以上：¥50/人';
    }

    const totalPrice = unitPrice * passengers;

    document.getElementById('basePrice').textContent = '¥' + basePrice;
    document.getElementById('passengerCount').textContent = passengers + '人';
    document.getElementById('discount').textContent = discount;
    document.getElementById('totalPrice').textContent = '¥' + totalPrice.toLocaleString('zh-TW');
}

// 處理訂票提交
function handleBookingSubmit(e) {
    e.preventDefault();

    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const totalPrice = document.getElementById('totalPrice').textContent;

    // 驗證
    if (departure === destination) {
        alert('出發地和目的地不能相同');
        return;
    }

    // 成功訊息
    alert(`訂票成功！\n\n姓名: ${name}\n出發地: ${departure}\n目的地: ${destination}\n日期: ${date}\n人數: ${passengers}\n總價: ${totalPrice}\n\n確認信已發送至 ${email}`);

    // 重置表單
    document.getElementById('bookingForm').reset();
    updateBookingPrice();
}

// 會員表單初始化
function initializeMembers() {
    const membershipForm = document.getElementById('membershipForm');
    
    if (membershipForm) {
        membershipForm.addEventListener('submit', handleMembershipSubmit);
    }
}

// 處理會員表單
function handleMembershipSubmit(e) {
    e.preventDefault();
    alert('感謝您的註冊！歡迎成為壹司列車免費會員。\n\n確認信已發送至您的電子郵件，請查收。');
    e.target.reset();
}

// 聯絡表單初始化
function initializeContactForms() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

// 處理聯絡表單
function handleContactSubmit(e) {
    e.preventDefault();
    alert('感謝您的來信！\n\n我們已收到您的訊息，將在24小時內為您回覆。');
    e.target.reset();
}

// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.includes('#') && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
