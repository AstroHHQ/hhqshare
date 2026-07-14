// 照片数据 - 请在这里添加你的照片信息
const photos = [
    // 星空
    { id: 1, src: 'images/star-1.jpg', title: '星空', category: 'star' },
    
    // 人文
    { id: 2, src: 'images/humanity-2.jpg', title: '人文', category: 'humanity' },
    
    // 黑白
    { id: 3, src: 'images/bw-1.jpg', title: '黑白', category: 'bw' },
    
    // 人像
    { id: 4, src: 'images/portrait-1.jpg', title: '人像', category: 'portrait' },
    
    // 风光
    { id: 5, src: 'images/landscape.jpg', title: '风光', category: 'landscape' },
];

// 分类标签映射
const categoryLabels = {
    star: '星空',
    architecture: '建筑',
    humanity: '人文',
    bw: '黑白',
    portrait: '人像',
    landscape: '风光'
};

// DOM 元素
const gallery = document.getElementById('gallery');
const navLinks = document.querySelectorAll('.nav-link');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

let currentPhotoIndex = 0;
let currentFilter = 'all';

// 初始化画廊
function initGallery() {
    renderPhotos(photos);
    setupEventListeners();
}

// 渲染照片
function renderPhotos(photosToRender) {
    gallery.innerHTML = '';
    
    photosToRender.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.category = photo.category;
        item.dataset.index = index;
        
        item.innerHTML = `
            <img src="${photo.src}" alt="${photo.title}" loading="lazy">
            <div class="gallery-item-info">
                <div class="gallery-item-title">${photo.title}</div>
                <div class="gallery-item-category">${categoryLabels[photo.category]}</div>
            </div>
        `;
        
        gallery.appendChild(item);
    });
}

// 筛选照片
function filterPhotos(category) {
    currentFilter = category;
    
    if (category === 'all') {
        renderPhotos(photos);
    } else {
        const filtered = photos.filter(photo => photo.category === category);
        renderPhotos(filtered);
    }
}

// 打开灯箱
function openLightbox(photoIndex) {
    const filteredPhotos = currentFilter === 'all' 
        ? photos 
        : photos.filter(photo => photo.category === currentFilter);
    
    currentPhotoIndex = photoIndex;
    lightboxImage.src = filteredPhotos[currentPhotoIndex].src;
    lightboxImage.alt = filteredPhotos[currentPhotoIndex].title;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭灯箱
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// 灯箱导航
function navigateLightbox(direction) {
    const filteredPhotos = currentFilter === 'all' 
        ? photos 
        : photos.filter(photo => photo.category === currentFilter);
    
    currentPhotoIndex += direction;
    
    if (currentPhotoIndex < 0) {
        currentPhotoIndex = filteredPhotos.length - 1;
    } else if (currentPhotoIndex >= filteredPhotos.length) {
        currentPhotoIndex = 0;
    }
    
    lightboxImage.src = filteredPhotos[currentPhotoIndex].src;
    lightboxImage.alt = filteredPhotos[currentPhotoIndex].title;
}

// 设置事件监听器
function setupEventListeners() {
    // 导航筛选
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.filter;
            
            // 更新活跃状态
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            filterPhotos(category);
        });
    });
    
    // 画廊点击
    gallery.addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (item) {
            const index = parseInt(item.dataset.index);
            openLightbox(index);
        }
    });
    
    // 灯箱控制
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    lightboxNext.addEventListener('click', () => navigateLightbox(1));
    
    // 键盘导航
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
        }
    });
    
    // 点击灯箱背景关闭
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initGallery);
