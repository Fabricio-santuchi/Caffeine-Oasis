import videoCoffee from "./assets/Coffe.mp4";

const BackgroundVideo = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-negative overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src={videoCoffee}
        loop
        muted
        autoPlay
      ></video>
      <div className="absolute top-0 w-full h-full bg-custom-gradient"></div>
    </div>
  );
};

export default BackgroundVideo;
