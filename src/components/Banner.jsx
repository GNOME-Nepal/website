import { Button } from "@/components/ui/button";
import clsx from "clsx";

const Banner = ({ data, show }) => {
  const { emoji, message, color, button } = data;
  return (
    <>
      <div
        className={clsx(
          `hidden ${color} text-primary-foreground p-[8px] text-center text-md z-999 transition ease-in-out duration-300`,
          {
            "lg:block": show,
          },
        )}
      >
        <div className="flex items-center justify-center gap-3">
          <p>
            <span className="px-1 text-lg">{emoji}</span>
            {message}
          </p>
          <Button
            variant="secondary"
            className="rounded-full text-[12px] h-7 px-3"
            asChild
          >
            <a href={button.link}>{button.text}</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Banner;
