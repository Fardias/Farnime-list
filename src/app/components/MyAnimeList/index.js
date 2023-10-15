import Image from "next/image";
import Link from "next/link";

export default function MyAnimeList({title, images, id}) {
  return (
      <Link href={`/${id}`} className="">
        <Image
          src={images}
          alt={title}
          width={350}
          height={350}
          className="max-h-80 object-cover"
        />
        <h3 className="text-sm">{title}</h3>
      </Link>
  );
}
