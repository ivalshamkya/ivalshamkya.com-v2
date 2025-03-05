import { formatDate } from "@/lib/date-format";
import Image from "next/image";
import {
  IoChatboxEllipsesOutline,
} from "react-icons/io5";

interface CardProps {
  title: string;
  description: string;
  cover_image: string;
  published_timestamp: string;
  comments_count: string;
  tag_list: string[];
  url: string;
}

export default function Card({
  title,
  description,
  cover_image,
  published_timestamp,
  comments_count,
  url,
}: CardProps) {
  return (
    <div className="block bg-transparent rounded-2xl">
      <div className="relative w-full h-52">
        <Image
          src={cover_image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl border border-neutral-900/10 dark:border-neutral-50/5"
          loading="lazy"
        />
      </div>

      <div className="py-1.5 px-0.5 flex flex-col gap-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit text-lg font-semibold hover:text-[#4079ff] dark:hover:text-[#40ffaa]"
        >
          {title}
        </a>
        <div className="flex gap-3">
          <span className="text-xs">
            {formatDate(published_timestamp, "MMM D, YY")}
          </span>
          <div className="flex items-center gap-1 text-xs">
            <IoChatboxEllipsesOutline /> {comments_count} Comments
          </div>
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
          {description}
        </p>
        {/* <div className="flex items-center gap-1">
          {tag_list.map((tag, index) => (
            <p key={index} className="text-sm text-neutral-600 dark:text-neutral-400">
              {`#${tag}`}
            </p>
          ))}
        </div> */}
      </div>
    </div>
  );
}
