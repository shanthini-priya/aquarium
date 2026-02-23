// script.js - mobile optimized

document.addEventListener('DOMContentLoaded', function() {
    // ===== HAMBURGER MENU TOGGLE =====
    const hamburger = document.getElementById('hamburgerBtn');
    const mobileNav = document.getElementById('mobileNav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileNav.classList.toggle('open');
            
            // Animate hamburger bars (optional)
            const bars = this.querySelectorAll('.bar');
            if (mobileNav.classList.contains('open')) {
                bars[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });

        // Close menu when a nav item is clicked (for better mobile UX)
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault(); // still demo
                mobileNav.classList.remove('open');
                // reset hamburger
                const bars = hamburger.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
                
                // highlight clicked item (simulate active)
                navItems.forEach(n => n.classList.remove('active-home'));
                this.classList.add('active-home');
                
                // Show category message (mobile friendly alert)
                const category = this.innerText.trim();
                if (category !== 'HOME') {
                    alert(`🌾 ${category} section — Thanjavur specials (demo)`);
                } else {
                    alert('🏠 Tn 49 Pet Lover home');
                }
            });
        });
    }

    // ===== BUTTON CLICK (with haptic/touch feedback) =====
    const ctaButton = document.getElementById('greetButton');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Visual feedback
            this.style.transform = 'translateY(5px)';
            this.style.borderBottomWidth = '4px';
            setTimeout(() => {
                this.style.transform = '';
                this.style.borderBottomWidth = '8px';
            }, 150);
            
            // Cultural welcome alert (non-intrusive)
            alert('🌾 வணக்கம்! (Vanakkam!) 🙏\nWelcome to Tn 49 Pet Lover — heritage pets & plants available.');
        });
    }

    // ===== TOUCH OPTIMIZED CARD FEEDBACK =====
    const cards = document.querySelectorAll('.item-card');
    cards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.backgroundColor = '#fff2d3';
            this.style.boxShadow = '4px 4px 0 #c5943c, 0 6px 10px #402e14';
        }, {passive: true});
        
        card.addEventListener('touchend', function() {
            this.style.backgroundColor = '#f9edcf';
            this.style.boxShadow = '8px 8px 0 #48643d, 0 6px 10px #352f1c';
        });
        
        // Also for mouse (desktop)
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '10px 10px 0 #c5943c';
        });
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '8px 8px 0 #48643d';
        });
    });

    // ===== CLOSE MENU WHEN CLICKING OUTSIDE (optional for mobile) =====
    document.addEventListener('click', function(event) {
        const isClickInsideHeader = event.target.closest('.mobile-header');
        if (!isClickInsideHeader && mobileNav && mobileNav.classList.contains('open')) {
            mobileNav.classList.remove('open');
            // reset hamburger icon
            if (hamburger) {
                const bars = hamburger.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        }
    });

    console.log('📱 Tn 49 Pet Lover — mobile version ready, Thanjavur style.');
});