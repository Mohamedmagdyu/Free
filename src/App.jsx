import { useState } from 'react';
import { Youtube, Star, Users, Video } from 'lucide-react';
import StarryBackground from './components/StarryBackground';
import Header from './components/Header';
import VideoCard from './components/VideoCard';
import VideoPage from './components/VideoPage';
import { videosData, getVideoById, getRelatedVideos } from './data/videos';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setCurrentView('video');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedVideo(null);
    window.scrollTo(0, 0);
  };

  const handleHomeClick = () => {
    setCurrentView('home');
    setSelectedVideo(null);
  };

  if (currentView === 'video' && selectedVideo) {
    const relatedVideos = getRelatedVideos(selectedVideo.id);
    return (
      <>
        <StarryBackground />
        <Header onHomeClick={handleHomeClick} />
        <VideoPage 
          video={selectedVideo}
          onBack={handleBackToHome}
          relatedVideos={relatedVideos}
          onVideoClick={handleVideoClick}
        />
      </>
    );
  }

  return (
    <>
      <StarryBackground />
      <Header onHomeClick={handleHomeClick} />
      
      {/* الصفحة الرئيسية */}
      <main className="min-h-screen">
        {/* قسم البطل */}
        <section id="home" className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="hero-title">
                اكتشف أفضل التطبيقات والخدمات المجانية
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                قناة متخصصة في شرح مميزات التطبيقات الحديثة وطرق الحصول على الخدمات المجانية بطريقة قانونية ومشروعة
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="flex items-center gap-2 text-yellow-400">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">+50K متابع</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-400">
                  <Video className="w-5 h-5" />
                  <span className="font-semibold">+100 فيديو</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-400">
                  <Star className="w-5 h-5" />
                  <span className="font-semibold">تقييم 4.9/5</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://youtube.com/@your-channel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <Youtube className="w-5 h-5" />
                  اشترك في القناة
                </a>
                <a 
                  href="#videos" 
                  className="btn-secondary"
                >
                  شاهد الفيديوهات
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* قسم الفيديوهات */}
        <section id="videos" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="section-title">أحدث الفيديوهات</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videosData.map((video) => (
                <VideoCard 
                  key={video.id} 
                  video={video} 
                  onClick={handleVideoClick}
                />
              ))}
            </div>
          </div>
        </section>

        {/* قسم عن القناة */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="section-title">عن القناة</h2>
              
              <div className="video-card rounded-lg p-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  نحن متخصصون في تقديم محتوى عالي الجودة حول أفضل التطبيقات والخدمات المجانية المتاحة. 
                  هدفنا هو مساعدتك في اكتشاف الأدوات والتطبيقات التي تجعل حياتك أسهل وأكثر إنتاجية، 
                  مع التركيز على الحلول المجانية والقانونية.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="bg-yellow-400 bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Video className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">محتوى حصري</h3>
                    <p className="text-gray-400">فيديوهات مفصلة وشروحات واضحة</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-yellow-400 bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">جودة عالية</h3>
                    <p className="text-gray-400">محتوى مدروس ومجرب بعناية</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-yellow-400 bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">مجتمع نشط</h3>
                    <p className="text-gray-400">تفاعل مستمر مع المتابعين</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* قسم التواصل */}
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="section-title">تواصل معنا</h2>
              
              <div className="video-card rounded-lg p-8">
                <p className="text-lg text-gray-300 mb-6">
                  لديك اقتراح لفيديو جديد؟ أو تريد التواصل معنا؟ نحن نحب سماع آرائكم واقتراحاتكم
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:contact@example.com" 
                    className="btn-primary"
                  >
                    راسلنا عبر الإيميل
                  </a>
                  <a 
                    href="https://youtube.com/@your-channel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center justify-center gap-2"
                  >
                    <Youtube className="w-5 h-5" />
                    قناة اليوتيوب
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* التذييل */}
      <footer className="bg-black bg-opacity-50 py-8 px-4 border-t border-yellow-400 border-opacity-20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 قناة التطبيقات والخدمات المجانية. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
