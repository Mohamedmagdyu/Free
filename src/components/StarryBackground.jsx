import { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const starsRef = useRef(null);
  const meteorsRef = useRef(null);

  useEffect(() => {
    // إنشاء النجوم
    const createStars = () => {
      const starsContainer = starsRef.current;
      if (!starsContainer) return;

      // إنشاء 100 نجمة
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
      }
    };

    // إنشاء الشهب
    const createMeteors = () => {
      const meteorsContainer = meteorsRef.current;
      if (!meteorsContainer) return;

      const createMeteor = () => {
        const meteor = document.createElement('div');
        meteor.className = 'meteor';
        meteor.style.left = Math.random() * 100 + '%';
        meteor.style.top = Math.random() * 50 + '%';
        meteor.style.animationDelay = Math.random() * 8 + 's';
        meteorsContainer.appendChild(meteor);

        // إزالة الشهاب بعد انتهاء الأنيميشن
        setTimeout(() => {
          if (meteorsContainer.contains(meteor)) {
            meteorsContainer.removeChild(meteor);
          }
        }, 8000);
      };

      // إنشاء شهاب جديد كل 3 ثوان
      const meteorInterval = setInterval(createMeteor, 3000);
      
      // إنشاء بعض الشهب في البداية
      for (let i = 0; i < 3; i++) {
        setTimeout(createMeteor, i * 1000);
      }

      return () => clearInterval(meteorInterval);
    };

    createStars();
    const cleanupMeteors = createMeteors();

    return () => {
      if (cleanupMeteors) cleanupMeteors();
    };
  }, []);

  return (
    <div className="stars-background">
      <div ref={starsRef} className="stars"></div>
      <div ref={meteorsRef} className="meteors"></div>
    </div>
  );
};

export default StarryBackground;

