import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };
  return (
    <>
      <section className="w-full py-8 md:py-16 lg:py-20 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative p-6 sm:p-10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 via-black to-gray-200"></div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                    Join Our Newsletter
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                    Stay updated with our latest open-source projects and
                    community news.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2 sm:flex-row"
                  >
                    <div className="flex-1">
                      <Input
                        className="w-full bg-gray-100 text-black placeholder-gray-400 border-gray-200"
                        placeholder="Enter your email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={true}
                      />
                    </div>
                    <div>
                      <Button
                        type="submit"
                        className="w-full sm:w-auto bg-black text-white hover:bg-gray-800"
                        disabled={true}
                      >
                        Subscribe
                      </Button>
                    </div>
                  </form>
                  <p className="text-sm text-gray-400">
                    Stay Tunned for more updates! *Coming Soon*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
