import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Globe } from "lucide-react";
import { GitHubIcon, TwitterIcon } from "@/assets/icons";

const ContributorsDetails = () => {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchContributors() {
      const contributionResponse = await axios.get(
        "https://raw.githubusercontent.com/GNOME-Nepal/contributors/refs/heads/main/contributors.json",
      );
      setContributors(contributionResponse.data);
      setLoading(false);
    }

    setLoading(true);
    fetchContributors();
  }, []);

  if (loading) {
    return <div>Loading our builders</div>;
  }

  function getBlogUrl(blog) {
    if (!blog.startsWith("https://")) {
      blog = "https://" + blog;
    }
    return blog;
  }

  return (
    <Carousel className="w-full lg:mt-12 mt-2">
      <CarouselContent className="flex">
        {contributors.map((contributor, index) => (
          <CarouselItem
            className="basis-1/2 md:basis-1/3 lg:basis-1/5 py-1  md:ml-12"
            key={index}
          >
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
                    <GitHubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  {contributor.twitter_username && (
                    <a
                      href={`https://x.com/${contributor.twitter_username}`}
                      className="hover:text-primary transition"
                      aria-label={`${contributor.name} twitter`}
                      target="_blank"
                    >
                      <TwitterIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  )}
                  {contributor.blog && (
                    <a
                      href={`${getBlogUrl(contributor.blog)}`}
                      className="hover:text-primary transition"
                      aria-label={`${contributor.name} Blog`}
                      target="_blank"
                    >
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ContributorsDetails;
