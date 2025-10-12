import { Card } from "./ui/card";
import { GitHubIcon, TwitterIcon } from "@/assets/icons";
import { Globe } from "lucide-react";

const ContributorCard = ({ contributor }) => {
  function getBlogUrl(blog) {
    if (!blog.startsWith("https://")) {
      blog = "https://" + blog;
    }
    return blog;
  }

  return (
    <Card className="flex h-full flex-col gap-6 p-3 sm:p-4">
      <div className="aspect-square overflow-hidden rounded-lg w-62 h-62">
        <img
          src={contributor.avatar_url}
          alt={contributor.name}
          width={150}
          height={150}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-base text-center font-semibold sm:text-lg">
          {contributor.name}
        </h2>
        <div className="flex items-center gap-2 text-muted-foreground">
          <a
            href={contributor.html_url}
            className="hover:text-primary transition"
            target="_blank"
            aria-label={`${contributor.name} github`}
          >
            <GitHubIcon className="w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 hover:text-blue-500" />
          </a>
          {contributor.twitter_username && (
            <a
              href={`https://x.com/${contributor.twitter_username}`}
              className="hover:text-primary transition"
              aria-label={`${contributor.name} twitter`}
              target="_blank"
            >
              <TwitterIcon className="w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 hover:text-blue-500" />
            </a>
          )}
          {contributor.blog && (
            <a
              href={`${getBlogUrl(contributor.blog)}`}
              className="hover:text-primary transition"
              aria-label={`${contributor.name} Blog`}
              target="_blank"
            >
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 hover:text-blue-500" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ContributorCard;
