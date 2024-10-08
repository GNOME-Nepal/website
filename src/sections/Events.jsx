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
      <section id="events" className="">
        {events.length > 0 ? (
          <div className="flex flex-col md:flex-row h-content">
            <div className="w-full md:w-1/3 bg-background space-y-8">
              <div className="md:text-left text-center">
                <h2 className="text-3xl font-bold">Events Calendar</h2>
              </div>
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm ">
                Upcoming Events
              </div>
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`bg-card p-4 rounded-lg shadow-lg cursor-pointer transition-all hover:shadow-lg ${
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
              <div className="flex-1 bg-background p-6 overflow-y-auto">
                <div className="bg-card p-6 rounded-lg shadow-md transition-all duration-500 ease-in-out">
                  <div className="flex items-center justify-between pb-2">
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
                        Event Details
                      </TabsTrigger>
                      <TabsTrigger value="schedule">Schedule</TabsTrigger>
                      <TabsTrigger value="speakers">Speakers</TabsTrigger>
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
