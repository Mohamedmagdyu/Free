import { Play, Eye, Calendar } from 'lucide-react';

const VideoCard = ({ video, onClick }) => {
  return (
    <div 
      className="video-card rounded-lg p-4 cursor-pointer"
      onClick={() => onClick(video)}
    >
      <div className="relative mb-4">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
          <Play className="w-12 h-12 text-yellow-400" fill="currentColor" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
        {video.title}
      </h3>
      
      <p className="text-gray-300 text-sm mb-3 line-clamp-2">
        {video.description}
      </p>
      
      <div className="flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <Eye className="w-4 h-4" />
          <span>{video.views}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{video.date}</span>
        </div>
      </div>
      
      <div className="mt-3 flex flex-wrap gap-2">
        {video.tags.map((tag, index) => (
          <span 
            key={index}
            className="bg-yellow-400 bg-opacity-20 text-yellow-400 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default VideoCard;

