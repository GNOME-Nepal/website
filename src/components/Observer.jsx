import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SectionObserver = ({ id, className, ...rest }) => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    // These are the intersection observer options
    // root ?: Element | Document | null;
    // rootMargin ?: string;
    // threshold ?: number | number[];
    const intersectionOptions = {
      root: null,
      threshold: 0.8, // this means 80% viewable
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const isInView = entry.isIntersecting;
        if (isInView)
          navigate(`/#${id}`, {
            replace: true,
          });
      });
    }, intersectionOptions);

    intersectionObserver.observe(sectionElement);

    // cleaning the observer
    return () => {
      intersectionObserver.unobserve(sectionElement);
    };
  }, [id, navigate]);

  return (
    <section
      id={id}
      className={cn("md:pb-8 pb-4", className)}
      {...rest}
      ref={sectionRef}
    >
      {rest.children}
    </section>
  );
};

export default SectionObserver;
