import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { RefreshCw } from "lucide-react";
import { useNewsletter } from "@/hooks/useNewsletter";

// Enhanced email validation utility
const emailValidation = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const { mutate, isPending } = useNewsletter();

  // Centralized response handler for toasts
  const handleToast = (type, title, description) => {
    toast({
      title,
      description: (
        <pre className="w-[340px] rounded-md bg-slate-950 p-2">
          <code className="text-white">{description}</code>
        </pre>
      ),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enhanced validation
    if (!emailValidation(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
      });
      return;
    }

    mutate(email, {
      onSuccess: () => {
        setEmail("");
        handleToast(
          "success",
          "Response",
          JSON.stringify({ msg: "Subscribed ✅", code: 200 }, null, 2),
        );
      },
      onError: (error) => {
        if (error?.status === 400) {
          handleToast(
            "info",
            "Response",
            JSON.stringify(
              { msg: "You are already subscribed!", code: 201 },
              null,
              2,
            ),
          );
        } else {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again later.",
          });
        }
      },
    });
  };

  return (
    <section
      className="w-full pb-4 md:py-12 lg:py-16"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="container px-4 md:px-6">
        <div
          className="max-w-3xl mx-auto rounded-2xl shadow-lg overflow-hidden"
          style={{ backgroundColor: "var(--card)" }}
        >
          <div className="relative p-6 sm:p-10">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 via-black to-gray-200"></div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                  style={{ color: "var(--foreground)" }}
                >
                  Join Our Newsletter
                </h2>
                <p
                  className="max-w-[600px] md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Stay updated with our latest open-source projects and
                  community news.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <div className="flex-1">
                    <Input
                      className="w-full text-black placeholder-gray-400 border-gray-200"
                      style={{
                        backgroundColor: "var(--input)",
                        color: "var(--foreground)",
                      }}
                      placeholder="Enter your email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <Button
                      type="button"
                      onClick={handleSubmit}
                      className={`w-full sm:w-auto flex items-center justify-center text-center ${
                        isPending
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:opacity-90"
                      }`}
                      style={{
                        backgroundColor: "var(--button-background)",
                        color: "var(--button-text)",
                        padding: "12px 24px",
                        borderRadius: "8px",
                      }}
                      disabled={isPending}
                    >
                      {isPending && (
                        <RefreshCw className="h-4 w-4 animate-spin" />
                      )}
                      {isPending ? "Loading" : "Subscribe"}
                    </Button>
                  </div>
                </div>
                <p
                  className="text-sm"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Stay Tuned for more updates! *Coming Soon*
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
