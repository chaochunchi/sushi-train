// ===== Rail Sushi Express 企業級簡報系統 =====

class RailSushiPresentation {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = document.querySelectorAll('.slide').length;
        this.isTransitioning = false;
        this.slides = document.querySelectorAll('.slide');
        
        this.init();
    }

    init() {
        this.createParticles();
        this.requestFullscreen();
        this.setupEventListeners();
        this.showSlide(0);
    }

    // 創建粒子效果
    createParticles() {
        const container = document.getElementById('particlesContainer');
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 3 + 's';
            particle.style.animation = `float ${3 + Math.random() * 4}s infinite ease-in-out`;
            container.appendChild(particle);
        }
    }

    // 請求全螢幕
    requestFullscreen() {
        const elem = document.documentElement;
        if (elem.requestFullscreen && !document.fullscreenElement) {
            elem.requestFullscreen().catch(err => {
                console.log('全螢幕請求:', err.message);
            });
        }
    }

    // 設置事件監聽
    setupEventListeners() {
        // 鍵盤控制
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') this.nextSlide();
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'Escape') this.exitFullscreen();
        });

        // 滑鼠滾輪
        document.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (e.deltaY > 0) this.nextSlide();
            else this.prevSlide();
        }, { passive: false });

        // 觸控滑動
        let touchStartX = 0;
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });
        document.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            if (touchStartX - touchEndX > 50) this.nextSlide();
            if (touchEndX - touchStartX > 50) this.prevSlide();
        });

        // 滑鼠點擊
        document.addEventListener('click', (e) => {
            if (!this.isTransitioning) {
                if (e.clientX < window.innerWidth / 3) this.prevSlide();
                else if (e.clientX > (window.innerWidth * 2) / 3) this.nextSlide();
            }
        });
    }

    // 顯示幻燈片
    showSlide(index) {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        
        // 移除活動類
        this.slides.forEach(slide => slide.classList.remove('active'));
        
        // 新增活動類
        this.slides[index].classList.add('active');
        
        // 更新頁碼
        this.updateCounter(index);
        
        // 更新進度條
        this.updateProgressBar(index);
        
        // 觸發動畫
        this.animateSlideContent(index);
        
        setTimeout(() => {
            this.isTransitioning = false;
        }, 800);
    }

    // 下一頁
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.showSlide(this.currentSlide);
    }

    // 上一頁
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.showSlide(this.currentSlide);
    }

    // 更新頁碼計數器
    updateCounter(index) {
        const current = document.querySelector('.counter-current');
        current.textContent = String(index + 1).padStart(2, '0');
    }

    // 更新進度條
    updateProgressBar(index) {
        const progressBar = document.querySelector('.progress-bar');
        const progress = ((index + 1) / this.totalSlides) * 100;
        progressBar.style.width = progress + '%';
    }

    // 動畫內容
    animateSlideContent(index) {
        const activeSlide = this.slides[index];
        
        // 動畫卡片
        const cards = activeSlide.querySelectorAll(
            '.challenge-card, .opp-item, .audience-item, .pain-item, ' +
            '.method, .highlight-card, .metric-item'
        );
        
        cards.forEach((card, i) => {
            card.style.setProperty('--index', i);
        });

        // 動畫列表項
        const listItems = activeSlide.querySelectorAll(
            '.problem-list li, .feature-list li'
        );
        
        listItems.forEach((item, i) => {
            item.style.setProperty('--index', i);
        });

        // 動畫比較表行
        const rows = activeSlide.querySelectorAll('.comp-row:not(.header)');
        rows.forEach((row, i) => {
            row.style.setProperty('--index', i);
        });

        // 動畫成功指標
        const metrics = activeSlide.querySelectorAll('.metric-item');
        metrics.forEach((metric, i) => {
            metric.style.setProperty('--index', i);
        });
    }

    // 退出全螢幕
    exitFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    }
}

// ===== 頁面加載完成後初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    new RailSushiPresentation();
    console.log('%cRail Sushi Express', 'font-size: 20px; color: #1f5aa6; font-weight: bold;');
    console.log('%c高鐵 × 迴轉壽司智慧餐飲系統簡報已啟動', 'font-size: 14px; color: #a0a0a0;');
    console.log('%c控制方式: ← → 箭頭鍵 | 滑鼠滾輪 | 觸控滑動 | ESC 退出全螢幕', 'font-size: 12px; color: #808080;');
});

// ===== GSAP 動畫增強（如果需要） =====
if (typeof gsap !== 'undefined') {
    // 註冊自訂動畫
    gsap.registerPlugin();
}