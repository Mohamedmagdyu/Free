import { ArrowRight, Download, ExternalLink, Eye, Calendar, Share2 } from 'lucide-react';

const VideoPage = ({ video, onBack, relatedVideos, onVideoClick }) => {
  if (!video) return null;

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* زر العودة */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors mb-6"
        >
          <ArrowRight className="w-5 h-5" />
          العودة للرئيسية
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* المحتوى الرئيسي */}
          <div className="lg:col-span-2">
            {/* مشغل الفيديو */}
            <div className="bg-black rounded-lg overflow-hidden mb-6">
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.embedUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* معلومات الفيديو */}
            <div className="video-card rounded-lg p-6">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {video.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{video.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{video.date}</span>
                </div>
                <button className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 transition-colors">
                  <Share2 className="w-4 h-4" />
                  مشاركة
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {video.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-yellow-400 bg-opacity-20 text-yellow-400 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">وصف الفيديو</h3>
                <p className="text-gray-300 leading-relaxed">
                  {video.fullDescription}
                </p>
              </div>
            </div>
          </div>

          {/* الشريط الجانبي */}
          <div className="lg:col-span-1">
            {/* روابط التحميل */}
            <div className="video-card rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">روابط التحميل</h3>
              <div className="space-y-3">
                {video.downloadLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    {link.title}
                  </a>
                ))}
                
                {video.externalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            {/* فيديوهات مقترحة */}
            <div className="video-card rounded-lg p-6">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">فيديوهات مقترحة</h3>
              <div className="space-y-4">
                {relatedVideos.map((relatedVideo) => (
                  <div 
                    key={relatedVideo.id}
                    className="flex gap-3 cursor-pointer hover:bg-white hover:bg-opacity-5 p-2 rounded transition-colors"
                    onClick={() => onVideoClick(relatedVideo)}
                  >
                    <img 
                      src={relatedVideo.thumbnail} 
                      alt={relatedVideo.title}
                      className="w-20 h-14 object-cover rounded flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-white line-clamp-2 mb-1">
                        {relatedVideo.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span>{relatedVideo.views}</span>
                        <span>•</span>
                        <span>{relatedVideo.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;

