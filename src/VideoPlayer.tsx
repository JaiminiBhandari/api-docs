interface VideoPlayerProps {
  src: string;
  width?: number;
}

export default function VideoPlayer({ src, width = 720 }: VideoPlayerProps) {
  return (
    <video controls width={width}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
