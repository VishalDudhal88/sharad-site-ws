import Image from "next/image";
import EagleLogo from "@/assets/eagle-logo.svg";

export function AyarCardImage() {
  return (
    <div className="card-image-wrap card-image-container">
      
        <Image
          src="/images/ayar2.png"
          alt="AYAR logo"
          fill
          className="object-contain left-4"
        />
      
    </div>
  );
}

export function BazaCardImage() {
  return (
    <div className="card-image-wrap card-image-container-overflow">
      <Image
        src="/images/baza.svg"
        alt="Baza Foundation branding screenshot"
        className="card-image-shadow"
        sizes="(max-width: 768px) 100vw, 411px"
        width={500}
        height={400}
      />
    </div>
  );
}

export function MultipleBrandsCardImage() {
  return (
    <div className="card-image-wrap card-image-center">
      <Image
          src="/images/99designs.svg"
          alt="Xeni travel app UI mockup"
          width={250}
          height={180}
          className="card-image-mockup"
        />
    </div>
  );
}

export function XeniCardImage() {
  return (
    <div className="card-image-wrap card-image-center-logo flex items-center justify-center">
      <div className="xeni-mockup-wrapper">
        <Image
          src="/images/xeni-img.png"
          alt="Xeni travel app UI mockup"
          width={500}
          height={280}
          className="card-image-mockup"
        />
      </div>      
    </div>
  );
}

export function SomaCardImage() {
  return (
    <div className="card-image-wrap card-image-center-logo flex items-center justify-center">
          <Image
          src="/images/soma-logo.svg"
          alt="Soma Therapies"
          className="object-cover"
          width={200}
          height={100}
        />
    </div>
  );
}

export function EagleCardImage() {
  return (
    <div className="card-image-wrap card-image-center-logo flex items-center justify-center">
      <EagleLogo aria-label="Eagle brand logo" className="eagle-logo" />
    </div>
  );
}

export function BirdCardImage() {
  return (
    <div className="card-image-wrap card-image-center-logo flex items-center justify-center">
      <Image
        src="/images/bird-illustration.jpg"
        alt="Bird illustration logo"
        width={180}
        height={180}
        className="object-contain"
      />
    </div>
  );
}

export function RisepathCardImage() {
  return (
    <div className="card-image-wrap card-image-center-logo flex items-center justify-center">
      <Image
          src="/images/RisePath.svg"
          alt="AYAR logo"
          width={83}
          height={83}
          className="object-contain"
        />
    </div>
  );
}
