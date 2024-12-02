import { FC } from "react";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ShadCardProps {
  image: string;
  topic: string;
  description: string;
  link: string;
}

const ShadCard: FC<ShadCardProps> = ({ image, topic, description, link }) => {
  return (
    <Card className="w-80   shadow-lg">
      <CardHeader>
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={topic}
            layout="fill"
            objectFit="cover"
            className="rounded-t-md"
          />
        </div>
      </CardHeader>
      <div className="p-4">
        <CardTitle>{topic}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
      <CardFooter className="flex justify-center p-4">
        <Link
          href={link}
          className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
          target="_blank"
          
        >
          Visulise
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ShadCard;
