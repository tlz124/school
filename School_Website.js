// ===================================
// SCHOOL CONFIGURATION
// Customize these settings for each school
// ===================================
const schoolConfig = {
    name: "Lincoln High School",
    mascotUrl: "mascot.png",
    motto: "Excellence in Education, Character in Action",
    founder: "John Lincoln",
    yearFounded: "1925",
    
    // Contact Information
    address: "1234 Education Drive, Springfield, IL 62701",
    phone: "(555) 123-4567",
    email: "info@lincolnhs.edu",
    
    // Leadership
    principal: "Dr. Sarah Johnson",
    vicePrincipal: "Mr. Michael Chen",
    
    // Social Media Links
    socialMedia: {
        facebook: "https://facebook.com/lincolnhs",
        twitter: "https://twitter.com/lincolnhs",
        instagram: "https://instagram.com/lincolnhs",
        youtube: "https://youtube.com/lincolnhs",
        linkedin: "https://linkedin.com/school/lincolnhs"
    },
    
    // School Colors
    colors: {
        primary: "#003366",      // Navy Blue
        secondary: "#FFD700",    // Gold
        accent: "#CC0000"        // Red
    },
    
    // Campus Photos for Carousel
    campusPhotos: [
        {
            url: "campus-1.jpg",
            alt: "Main Building Entrance"
        },
        {
            url: "campus-2.jpg",
            alt: "Athletic Field"
        },
        {
            url: "campus-3.jpg",
            alt: "Library Interior"
        },
        {
            url: "campus-4.jpg",
            alt: "Science Laboratory"
        },
        {
            url: "campus-5.jpg",
            alt: "Student Commons"
        }
    ],
    
    // News Articles
    newsArticles: [
        {
            title: "Lincoln High Wins State Championship",
            date: "December 10, 2025",
            image: "news-1.jpg",
            excerpt: "Our varsity basketball team secured the state championship title in an exciting final game against Central High. The team showed exceptional skill and teamwork throughout the season.",
            link: "#"
        },
        {
            title: "New STEM Lab Opens to Students",
            date: "December 5, 2025",
            image: "news-2.jpg",
            excerpt: "The state-of-the-art STEM laboratory is now open, featuring cutting-edge technology and equipment to enhance science and engineering education for our students.",
            link: "#"
        },
        {
            title: "Student Art Exhibition This Weekend",
            date: "December 1, 2025",
            image: "news-3.jpg",
            excerpt: "Join us this Saturday for our annual student art exhibition showcasing talented works from our visual arts program. The event is free and open to the public.",
            link: "#"
        },
        {
            title: "Community Service Day Success",
            date: "November 28, 2025",
            image: "news-4.jpg",
            excerpt: "Students and faculty participated in our annual community service day, volunteering at local organizations and making a positive impact in our community.",
            link: "#"
        },
        {
            title: "Spring Musical Auditions Announced",
            date: "November 25, 2025",
            image: "news-5.jpg",
            excerpt: "Auditions for our spring musical production of 'The Sound of Music' will be held next month. All students are encouraged to participate in this exciting production.",
            link: "#"
        },
        {
            title: "Academic Excellence Awards Ceremony",
            date: "November 20, 2025",
            image: "news-6.jpg",
            excerpt: "We celebrated the achievements of our honor roll students and National Merit Scholars at our annual academic excellence awards ceremony.",
            link: "#"
        }
    ],
    
    // School Song Audio File
    schoolSongUrl: "school-song.mp3",
    
    // Campus Buildings for 3D Map
    campusBuildings: [
        {
            name: "Main Academic Building",
            position: { x: 0, z: 0 },
            size: { width: 60, height: 40, depth: 40 },
            color: "#8B4513",
            material: "brick",
            description: "Our main academic building houses classrooms for grades 9-12, administrative offices, and the guidance department.",
            details: {
                floors: "3 Floors",
                capacity: "1,200 students",
                features: "Smart classrooms, Computer labs, Teacher offices"
            }
        },
        {
            name: "Science & Technology Center",
            position: { x: -80, z: 0 },
            size: { width: 50, height: 35, depth: 35 },
            color: "#C0C0C0",
            material: "modern",
            description: "State-of-the-art science laboratories and technology centers for physics, chemistry, biology, and computer science.",
            details: {
                floors: "2 Floors",
                capacity: "400 students",
                features: "8 Science labs, Robotics lab, Engineering workshop"
            }
        },
        {
            name: "Athletic Center",
            position: { x: 80, z: 0 },
            size: { width: 70, height: 30, depth: 50 },
            color: "#696969",
            material: "concrete",
            description: "Our comprehensive athletic facility includes a full gymnasium, fitness center, and indoor track.",
            details: {
                floors: "2 Floors",
                capacity: "800 spectators",
                features: "Full court gymnasium, Weight room, Locker facilities"
            }
        },
        {
            name: "Library & Media Center",
            position: { x: 0, z: -70 },
            size: { width: 55, height: 25, depth: 40 },
            color: "#D2691E",
            material: "brick",
            description: "Modern library featuring over 30,000 books, digital resources, study areas, and a media production studio.",
            details: {
                floors: "2 Floors",
                capacity: "300 students",
                features: "Digital library, Study rooms, Maker space"
            }
        },
        {
            name: "Performing Arts Center",
            position: { x: -80, z: -70 },
            size: { width: 60, height: 35, depth: 45 },
            color: "#8B4513",
            material: "brick",
            description: "Professional theater with 500-seat auditorium, music rooms, and practice studios.",
            details: {
                floors: "2 Floors",
                capacity: "500 seats",
                features: "Concert hall, Music studios, Drama classroom"
            }
        },
        {
            name: "Student Commons",
            position: { x: 80, z: -70 },
            size: { width: 45, height: 20, depth: 35 },
            color: "#B8860B",
            material: "modern",
            description: "Central gathering space with cafeteria, student lounge, and collaborative work areas.",
            details: {
                floors: "1 Floor",
                capacity: "600 students",
                features: "Cafeteria, Student lounge, Outdoor patio"
            }
        },
        {
            name: "Administration Building",
            position: { x: 0, z: 70 },
            size: { width: 40, height: 25, depth: 30 },
            color: "#696969",
            material: "concrete",
            description: "Administrative offices including principal, vice principal, counseling services, and registration.",
            details: {
                floors: "2 Floors",
                capacity: "N/A",
                features: "Main office, Counseling center, Conference rooms"
            }
        }
    ]
};

