import Image from "next/image";
import styles from "./ApplicationVisual.module.css";

type ApplicationVisualProps = {
  className: string;
  image: string;
  alt: string;
  position?: string;
};

export function ApplicationVisual({ className, image, alt, position = "center" }: ApplicationVisualProps) {
  return (
    <div className={`${className} ${styles.visual}`}>
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 800px) 100vw, 50vw"
        className={styles.image}
        style={{ objectPosition: position }}
      />
    </div>
  );
}
