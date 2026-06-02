// ===== 壹司列車投資提案簡報控制系統 =====

class ProposalPresentation {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = document.querySelectorAll('.slide').length;
        this.slides = document.querySelectorAll('.slide');
        this.isTransitioning = false;
        this.autoFullscreen();
        this.initEventListeners();
        this.updateUI();
    }

    // 自動進入全螢幕
    autoFullscreen() {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen().catch(err => {
                console.log('全螢幕請求被拒絕:', err);
            });
        }
    }

    // 初始化事件監聽
    initEventListeners() {
        // 按鈕控制
        document.querySelector('.prev-btn').addEventListener('click', () => this.prevSlide());
        document.querySelector('.next-btn').addEventListener('click', () => this.nextSlide());

        // 鍵盤控制 - 左右箭頭
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
            if (e.key === 'Escape') this.exitFullscreen();
        });

        // 觸控滑動支援
        let touchStartX = 0;
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });
        document.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            if (touchStartX - touchEndX > 50) this.nextSlide();
            if (touchEndX - touchStartX > 50) this.prevSlide();
        });

        // 點擊控制
        document.addEventListener('click', (e) => {
            if (e.clientX < window.innerWidth / 3) this.prevSlide();
            if (e.clientX > (window.innerWidth * 2) / 3) this.nextSlide();
        });
    }

    // 前往下一頁
    nextSlide() {
        if (this.isTransitioning) return;
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateSlides();
    }

    // 前往上一頁
    prevSlide() {
        if (this.isTransitioning) return;
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateSlides();
    }

    // 更新幻燈片顯示
    updateSlides() {
        this.isTransitioning = true;
        
        // 移除所有活動狀態
        this.slides.forEach(slide => slide.classList.remove('active', 'prev'));

        // 設置當前幻燈片為活動
        this.slides[this.currentSlide].classList.add('active');

        // 設置上一張為 prev 狀態（用於動畫）
        const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.slides[prevIndex].classList.add('prev');

        this.updateUI();

        // 動畫完成後重置過渡狀態
        setTimeout(() => {
            this.isTransitioning = false;
        }, 600);
    }

    // 更新 UI 元素
    updateUI() {
        // 更新頁碼
        document.querySelector('.current-slide').textContent = this.currentSlide + 1;
        document.querySelector('.total-slides').textContent = this.totalSlides;

        // 更新進度條
        const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
        document.querySelector('.progress-bar').style.width = progress + '%';

        // 動畫項目計數設置（用於級聯動畫延遲）
        this.setAnimationIndices();
    }

    // 設置所有動畫索引
    setAnimationIndices() {
        const contentItems = document.querySelectorAll('.slide.active .point-item');
        contentItems.forEach((item, index) => {
            item.style.setProperty('--item-index', index);
        });

        const metricCards = document.querySelectorAll('.slide.active .metric-card, .slide.active .phase, .slide.active .metric');
        metricCards.forEach((card, index) => {
            card.style.setProperty('--card-index', index);
        });

        const audienceCards = document.querySelectorAll('.slide.active .audience-card');
        audienceCards.forEach((card, index) => {
            card.style.setProperty('--card-index', index);
        });

        const painPoints = document.querySelectorAll('.slide.active .pain-point-item');
        painPoints.forEach((item, index) => {
            item.style.setProperty('--item-index', index);
        });

        const methodSteps = document.querySelectorAll('.slide.active .method-step');
        methodSteps.forEach((step, index) => {
            step.style.setProperty('--step-index', index);
        });

        const highlights = document.querySelectorAll('.slide.active .highlight-item');
        highlights.forEach((item, index) => {
            item.style.setProperty('--item-index', index);
        });

        const phases = document.querySelectorAll('.slide.active .phase');
        phases.forEach((phase, index) => {
            phase.style.setProperty('--phase-index', index);
        });

        const successMetrics = document.querySelectorAll('.slide.active .metric');
        successMetrics.forEach((metric, index) => {
            metric.style.setProperty('--metric-index', index);
        });

        const oppItems = document.querySelectorAll('.slide.active .opp-item');
        oppItems.forEach((item, index) => {
            item.style.setProperty('--item-index', index);
        });

        const compItems = document.querySelectorAll('.slide.active .comp-item');
        compItems.forEach((item, index) => {
            item.style.setProperty('--card-index', index);
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
    new ProposalPresentation();
});

// ===== 防止屏幕睡眠 =====
document.addEventListener('mousemove', () => {
    document.body.style.cursor = 'default';
});

// ===== ��加鍵盤提示 =====
window.addEventListener('load', () => {
    console.log('壹司列車投資提案簡報已就緒！');
    console.log('控制方式：');
    console.log('→ 鍵盤左右箭頭 / 滑鼠點擊 / 觸控滑動');
    console.log('→ ESC 鍵退出全螢幕');
});