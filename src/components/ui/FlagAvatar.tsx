import Image from "next/image";

type FlagAvatarProps = {
  src: string;
  alt: string;
};

export default function FlagAvatar({ src, alt }: FlagAvatarProps) {
  return (
    <div className="flag-avatar">
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="flag-avatar-image"
      />
    </div>
  );
}
