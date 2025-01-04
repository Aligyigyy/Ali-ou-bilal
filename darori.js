/* Enhanced Particle Initialization with Java Features */
particlesJS("particles-js", {
    particles: {
        number: { 
            value: 200, // زيادة عدد الجسيمات
            density: { enable: true, value_area: 1200 } // زيادة الكثافة لتغطية أكبر
        },
        color: { value: "#ff7f50" }, // تغيير اللون إلى برتقالي
        shape: { 
            type: "circle", 
            stroke: { width: 1, color: "#ff7f50" } // إضافة حدود للجسيمات
        },
        opacity: { 
            value: 0.8, // زيادة الشفافية
            anim: { enable: true, speed: 1, opacity_min: 0.1 } // تحسين الحركة والشفافية
        },
        size: { 
            value: 8, // زيادة حجم الجسيمات
            random: true,
            anim: { enable: true, speed: 4, size_min: 1 } // تحسين الحجم مع الحركة
        },
        line_linked: { 
            enable: true, 
            distance: 100, // تقليل المسافة لربط الجسيمات أكثر
            color: "#ff7f50",
            opacity: 0.4,
            width: 2
        },
        move: { 
            enable: true, 
            speed: 6, // زيادة سرعة حركة الجسيمات
            direction: "none", // اتجاه عشوائي
            random: true, 
            straight: false,
            out_mode: "bounce" // جعل الجسيمات تقفز عند الخروج من الشاشة
        }
    },
    interactivity: {
        events: { 
            onhover: { 
                enable: true, 
                mode: "repulse" // تغيير التأثير عند التفاعل
            },
            onclick: { 
                enable: true, 
                mode: "push" // إضافة تأثير الدفع عند النقر
            }
        },
        modes: { 
            repulse: { distance: 150, duration: 0.4 },
            push: { particles_nb: 4 } // عدد الجسيمات التي ستظهر عند النقر
        }
    },
    retina_detect: true
});
