import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import SectionObserver from "@/components/Observer";
import { Calendar, UsersRound } from "lucide-react";
import {
  MapPinIcon,
  TwitterIcon,
  CalendarIcon,
  LinkedinIcon,
  ClockIcon,
} from "@/assets/icons";
import { useEvents } from "@/hooks/useEvents";
import { useTheme } from "@/components/theme-provider";

const Events = () => {
  const [expandedCard, setExpandedCard] = useState(0);
  const [activeTab, setActiveTab] = useState("event-details");
  const { data } = useEvents();
  const { theme } = useTheme();

  const handleCardClick = (index) => {
    setExpandedCard(index);
  };

  const getSpeakers = () => {
    let speakers = [];
    data?.map((item) =>
      item?.schedules?.map((schedule) =>
        schedule?.speakers?.map((speaker) => speakers.push(speaker)),
      ),
    );

    const uniqueSpeakers = new Map();
    speakers.forEach((item) => {
      uniqueSpeakers.set(item.name, item);
    });

    speakers = Array.from(uniqueSpeakers.values());
    return speakers;
  };

  const speakersList = getSpeakers();
  return (
    <SectionObserver id="events">
      <section id="events" className="justify-center">
        {data?.length > 0 ? (
          <div className="flex flex-col md:flex-row md:gap-4 h-content mt-2">
            <div className="gap-2 flex flex-col items-center md:items-start w-full md:w-1/3 bg-background">
              <div className="text-red-400  font-medium rounded-[50px] text-center py-2  bg-red-100 dark:bg-[#a41b0e21] dark:text-[#D72323] border-r-[50%] w-60">
                Upcoming Events
              </div>
              <div className="md:text-left text-center mt-2 mb-4">
                <h2 className="text-3xl font-bold">Events Calendar</h2>
              </div>
              {data.map((event, index) => (
                <div
                  key={index}
                  className={`bg-card p-4 rounded-lg shadow-md cursor-pointer transition-all hover:shadow-lg ${
                    index === expandedCard
                      ? "text-background bg-foreground"
                      : ""
                  }`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <p
                        style={{
                          color:
                            theme === "light" || index === expandedCard
                              ? "gray"
                              : "white",
                        }}
                      >
                        {event.start_date} to {event.end_date}
                      </p>
                    </div>
                  </div>
                  <p className="line-clamp-2">
                    {
                      new DOMParser().parseFromString(
                        event.description,
                        "text/html",
                      ).body.textContent
                    }
                  </p>
                </div>
              ))}
            </div>
            {expandedCard !== null && (
              <div className="flex-1  lg:mt-12 mt-6 shadow-md overflow-y-auto dark:border-2 dark:rounded-lg">
                <div className="bg-card p-6 rounded-lg shadow-md transition-all duration-500 ease-in-out">
                  <div className="flex items-center justify-between pb-6">
                    <div>
                      <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-2">
                        Event Details
                      </div>
                      <h2 className="text-3xl font-bold">
                        {data[expandedCard].title}
                      </h2>
                    </div>
                  </div>
                  <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="event-details">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-muted-foreground"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          color="#ffffff"
                          fill="none"
                        >
                          <path
                            d="M14.9263 2.91103L8.27352 6.10452C7.76151 6.35029 7.21443 6.41187 6.65675 6.28693C6.29177 6.20517 6.10926 6.16429 5.9623 6.14751C4.13743 5.93912 3 7.38342 3 9.04427V9.95573C3 11.6166 4.13743 13.0609 5.9623 12.8525C6.10926 12.8357 6.29178 12.7948 6.65675 12.7131C7.21443 12.5881 7.76151 12.6497 8.27352 12.8955L14.9263 16.089C16.4534 16.8221 17.217 17.1886 18.0684 16.9029C18.9197 16.6172 19.2119 16.0041 19.7964 14.778C21.4012 11.4112 21.4012 7.58885 19.7964 4.22196C19.2119 2.99586 18.9197 2.38281 18.0684 2.0971C17.217 1.8114 16.4534 2.17794 14.9263 2.91103Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.4581 20.7709L9.96674 22C6.60515 19.3339 7.01583 18.0625 7.01583 13H8.14966C8.60978 15.8609 9.69512 17.216 11.1927 18.197C12.1152 18.8012 12.3054 20.0725 11.4581 20.7709Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.5 12.5V6.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </TabsTrigger>
                      <TabsTrigger value="schedule">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-muted-foreground"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          color="#ffffff"
                          fill="none"
                        >
                          <path
                            d="M18 2V4M6 2V4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.5 8H20.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 8H21"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </TabsTrigger>
                      <TabsTrigger value="speakers">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-muted-foreground"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          color="#ffffff"
                          fill="none"
                        >
                          <path
                            d="M18.6161 20H19.1063C20.2561 20 21.1707 19.4761 21.9919 18.7436C24.078 16.8826 19.1741 15 17.5 15M15.5 5.06877C15.7271 5.02373 15.9629 5 16.2048 5C18.0247 5 19.5 6.34315 19.5 8C19.5 9.65685 18.0247 11 16.2048 11C15.9629 11 15.7271 10.9763 15.5 10.9312"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M4.48131 16.1112C3.30234 16.743 0.211137 18.0331 2.09388 19.6474C3.01359 20.436 4.03791 21 5.32572 21H12.6743C13.9621 21 14.9864 20.436 15.9061 19.6474C17.7889 18.0331 14.6977 16.743 13.5187 16.1112C10.754 14.6296 7.24599 14.6296 4.48131 16.1112Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M13 7.5C13 9.70914 11.2091 11.5 9 11.5C6.79086 11.5 5 9.70914 5 7.5C5 5.29086 6.79086 3.5 9 3.5C11.2091 3.5 13 5.29086 13 7.5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="event-details">
                      <div className="mt-4">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: new DOMParser().parseFromString(
                              data[expandedCard].description,
                              "text/html",
                            ).body.innerHTML,
                          }}
                        />
                        <div className="mt-4 flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <MapPinIcon className="w-5 h-5 text-muted-foreground" />
                            <a
                              href={
                                data[expandedCard].location.google_maps_location
                              }
                              target="_blank"
                            >
                              <span>{data[expandedCard].location.name}</span>
                            </a>
                          </div>
                          {data[expandedCard].time !== "" ||
                            (undefined && (
                              <div className="flex items-center gap-2">
                                <ClockIcon className="w-5 h-5 text-muted-foreground" />
                                <span>{data[expandedCard].time}</span>
                              </div>
                            ))}
                        </div>
                        <div className="mt-4">
                          <h3 className="text-lg font-semibold">Hot Topics</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {data[expandedCard].hot_topics.map(
                              (topic, index) => (
                                <div
                                  key={index}
                                  className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
                                >
                                  {topic}
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="schedule">
                      <div className="mt-4 max-h-64 overflow-y-auto">
                        {data[expandedCard].schedules.length === 0 ? (
                          <div className="flex flex-col items-center text-center justify-center h-52">
                            <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                            <h2 className="text-lg font-semibold mb-2">
                              Schedule Coming Soon
                            </h2>
                            <p className="text-sm text-muted-foreground mb-6">
                              Stay tuned for more updates
                            </p>
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-4">
                            {data[expandedCard].schedules.map((item, index) => (
                              <div
                                key={index}
                                className="bg-muted p-4 rounded-lg relative"
                              >
                                <span className="absolute top-[3px] right-[4px] text-xl">
                                  {item.emoji}
                                </span>
                                <div className="font-semibold">
                                  {item.start_time} to {item.end_time}
                                </div>
                                <div className="text-sm text-stone-600">
                                  {item.description}
                                </div>
                                <div className="text-sm text-stone-600">
                                  By {item.speakers.map((a) => a.name)}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </TabsContent>
                    <TabsContent value="speakers">
                      {speakersList?.length === 0 ? (
                        <div className="flex flex-col items-center text-center justify-center h-52">
                          <UsersRound className="h-12 w-12 text-muted-foreground mb-4" />
                          <h2 className="text-lg font-semibold mb-2">
                            Speakers Coming Soon
                          </h2>
                          <p className="text-sm text-muted-foreground mb-6">
                            Stay tuned for more updates
                          </p>
                        </div>
                      ) : (
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-64 overflow-y-auto">
                          {speakersList?.map((speaker, index) => (
                            <div key={index} className="flex items-start gap-4">
                              <Avatar className="w-12 h-12 border">
                                <AvatarImage src="/placeholder-user.jpg" />
                                <AvatarFallback>
                                  {speaker.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div className="space-y-1">
                                <div className="font-semibold">
                                  {speaker.name}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {speaker.profession}
                                </div>
                                <div className="flex items-center gap-2">
                                  {speaker.twitter && (
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                      <a
                                        href={speaker.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                      >
                                        <TwitterIcon className="w-4 h-4" />
                                      </a>
                                    </div>
                                  )}

                                  {speaker.linkedin && (
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                      <a
                                        href={speaker.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                      >
                                        <LinkedinIcon className="w-4 h-4" />
                                      </a>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                  <div className="mt-4 flex gap-2">
                    <Button>
                      <a target="_blank" href={data[expandedCard].rsvp_url}>
                        RSVP
                      </a>
                    </Button>
                    {data[expandedCard].add_to_calender_url && (
                      <Button variant="secondary">
                        <a
                          target="_blank"
                          href={data[expandedCard].add_to_calender_url}
                        >
                          Add to Calendar
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col md:flex-row h-content">
            <div className="w-full bg-background p-6 space-y-8">
              <div className="md:text-left text-center">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-2">
                  Upcoming Events
                </div>
                <h2 className="text-3xl font-bold">Events Calendar</h2>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center justify-center w-full h-96">
                <CalendarIcon className="w-12 h-12 text-muted-foreground" />
                <h3 className="text-lg font-semibold mt-4">
                  No Upcoming Events
                </h3>
                <p className="text-muted-foreground mt-2">
                  Please check back later for updates on new events.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </SectionObserver>
  );
};

export default Events;