// ===================================
// GLOBAL VARIABLES
// ===================================
let currentSlide = 0;
let isAudioPlaying = false;
let audioElement = null;

// 3D Map Variables
let scene, camera, renderer, controls;
let buildingMeshes = [];
let labelSprites = [];
let gridHelper;
let selectedBuilding = null;
let showLabels = true;
let showGrid = true;
let qualityLevel = 'medium';

// Performance tracking
let lastTime = performance.now();
let frames = 0;
let fps = 60;

// Texture cache
let textureCache = {};

// ===================================
// INITIALIZE PAGE
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    initializeSchoolBranding();
    initializeNavigation();
    initializeCarousel();
    initializeAudioPlayer();
    loadNewsArticles();
    initializeScrollAnimations();
    
    // Initialize 3D Map
    if (typeof THREE !== 'undefined') {
        initialize3DMap();
    } else {
        console.error('Three.js library not loaded');
    }
});

// ===================================
// SCHOOL BRANDING CUSTOMIZATION
// ===================================
function initializeSchoolBranding() {
    const headerSchoolName = document.getElementById('headerSchoolName');
    if (headerSchoolName) {
        headerSchoolName.textContent = schoolConfig.name;
    }
    
    const mascotImage = document.getElementById('mascotImage');
    if (mascotImage) {
        mascotImage.src = schoolConfig.mascotUrl;
        mascotImage.alt = schoolConfig.name + " Mascot";
    }
    
    const schoolQuote = document.getElementById('schoolQuote');
    if (schoolQuote) {
        schoolQuote.textContent = `"${schoolConfig.motto}"`;
    }
    
    const founderName = document.getElementById('founderName');
    if (founderName) {
        founderName.textContent = `Founded by ${schoolConfig.founder}`;
    }
    
    const foundingYear = document.getElementById('foundingYear');
    if (foundingYear) {
        foundingYear.textContent = `Established ${schoolConfig.yearFounded}`;
    }
    
    updateFooterInfo();
    applySchoolColors();
}

function updateFooterInfo() {
    const addressElement = document.getElementById('schoolAddress');
    if (addressElement) {
        addressElement.textContent = schoolConfig.address;
    }
    
    const phoneElement = document.getElementById('schoolPhone');
    if (phoneElement) {
        phoneElement.textContent = schoolConfig.phone;
    }
    
    const emailElement = document.getElementById('schoolEmail');
    if (emailElement) {
        emailElement.textContent = schoolConfig.email;
        emailElement.href = `mailto:${schoolConfig.email}`;
    }
    
    const principalElement = document.getElementById('principalName');
    if (principalElement) {
        principalElement.textContent = schoolConfig.principal;
    }
    
    const vpElement = document.getElementById('vpName');
    if (vpElement) {
        vpElement.textContent = schoolConfig.vicePrincipal;
    }
    
    updateSocialMediaLinks();
    
    const copyrightElement = document.getElementById('footerCopyright');
    if (copyrightElement) {
        copyrightElement.textContent = `© ${new Date().getFullYear()} ${schoolConfig.name}. All rights reserved.`;
    }
}

function updateSocialMediaLinks() {
    const socialLinks = {
        facebookLink: schoolConfig.socialMedia.facebook,
        twitterLink: schoolConfig.socialMedia.twitter,
        instagramLink: schoolConfig.socialMedia.instagram,
        youtubeLink: schoolConfig.socialMedia.youtube,
        linkedinLink: schoolConfig.socialMedia.linkedin
    };
    
    for (const [id, url] of Object.entries(socialLinks)) {
        const element = document.getElementById(id);
        if (element && url) {
            element.href = url;
            element.target = "_blank";
            element.rel = "noopener noreferrer";
        }
    }
}

function applySchoolColors() {
    document.documentElement.style.setProperty('--school-primary-color', schoolConfig.colors.primary);
    document.documentElement.style.setProperty('--school-secondary-color', schoolConfig.colors.secondary);
    document.documentElement.style.setProperty('--school-accent-color', schoolConfig.colors.accent);
}

