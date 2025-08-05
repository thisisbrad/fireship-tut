const VideoHero = () => {
  return (
    <div className="h-screen overflow-hidden">
      <video
        autoPlay
        muted
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover"
        preload="metadata"
        poster="../assets/hero.png"
      >
        <source
          src="https://d2pc8yewc6mjh7.cloudfront.net/hero.webm"
          type="video/webm"
        />
        <source
          src="https://d2pc8yewc6mjh7.cloudfront.net/hero.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 flex items-center justify-center h-full">
        {/* Your content here */}
      </div>
    </div>
  );
};

export default VideoHero;
