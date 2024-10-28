import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addEmail, getBaseId, getEmails } from "@/lib/function";
import { useToast } from "@/hooks/use-toast";
import { RefreshCw } from "lucide-react";


const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail()) {
      toast({
        title: "Error",
        description: "Please enter a valid email",
      });
      return;
    }
    try {
      setLoading(true);
      const res = await getBaseId();
      const baseid = res.bases[0].id;
      const emails = await getEmails(baseid);
      const found = emails.records.find(
        (record) => record.fields.Email === email,
      );
      if (found) {
        toast({
          title: "Response",
          description: (
            <pre className="w-[340px] rounded-md bg-slate-950 p-2">
              <code className="text-white">
                {JSON.stringify(msg("Email already Exist", 201),null,2)}
              </code>
            </pre>
          ),
        });
        setLoading(false);
        setEmail("");
        return;
      }
      const resStatus = await addEmail(baseid, email);
      if (resStatus === 200) {
        toast({
          title: "Response",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(msg("Subscribed ✅", 200), null, 2)}
              </code>
            </pre>
          ),
        });
        setLoading(false);
        setEmail("");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
      setLoading(false);
      setEmail("");
      console.error(error);
    }
  };

  const msg = (message, code) => {
    return {
      message,
      code,
    };
  };
  const isValidEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
                <form className="flex flex-col gap-2 sm:flex-row">
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
                      className={`w-full sm:w-auto flex items-center justify-center text-center {'hover:opacity-90' : 'opacity-50 cursor-not-allowed'}`}
                      style={{
                        backgroundColor: "var(--button-background)",
                        color: "var(--button-text)",
                        padding: "12px 24px",
                        borderRadius: "8px",
                      }}
                      disabled={loading}
                    >
                      {loading && (
                        <RefreshCw className="h-4 w-4 animate-spin" />
                      )}
                      {loading ? "Loading" : "Subscribe"}
                    </Button>
                  </div>
                </form>
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