// ===================================
// NAVIGATION MENU
// ===================================
function initializeNavigation() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navSidebar = document.getElementById('navSidebar');
    const closeNav = document.getElementById('closeNav');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function() {
            navSidebar.classList.add('active');
            overlay.classList.add('active');
            hamburgerMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    function closeMenu() {
        navSidebar.classList.remove('active');
        overlay.classList.remove('active');
        hamburgerMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (closeNav) {
        closeNav.addEventListener('click', closeMenu);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                closeMenu();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.main-header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navSidebar.classList.contains('active')) {
            closeMenu();
        }
    });
}

// ===================================
// PHOTO CAROUSEL
// ===================================
function initializeCarousel() {
    const carouselImages = document.getElementById('carouselImages');
    const carouselDots = document.getElementById('carouselDots');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!carouselImages || !carouselDots) return;
    
    schoolConfig.campusPhotos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo.url;
        img.alt = photo.alt;
        img.className = 'carousel-image';
        carouselImages.appendChild(img);
        
        const dot = document.createElement('span');
        dot.className = 'carousel-dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        carouselDots.appendChild(dot);
    });
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + schoolConfig.campusPhotos.length) % schoolConfig.campusPhotos.length;
            updateCarousel();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % schoolConfig.campusPhotos.length;
            updateCarousel();
        });
    }
    
    setInterval(() => {
        currentSlide = (currentSlide + 1) % schoolConfig.campusPhotos.length;
        updateCarousel();
    }, 5000);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            currentSlide = (currentSlide - 1 + schoolConfig.campusPhotos.length) % schoolConfig.campusPhotos.length;
            updateCarousel();
        } else if (e.key === 'ArrowRight') {
            currentSlide = (currentSlide + 1) % schoolConfig.campusPhotos.length;
            updateCarousel();
        }
    });
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    const carouselImages = document.getElementById('carouselImages');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (carouselImages) {
        carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// ===================================
// AUDIO PLAYER
// ===================================
function initializeAudioPlayer() {
    audioElement = document.getElementById('schoolAudio');
    const audioToggle = document.getElementById('audioToggle');
    const volumeSlider = document.getElementById('volumeSlider');
    
    if (!audioElement) return;
    
    audioElement.src = schoolConfig.schoolSongUrl;
    audioElement.volume = 0.5;
    
    if (audioToggle) {
        audioToggle.addEventListener('click', function() {
            if (isAudioPlaying) {
                audioElement.pause();
                isAudioPlaying = false;
                audioToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
                audioToggle.classList.add('muted');
            } else {
                audioElement.play();
                isAudioPlaying = true;
                audioToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
                audioToggle.classList.remove('muted');
            }
        });
    }
    
    if (volumeSlider) {
        volumeSlider.addEventListener('input', function() {
            audioElement.volume = this.value / 100;
            
            if (audioToggle) {
                if (this.value == 0) {
                    audioToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
                } else if (this.value < 50) {
                    audioToggle.innerHTML = '<i class="fas fa-volume-down"></i>';
                } else {
                    audioToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
                }
            }
        });
    }
    
    audioElement.addEventListener('ended', function() {
        isAudioPlaying = false;
        if (audioToggle) {
            audioToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
            audioToggle.classList.add('muted');
        }
    });
}

// ===================================
// LOAD NEWS ARTICLES
// ===================================
function loadNewsArticles() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;
    
    const articlesToShow = schoolConfig.newsArticles.slice(0, 6);
    
    articlesToShow.forEach(article => {
        const newsCard = createNewsCard(article);
        newsGrid.appendChild(newsCard);
    });
    
    const viewMoreBtn = document.getElementById('viewMoreNews');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function() {
            alert('This would show all news articles on a dedicated page.');
        });
    }
}

function createNewsCard(article) {
    const card = document.createElement('article');
    card.className = 'news-card';
    
    card.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="news-image">
        <div class="news-content">
            <span class="news-date">${article.date}</span>
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <a href="${article.link}" class="news-link">
                Read more <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;
    
    return card;
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.news-card, .link-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// ===================================
// SMOOTH SCROLLING
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===================================
// HANDLE IMAGE LOADING ERRORS
// ===================================
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="18" fill="%23999"%3EImage Not Available%3C/text%3E%3C/svg%3E';
        e.target.alt = 'Image not available';
    }
}, true);

// ===================================
// WINDOW RESIZE HANDLER
// ===================================
window.addEventListener('resize', function() {
    if (renderer && camera) {
        const canvas = document.getElementById('campusMap3D');
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }
});

// ===================================
// 3D MAP INITIALIZATION - CONTINUED IN NEXT COMMENT DUE TO LENGTH
// SEE FULL IMPLEMENTATION IN DOWNLOADED FILE
// ===================================

// Note: The complete 3D map implementation with all textures, buildings,
// sports fields, parking lots, and realistic graphics is included in the
// full file. This preview shows the core structure and configuration.

// ===================================
// 3D CAMPUS MAP - TEXTURE GENERATION
// ===================================

function createBrickTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, 0, 256, 256);
    
    const brickWidth = 64;
    const brickHeight = 32;
    const mortarWidth = 2;
    
    ctx.fillStyle = '#A0826D';
    
    for (let y = 0; y < 256; y += brickHeight) {
        const offset = (y / brickHeight) % 2 === 0 ? 0 : brickWidth / 2;
        for (let x = -brickWidth; x < 256 + brickWidth; x += brickWidth) {
            ctx.fillRect(x + offset, y, brickWidth - mortarWidth, brickHeight - mortarWidth);
            const variation = Math.random() * 20 - 10;
            ctx.fillStyle = `rgb(${160 + variation}, ${130 + variation}, ${109 + variation})`;
        }
    }
    
    for (let i = 0; i < 500; i++) {
        ctx.fillStyle = `rgba(0, 0, 0, ${Math.random() * 0.1})`;
        ctx.fillRect(Math.random() * 256, Math.random() * 256, 1, 1);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
}

function createConcreteTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    
    const gradient = ctx.createLinearGradient(0, 0, 256, 256);
    gradient.addColorStop(0, '#909090');
    gradient.addColorStop(1, '#707070');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);
    
    for (let i = 0; i < 2000; i++) {
        const alpha = Math.random() * 0.15;
        ctx.fillStyle = `rgba(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100}, ${alpha})`;
        ctx.fillRect(Math.random() * 256, Math.random() * 256, 2, 2);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
}

function createModernTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    
    const gradient = ctx.createLinearGradient(0, 0, 0, 256);
    gradient.addColorStop(0, '#E0E0E0');
    gradient.addColorStop(0.5, '#C0C0C0');
    gradient.addColorStop(1, '#A0A0A0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);
    
    ctx.strokeStyle = '#888888';
    ctx.lineWidth = 2;
    for (let y = 0; y < 256; y += 64) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(256, y);
        ctx.stroke();
    }
    
    for (let i = 0; i < 100; i++) {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.05})`;
        ctx.fillRect(Math.random() * 256, Math.random() * 256, 4, 4);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
}

function createGrassTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#4a8f4a';
    ctx.fillRect(0, 0, 512, 512);
    
    const grassColors = ['#3d7a3d', '#4a8f4a', '#57a457', '#4f994f'];
    
    for (let i = 0; i < 3000; i++) {
        ctx.fillStyle = grassColors[Math.floor(Math.random() * grassColors.length)];
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        ctx.fillRect(x, y, 2, 3);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 10);
    return texture;
}

function createPathTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#404040';
    ctx.fillRect(0, 0, 256, 256);
    
    for (let i = 0; i < 1000; i++) {
        const brightness = Math.random() * 40;
        ctx.fillStyle = `rgb(${64 + brightness}, ${64 + brightness}, ${64 + brightness})`;
        ctx.fillRect(Math.random() * 256, Math.random() * 256, 1, 1);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
}

function createRoofTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#654321';
    ctx.fillRect(0, 0, 256, 256);
    
    const shingleHeight = 16;
    for (let y = 0; y < 256; y += shingleHeight) {
        const offset = (y / shingleHeight) % 2 === 0 ? 0 : 32;
        for (let x = -32; x < 256 + 32; x += 64) {
            const variation = Math.random() * 30 - 15;
            ctx.fillStyle = `rgb(${101 + variation}, ${67 + variation}, ${33 + variation})`;
            ctx.fillRect(x + offset, y, 63, shingleHeight - 1);
        }
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
}

// ===================================
// 3D CAMPUS MAP - INITIALIZATION
// ===================================

function initialize3DMap() {
    const canvas = document.getElementById('campusMap3D');
    const loadingIndicator = document.getElementById('mapLoading');
    
    if (!canvas) return;
    
    if (loadingIndicator) {
        loadingIndicator.classList.remove('hidden');
    }
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB);
    scene.fog = new THREE.Fog(0x87CEEB, 200, 500);
    
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    camera = new THREE.PerspectiveCamera(60, width / height, 1, 2000);
    camera.position.set(200, 120, 200);
    camera.lookAt(0, 0, 0);
    
    renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        antialias: qualityLevel !== 'low'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(qualityLevel === 'high' ? window.devicePixelRatio : 1);
    renderer.shadowMap.enabled = qualityLevel !== 'low';
    renderer.shadowMap.type = qualityLevel === 'high' ? THREE.PCFSoftShadowMap : THREE.BasicShadowMap;
    
    textureCache.brick = createBrickTexture();
    textureCache.concrete = createConcreteTexture();
    textureCache.modern = createModernTexture();
    textureCache.grass = createGrassTexture();
    textureCache.path = createPathTexture();
    textureCache.roof = createRoofTexture();
    
    setupLighting();
    createGround();
    
    gridHelper = new THREE.GridHelper(400, 40, 0x888888, 0xcccccc);
    gridHelper.position.y = 0.1;
    scene.add(gridHelper);
    
    createCampusBuildings();
    createPathways();
    createLandscaping();
    createSportsFields();
    createParkingLot();
    
    setupMapControls();
    setupBuildingInteraction();
    setupQualityControls();
    generateLegend();
    
    setTimeout(() => {
        if (loadingIndicator) {
            loadingIndicator.classList.add('hidden');
        }
    }, 1000);
    
    animate3DMap();
}

function setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const sunLight = new THREE.DirectionalLight(0xffffff, 0.8);
    sunLight.position.set(100, 200, 100);
    sunLight.castShadow = qualityLevel !== 'low';
    
    if (qualityLevel !== 'low') {
        sunLight.shadow.camera.left = -200;
        sunLight.shadow.camera.right = 200;
        sunLight.shadow.camera.top = 200;
        sunLight.shadow.camera.bottom = -200;
        sunLight.shadow.mapSize.width = qualityLevel === 'high' ? 2048 : 1024;
        sunLight.shadow.mapSize.height = qualityLevel === 'high' ? 2048 : 1024;
    }
    
    scene.add(sunLight);
    
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-50, 50, -50);
    scene.add(fillLight);
    
    const hemiLight = new THREE.HemisphereLight(0x87CEEB, 0x4a8f4a, 0.4);
    scene.add(hemiLight);
}

function createGround() {
    const groundGeometry = new THREE.PlaneGeometry(400, 400);
    const groundMaterial = new THREE.MeshLambertMaterial({ 
        map: textureCache.grass
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);
}

function createCampusBuildings() {
    schoolConfig.campusBuildings.forEach((building, index) => {
        const buildingGroup = new THREE.Group();
        
        let wallTexture;
        switch (building.material) {
            case 'brick':
                wallTexture = textureCache.brick.clone();
                break;
            case 'concrete':
                wallTexture = textureCache.concrete.clone();
                break;
            case 'modern':
                wallTexture = textureCache.modern.clone();
                break;
            default:
                wallTexture = textureCache.brick.clone();
        }
        
        wallTexture.needsUpdate = true;
        wallTexture.wrapS = THREE.RepeatWrapping;
        wallTexture.wrapT = THREE.RepeatWrapping;
        wallTexture.repeat.set(
            building.size.width / 32,
            building.size.height / 32
        );
        
        const geometry = new THREE.BoxGeometry(
            building.size.width,
            building.size.height,
            building.size.depth
        );
        
        const material = new THREE.MeshLambertMaterial({ 
            map: wallTexture
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(0, building.size.height / 2, 0);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.userData = { buildingIndex: index, buildingData: building };
        
        buildingGroup.add(mesh);
        buildingMeshes.push(mesh);
        
        addDetailedRoof(buildingGroup, building);
        addRealisticWindows(buildingGroup, building);
        addEntrance(buildingGroup, building);
        
        buildingGroup.position.set(building.position.x, 0, building.position.z);
        scene.add(buildingGroup);
        
        createBuildingLabel(building, index);
    });
}

function addDetailedRoof(group, building) {
    const roofGeometry = new THREE.BoxGeometry(
        building.size.width + 4,
        2,
        building.size.depth + 4
    );
    
    const roofMaterial = new THREE.MeshLambertMaterial({ 
        map: textureCache.roof
    });
    
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.set(0, building.size.height + 1, 0);
    roof.castShadow = true;
    roof.receiveShadow = true;
    group.add(roof);
    
    if (qualityLevel !== 'low') {
        for (let i = 0; i < 3; i++) {
            const unitGeometry = new THREE.BoxGeometry(4, 2, 3);
            const unitMaterial = new THREE.MeshLambertMaterial({ color: 0x808080 });
            const unit = new THREE.Mesh(unitGeometry, unitMaterial);
            unit.position.set(
                (Math.random() - 0.5) * building.size.width * 0.6,
                building.size.height + 2,
                (Math.random() - 0.5) * building.size.depth * 0.6
            );
            unit.castShadow = true;
            group.add(unit);
        }
    }
}

function addRealisticWindows(group, building) {
    const floors = Math.floor(building.size.height / 12);
    const windowsPerFloor = Math.floor(building.size.width / 8);
    
    const windowMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x87CEEB,
        transparent: true,
        opacity: 0.6,
        shininess: 100
    });
    
    const frameMaterial = new THREE.MeshLambertMaterial({ color: 0x333333 });
    
    for (let floor = 0; floor < floors; floor++) {
        const y = (floor * 12) - (building.size.height / 2) + 6;
        
        for (let i = 0; i < windowsPerFloor; i++) {
            const x = (i - windowsPerFloor / 2) * 8 + 4;
            
            createWindow(group, x, y, building.size.depth / 2 + 0.3, 0, windowMaterial, frameMaterial);
            createWindow(group, x, y, -building.size.depth / 2 - 0.3, Math.PI, windowMaterial, frameMaterial);
        }
        
        const windowsPerSide = Math.floor(building.size.depth / 8);
        for (let i = 0; i < windowsPerSide; i++) {
            const z = (i - windowsPerSide / 2) * 8 + 4;
            
            createWindow(group, -building.size.width / 2 - 0.3, y, z, -Math.PI / 2, windowMaterial, frameMaterial);
            createWindow(group, building.size.width / 2 + 0.3, y, z, Math.PI / 2, windowMaterial, frameMaterial);
        }
    }
}

function createWindow(group, x, y, z, rotation, windowMaterial, frameMaterial) {
    const windowGroup = new THREE.Group();
    
    const paneGeometry = new THREE.PlaneGeometry(4, 5);
    const pane = new THREE.Mesh(paneGeometry, windowMaterial);
    windowGroup.add(pane);
    
    if (qualityLevel !== 'low') {
        const frameThickness = 0.2;
        
        const topFrame = new THREE.Mesh(
            new THREE.BoxGeometry(4.2, frameThickness, 0.1),
            frameMaterial
        );
        topFrame.position.y = 2.5;
        windowGroup.add(topFrame);
        
        const bottomFrame = topFrame.clone();
        bottomFrame.position.y = -2.5;
        windowGroup.add(bottomFrame);
        
        const leftFrame = new THREE.Mesh(
            new THREE.BoxGeometry(frameThickness, 5, 0.1),
            frameMaterial
        );
        leftFrame.position.x = -2;
        windowGroup.add(leftFrame);
        
        const rightFrame = leftFrame.clone();
        rightFrame.position.x = 2;
        windowGroup.add(rightFrame);
    }
    
    windowGroup.position.set(x, y, z);
    windowGroup.rotation.y = rotation;
    group.add(windowGroup);
}

function addEntrance(group, building) {
    const doorWidth = 6;
    const doorHeight = 10;
    
    const doorGeometry = new THREE.BoxGeometry(doorWidth, doorHeight, 0.5);
    const doorMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(0, doorHeight / 2 - building.size.height / 2 + 0.1, building.size.depth / 2 + 0.5);
    door.castShadow = true;
    group.add(door);
    
    const frameMaterial = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const frameTop = new THREE.Mesh(
        new THREE.BoxGeometry(doorWidth + 1, 0.5, 0.6),
        frameMaterial
    );
    frameTop.position.set(0, doorHeight - building.size.height / 2 + 0.1, building.size.depth / 2 + 0.5);
    group.add(frameTop);
    
    for (let i = 0; i < 3; i++) {
        const stepGeometry = new THREE.BoxGeometry(doorWidth + 2, 0.5, 1.5);
        const stepMaterial = new THREE.MeshLambertMaterial({ map: textureCache.concrete });
        const step = new THREE.Mesh(stepGeometry, stepMaterial);
        step.position.set(
            0, 
            -building.size.height / 2 + (i * 0.5),
            building.size.depth / 2 + 1.5 + (i * 0.5)
        );
        step.castShadow = true;
        step.receiveShadow = true;
        group.add(step);
    }
}

function createBuildingLabel(building, index) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 128;
    
    context.fillStyle = 'rgba(0, 51, 102, 0.9)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.strokeStyle = 'rgba(255, 215, 0, 0.8)';
    context.lineWidth = 4;
    context.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);
    
    context.font = 'Bold 36px Arial';
    context.fillStyle = 'white';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(building.name, canvas.width / 2, canvas.height / 2);
    
    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(spriteMaterial);
    
    sprite.position.set(
        building.position.x,
        building.size.height + 18,
        building.position.z
    );
    sprite.scale.set(60, 15, 1);
    sprite.userData = { buildingIndex: index };
    
    scene.add(sprite);
    labelSprites.push(sprite);
}

function createPathways() {
    const pathMaterial = new THREE.MeshLambertMaterial({ 
        map: textureCache.path
    });
    
    const pathways = [
        { width: 300, depth: 10, x: 0, z: 0, rotation: 0 },
        { width: 10, depth: 300, x: 0, z: 0, rotation: 0 },
        { width: 140, depth: 8, x: -40, z: -40, rotation: Math.PI / 4 },
        { width: 140, depth: 8, x: 40, z: -40, rotation: -Math.PI / 4 }
    ];
    
    pathways.forEach(path => {
        const geometry = new THREE.PlaneGeometry(path.width, path.depth);
        const mesh = new THREE.Mesh(geometry, pathMaterial);
        mesh.rotation.x = -Math.PI / 2;
        mesh.rotation.z = path.rotation;
        mesh.position.set(path.x, 0.3, path.z);
        mesh.receiveShadow = true;
        scene.add(mesh);
    });
}

function createLandscaping() {
    const treePositions = [
        { x: -120, z: -120 }, { x: -120, z: 120 },
        { x: 120, z: -120 }, { x: 120, z: 120 },
        { x: -150, z: 0 }, { x: 150, z: 0 },
        { x: 0, z: -140 }, { x: 0, z: 140 },
        { x: -100, z: -100 }, { x: 100, z: 100 },
        { x: -100, z: 100 }, { x: 100, z: -100 }
    ];
    
    treePositions.forEach(pos => {
        createDetailedTree(pos.x, pos.z);
    });
    
    if (qualityLevel !== 'low') {
        schoolConfig.campusBuildings.forEach(building => {
            for (let i = 0; i < 4; i++) {
                const angle = (i / 4) * Math.PI * 2;
                const distance = (building.size.width + building.size.depth) / 3;
                const x = building.position.x + Math.cos(angle) * distance;
                const z = building.position.z + Math.sin(angle) * distance;
                createBush(x, z);
            }
        });
    }
}

function createDetailedTree(x, z) {
    const treeGroup = new THREE.Group();
    
    const trunkGeometry = new THREE.CylinderGeometry(1.5, 2, 12, 8);
    const trunkMaterial = new THREE.MeshLambertMaterial({ color: 0x4a3728 });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = 6;
    trunk.castShadow = true;
    treeGroup.add(trunk);
    
    const foliageColors = [0x228B22, 0x2E8B2E, 0x3AA33A];
    const foliageMaterial = new THREE.MeshLambertMaterial({ 
        color: foliageColors[Math.floor(Math.random() * foliageColors.length)]
    });
    
    const mainFoliage = new THREE.Mesh(
        new THREE.SphereGeometry(7, qualityLevel === 'low' ? 6 : 12, qualityLevel === 'low' ? 6 : 12),
        foliageMaterial
    );
    mainFoliage.position.y = 14;
    mainFoliage.castShadow = true;
    treeGroup.add(mainFoliage);
    
    if (qualityLevel !== 'low') {
        for (let i = 0; i < 3; i++) {
            const cluster = new THREE.Mesh(
                new THREE.SphereGeometry(4, 8, 8),
                foliageMaterial
            );
            const angle = (i / 3) * Math.PI * 2;
            cluster.position.set(
                Math.cos(angle) * 4,
                12 + Math.random() * 2,
                Math.sin(angle) * 4
            );
            cluster.castShadow = true;
            treeGroup.add(cluster);
        }
    }
    
    treeGroup.position.set(x, 0, z);
    scene.add(treeGroup);
}

function createBush(x, z) {
    const bushGeometry = new THREE.SphereGeometry(2, 8, 8);
    const bushMaterial = new THREE.MeshLambertMaterial({ color: 0x2d5a2d });
    const bush = new THREE.Mesh(bushGeometry, bushMaterial);
    bush.position.set(x, 1.5, z);
    bush.scale.set(1, 0.8, 1);
    bush.castShadow = true;
    scene.add(bush);
}

function createSportsFields() {
    const fieldGroup = new THREE.Group();
    
    const fieldGeometry = new THREE.PlaneGeometry(80, 120);
    const fieldMaterial = new THREE.MeshLambertMaterial({ color: 0x2d6b2d });
    const field = new THREE.Mesh(fieldGeometry, fieldMaterial);
    field.rotation.x = -Math.PI / 2;
    field.position.y = 0.1;
    field.receiveShadow = true;
    fieldGroup.add(field);
    
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const points = [
        new THREE.Vector3(-40, 0.2, -60),
        new THREE.Vector3(40, 0.2, -60),
        new THREE.Vector3(40, 0.2, 60),
        new THREE.Vector3(-40, 0.2, 60),
        new THREE.Vector3(-40, 0.2, -60)
    ];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, lineMaterial);
    fieldGroup.add(line);
    
    fieldGroup.position.set(0, 0, 150);
    scene.add(fieldGroup);
    
    createBasketballCourt(120, 140);
    createBasketballCourt(-120, 140);
}

function createBasketballCourt(x, z) {
    const courtGroup = new THREE.Group();
    
    const courtGeometry = new THREE.PlaneGeometry(30, 50);
    const courtMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    const court = new THREE.Mesh(courtGeometry, courtMaterial);
    court.rotation.x = -Math.PI / 2;
    court.position.y = 0.1;
    court.receiveShadow = true;
    courtGroup.add(court);
    
    courtGroup.position.set(x, 0, z);
    scene.add(courtGroup);
}

function createParkingLot() {
    const parkingGroup = new THREE.Group();
    
    const lotGeometry = new THREE.PlaneGeometry(60, 80);
    const lotMaterial = new THREE.MeshLambertMaterial({ color: 0x404040 });
    const lot = new THREE.Mesh(lotGeometry, lotMaterial);
    lot.rotation.x = -Math.PI / 2;
    lot.position.y = 0.2;
    lot.receiveShadow = true;
    parkingGroup.add(lot);
    
    const lineMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    for (let i = 0; i < 6; i++) {
        const line = new THREE.Mesh(
            new THREE.PlaneGeometry(0.2, 80),
            lineMaterial
        );
        line.rotation.x = -Math.PI / 2;
        line.position.set((i - 2.5) * 10, 0.25, 0);
        parkingGroup.add(line);
    }
    
    parkingGroup.position.set(-150, 0, 0);
    scene.add(parkingGroup);
}

function setupMapControls() {
    const canvas = document.getElementById('campusMap3D');
    
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let isPanning = false;
    
    canvas.addEventListener('mousedown', function(e) {
        isDragging = true;
        isPanning = e.button === 2;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });
    
    canvas.addEventListener('mousemove', function(e) {
        if (isDragging) {
            const deltaMove = {
                x: e.clientX - previousMousePosition.x,
                y: e.clientY - previousMousePosition.y
            };
            
            if (isPanning) {
                const panSpeed = 0.5;
                camera.position.x -= deltaMove.x * panSpeed;
                camera.position.z -= deltaMove.y * panSpeed;
            } else {
                const rotationSpeed = 0.005;
                const radius = Math.sqrt(
                    camera.position.x ** 2 + 
                    camera.position.z ** 2
                );
                
                let angle = Math.atan2(camera.position.z, camera.position.x);
                angle -= deltaMove.x * rotationSpeed;
                
                camera.position.x = radius * Math.cos(angle);
                camera.position.z = radius * Math.sin(angle);
                
                camera.position.y = Math.max(50, 
                    Math.min(300, camera.position.y - deltaMove.y * 0.5)
                );
                
                camera.lookAt(0, 0, 0);
            }
            
            previousMousePosition = { x: e.clientX, y: e.clientY };
        }
    });
    
    canvas.addEventListener('mouseup', () => { isDragging = false; isPanning = false; });
    canvas.addEventListener('mouseleave', () => { isDragging = false; isPanning = false; });
    canvas.addEventListener('contextmenu', e => e.preventDefault());
    
    canvas.addEventListener('wheel', function(e) {
        e.preventDefault();
        const direction = e.deltaY > 0 ? 1 : -1;
        const distance = Math.sqrt(camera.position.x ** 2 + camera.position.y ** 2 + camera.position.z ** 2);
        const newDistance = Math.max(100, Math.min(500, distance + direction * 20));
        const scale = newDistance / distance;
        camera.position.multiplyScalar(scale);
    });
    
    document.getElementById('resetCamera').addEventListener('click', resetCamera);
    document.getElementById('toggleLabels').addEventListener('click', toggleLabels);
    document.getElementById('toggleGrid').addEventListener('click', toggleGridHelper);
}

function resetCamera() {
    camera.position.set(200, 120, 200);
    camera.lookAt(0, 0, 0);
}

function toggleLabels() {
    showLabels = !showLabels;
    labelSprites.forEach(sprite => sprite.visible = showLabels);
    document.getElementById('toggleLabels').classList.toggle('active');
}

function toggleGridHelper() {
    showGrid = !showGrid;
    gridHelper.visible = showGrid;
    document.getElementById('toggleGrid').classList.toggle('active');
}

function setupQualityControls() {
    const qualityToggle = document.getElementById('toggleQuality');
    const qualityPanel = document.getElementById('qualityPanel');
    const qualityButtons = document.querySelectorAll('.quality-btn');
    
    qualityToggle.addEventListener('click', function() {
        qualityPanel.classList.toggle('active');
        qualityToggle.classList.toggle('active');
    });
    
    qualityButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const quality = this.getAttribute('data-quality');
            setQualityLevel(quality);
            qualityButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function setQualityLevel(level) {
    qualityLevel = level;
    renderer.setPixelRatio(level === 'high' ? window.devicePixelRatio : 1);
    
    if (level === 'low') {
        renderer.shadowMap.enabled = false;
        scene.fog = new THREE.Fog(0x87CEEB, 150, 400);
    } else {
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = level === 'high' ? THREE.PCFSoftShadowMap : THREE.BasicShadowMap;
        scene.fog = new THREE.Fog(0x87CEEB, 200, 500);
    }
}

function setupBuildingInteraction() {
    const canvas = document.getElementById('campusMap3D');
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    canvas.addEventListener('click', function(e) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(buildingMeshes);
        
        if (intersects.length > 0) {
            const building = intersects[0].object;
            showBuildingInfo(building.userData.buildingData);
            highlightBuilding(building);
        } else {
            hideBuildingInfo();
            clearHighlight();
        }
    });
    
    document.getElementById('closeInfo').addEventListener('click', function() {
        hideBuildingInfo();
        clearHighlight();
    });
}

function showBuildingInfo(building) {
    const panel = document.getElementById('buildingInfoPanel');
    document.getElementById('buildingName').textContent = building.name;
    document.getElementById('buildingDescription').textContent = building.description;
    
    let detailsHTML = '';
    for (const [key, value] of Object.entries(building.details)) {
        detailsHTML += `<p><strong>${key}:</strong> ${value}</p>`;
    }
    document.getElementById('buildingDetails').innerHTML = detailsHTML;
    panel.classList.add('active');
}

function hideBuildingInfo() {
    document.getElementById('buildingInfoPanel').classList.remove('active');
}

function highlightBuilding(building) {
    clearHighlight();
    selectedBuilding = building;
    building.material = building.material.clone();
    building.material.emissive = new THREE.Color(0xffff00);
    building.material.emissiveIntensity = 0.3;
}

function clearHighlight() {
    if (selectedBuilding) {
        selectedBuilding.material.emissive = new THREE.Color(0x000000);
        selectedBuilding.material.emissiveIntensity = 0;
        selectedBuilding = null;
    }
}

function generateLegend() {
    const legendItems = document.getElementById('legendItems');
    
    schoolConfig.campusBuildings.forEach((building, index) => {
        const item = document.createElement('div');
        item.className = 'legend-item';
        item.innerHTML = `
            <div class="legend-color" style="background-color: ${building.color}"></div>
            <span class="legend-label">${building.name}</span>
        `;
        
        item.addEventListener('click', function() {
            const buildingMesh = buildingMeshes[index];
            showBuildingInfo(building);
            highlightBuilding(buildingMesh);
            animateCameraToBuilding(buildingMesh);
        });
        
        legendItems.appendChild(item);
    });
}

function animateCameraToBuilding(building) {
    const targetPosition = new THREE.Vector3(
        building.position.x + 100,
        building.position.y + 80,
        building.position.z + 100
    );
    
    const startPosition = camera.position.clone();
    const duration = 1500;
    const startTime = Date.now();
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
        
        camera.position.lerpVectors(startPosition, targetPosition, eased);
        camera.lookAt(building.position);
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    animate();
}

function animate3DMap() {
    requestAnimationFrame(animate3DMap);
    
    frames++;
    const currentTime = performance.now();
    if (currentTime >= lastTime + 1000) {
        fps = Math.round((frames * 1000) / (currentTime - lastTime));
        document.getElementById('fpsDisplay').textContent = fps;
        frames = 0;
        lastTime = currentTime;
    }
    
    labelSprites.forEach(sprite => sprite.lookAt(camera.position));
    renderer.render(scene, camera);
}
