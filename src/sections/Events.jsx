import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import SectionObserver from "@/components/Observer";
import { Calendar, UsersRound } from "lucide-react";
import { events } from "@/data/data";

const Events = () => {
  const [expandedCard, setExpandedCard] = useState(0);
  const [activeTab, setActiveTab] = useState("event-details");
  const handleCardClick = (index) => {
    setExpandedCard(index);
  };

  return (
    <SectionObserver id="events">
      <section id="events" className="justify-center">
        {events.length > 0 ? (
          <div className="flex flex-col md:flex-row md:gap-4 h-content ">
            <div className="flex flex-col  items-center md:items-start w-full md:w-1/3 bg-background space-y-8 ">
              <div className="text-red-400  font-medium rounded-[50px] text-center py-2  bg-red-100 border-r-[50%] w-60">
              Upcoming Events
              </div>
              <div className="md:text-left text-center">
                <h2 className="text-3xl font-bold">Events Calendar</h2>
              </div>
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`bg-card p-4 rounded-lg shadow-md cursor-pointer transition-all hover:shadow-lg ${
                    index === expandedCard
                      ? "text-card-foreground bg-card-background"
                      : ""
                  }`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <p className="text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                  <p className="line-clamp-2">{event.description}</p>
                </div>
              ))}
            </div>
            {expandedCard !== null && (
              <div className="flex-1  mt-12 shadow-md overflow-y-auto dark:border-2 dark:rounded-lg">
                <div className="bg-card p-6 rounded-lg shadow-md transition-all duration-500 ease-in-out">
                  <div className="flex items-center justify-between pb-6">
                    <div>
                      <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-2">
                        Event Details
                      </div>
                      <h2 className="text-3xl font-bold">
                        {events[expandedCard].title}
                      </h2>
                    </div>
                  </div>
                  <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="event-details">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                          <path d="M14.9263 2.91103L8.27352 6.10452C7.76151 6.35029 7.21443 6.41187 6.65675 6.28693C6.29177 6.20517 6.10926 6.16429 5.9623 6.14751C4.13743 5.93912 3 7.38342 3 9.04427V9.95573C3 11.6166 4.13743 13.0609 5.9623 12.8525C6.10926 12.8357 6.29178 12.7948 6.65675 12.7131C7.21443 12.5881 7.76151 12.6497 8.27352 12.8955L14.9263 16.089C16.4534 16.8221 17.217 17.1886 18.0684 16.9029C18.9197 16.6172 19.2119 16.0041 19.7964 14.778C21.4012 11.4112 21.4012 7.58885 19.7964 4.22196C19.2119 2.99586 18.9197 2.38281 18.0684 2.0971C17.217 1.8114 16.4534 2.17794 14.9263 2.91103Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M11.4581 20.7709L9.96674 22C6.60515 19.3339 7.01583 18.0625 7.01583 13H8.14966C8.60978 15.8609 9.69512 17.216 11.1927 18.197C12.1152 18.8012 12.3054 20.0725 11.4581 20.7709Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M7.5 12.5V6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        
                      </TabsTrigger>
                      <TabsTrigger value="schedule">
                         <svg xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                          <path d="M18 2V4M6 2V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M3.5 8H20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M3 8H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                       </TabsTrigger>
                      <TabsTrigger value="speakers">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                          <path d="M18.6161 20H19.1063C20.2561 20 21.1707 19.4761 21.9919 18.7436C24.078 16.8826 19.1741 15 17.5 15M15.5 5.06877C15.7271 5.02373 15.9629 5 16.2048 5C18.0247 5 19.5 6.34315 19.5 8C19.5 9.65685 18.0247 11 16.2048 11C15.9629 11 15.7271 10.9763 15.5 10.9312" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                          <path d="M4.48131 16.1112C3.30234 16.743 0.211137 18.0331 2.09388 19.6474C3.01359 20.436 4.03791 21 5.32572 21H12.6743C13.9621 21 14.9864 20.436 15.9061 19.6474C17.7889 18.0331 14.6977 16.743 13.5187 16.1112C10.754 14.6296 7.24599 14.6296 4.48131 16.1112Z" stroke="currentColor" stroke-width="1.5" />
                          <path d="M13 7.5C13 9.70914 11.2091 11.5 9 11.5C6.79086 11.5 5 9.70914 5 7.5C5 5.29086 6.79086 3.5 9 3.5C11.2091 3.5 13 5.29086 13 7.5Z" stroke="currentColor" stroke-width="1.5" />
                        </svg>
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="event-details">
                      <div className="mt-4">
                        <p>{events[expandedCard].description}</p>
                        <div className="mt-4 flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <MapPinIcon className="w-5 h-5 text-muted-foreground" />
                            <span>{events[expandedCard].location}</span>
                          </div>
                          {events[expandedCard].time !== "" && (
                            <div className="flex items-center gap-2">
                              <ClockIcon className="w-5 h-5 text-muted-foreground" />
                              <span>{events[expandedCard].time}</span>
                            </div>
                          )}
                        </div>
                        <div className="mt-4">
                          <h3 className="text-lg font-semibold">Hot Topics</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {events[expandedCard].hotTopics.map(
                              (topic, index) => (
                                <div
                                  key={index}
                                  className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
                                >
                                  {topic}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="schedule">
                      <div className="mt-4 max-h-64 overflow-y-auto">
                        {events[expandedCard].schedule.length === 0 ? (
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
                            {events[expandedCard].schedule.map(
                              (item, index) => (
                                <div
                                  key={index}
                                  className="bg-muted p-4 rounded-lg relative overflow-visible	"
                                >
                                  <span className="absolute top-[-5px] right-0 text-xl">
                                    {item.emoji}
                                  </span>
                                  <div className="font-semibold">
                                    {item.time}
                                  </div>
                                  <div className="text-sm text-stone-600">
                                    {item.event}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    </TabsContent>
                    <TabsContent value="speakers">
                      {events[expandedCard].speakers.length === 0 ? (
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
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 max-h-64 overflow-y-auto">
                          {events[expandedCard].speakers.map(
                            (speaker, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-4"
                              >
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
                            )
                          )}
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                  <div className="mt-4 flex gap-2">
                    <Button>
                      <a target="_blank" href={events[expandedCard].rsvp}>
                        RSVP
                      </a>
                    </Button>
                    {events[expandedCard].calendar && (
                      <Button variant="secondary">
                        <a target="_blank" href={events[expandedCard].calendar}>
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

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
