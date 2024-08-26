import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import SectionObserver from "@/components/Observer";

const Events = () => {
    const [expandedCard, setExpandedCard] = useState(0);
    const [activeTab, setActiveTab] = useState("event-details");
    const handleCardClick = (index) => {
        setExpandedCard(index);
    };

    const events = [
        // {
        //   title: "Tech Conference 2024",
        //   date: "June 15, 2024",
        //   description:
        //     "Join us for the annual Tech Conference, where industry leaders and innovators come together to share their insights and vision for the future of technology.",
        //   location: "San Francisco, CA",
        //   time: "9:00 AM - 5:00 PM",
        //   schedule: [
        //     {
        //       time: "9:00 AM - 10:00 AM",
        //       event: "Registration and Breakfast",
        //     },
        //     {
        //       time: "10:00 AM - 11:00 AM",
        //       event: "Keynote Address",
        //     },
        //     {
        //       time: "11:15 AM - 12:15 PM",
        //       event: "Panel Discussion: The Future of AI",
        //     },
        //     {
        //       time: "12:30 PM - 1:30 PM",
        //       event: "Lunch Break",
        //     },
        //     {
        //       time: "1:45 PM - 2:45 PM",
        //       event: "Breakout Sessions",
        //     },
        //     {
        //       time: "3:00 PM - 4:00 PM",
        //       event: "Networking and Demos",
        //     },
        //     {
        //       time: "4:15 PM - 5:00 PM",
        //       event: "Closing Remarks",
        //     },
        //   ],
        //   speakers: [
        //     {
        //       name: "John Doe",
        //       profession: "Software Engineer",
        //       twitter: "@johndoe",
        //       linkedin: "linkedin.com/in/johndoe",
        //     },
        //     {
        //       name: "Jane Smith",
        //       profession: "Product Manager",
        //       twitter: "@janesmith",
        //       linkedin: "linkedin.com/in/janesmith",
        //     },
        //     {
        //       name: "Bob Johnson",
        //       profession: "Data Scientist",
        //       twitter: "@bobjohnson",
        //       linkedin: "linkedin.com/in/bobjohnson",
        //     },
        //   ],
        //   hotTopics: [
        //     "AI",
        //     "Blockchain",
        //     "Cloud Computing",
        //     "UX Design",
        //     "Accessibility",
        //     "Prototyping",
        //     "Renewable Energy",
        //     "Circular Economy",
        //     "Sustainable Practices",
        //   ],
        // },
        // {
        //   title: "Design Meetup",
        //   date: "July 10, 2024",
        //   description:
        //     "Designers from all backgrounds are invited to this monthly meetup to network, share ideas, and collaborate on exciting projects.",
        //   location: "New York City, NY",
        //   time: "6:30 PM - 9:00 PM",
        //   schedule: [
        //     {
        //       time: "6:30 PM - 7:00 PM",
        //       event: "Registration and Networking",
        //     },
        //     {
        //       time: "7:00 PM - 7:45 PM",
        //       event: "Presentation: Designing for Accessibility",
        //     },
        //     {
        //       time: "8:00 PM - 8:45 PM",
        //       event: "Group Discussions and Brainstorming",
        //     },
        //     {
        //       time: "8:45 PM - 9:00 PM",
        //       event: "Closing Remarks and Next Steps",
        //     },
        //   ],
        //   speakers: [
        //     {
        //       name: "Emily Lee",
        //       profession: "UX Designer",
        //       twitter: "@emilylee",
        //       linkedin: "linkedin.com/in/emilylee",
        //     },
        //     {
        //       name: "Michael Chen",
        //       profession: "Graphic Designer",
        //       twitter: "@michaelchen",
        //       linkedin: "linkedin.com/in/michaelchen",
        //     },
        //     {
        //       name: "Sarah Park",
        //       profession: "Product Designer",
        //       twitter: "@sarahpark",
        //       linkedin: "linkedin.com/in/sarahpark",
        //     },
        //   ],
        //   hotTopics: ["UX Design", "Accessibility", "Prototyping"],
        // },
        // {
        //   title: "Sustainability Summit",
        //   date: "September 1, 2024",
        //   description:
        //     "Explore the latest advancements in sustainable technologies and learn how to implement eco-friendly practices in your business or community.",
        //   location: "Seattle, WA",
        //   time: "8:00 AM - 4:00 PM",
        //   schedule: [
        //     {
        //       time: "8:00 AM - 9:00 AM",
        //       event: "Registration and Breakfast",
        //     },
        //     {
        //       time: "9:15 AM - 10:15 AM",
        //       event: "Keynote: The Future of Renewable Energy",
        //     },
        //     {
        //       time: "10:30 AM - 11:30 AM",
        //       event: "Panel Discussion: Sustainable Practices in Business",
        //     },
        //     {
        //       time: "11:45 AM - 1:00 PM",
        //       event: "Lunch and Networking",
        //     },
        //     {
        //       time: "1:15 PM - 2:15 PM",
        //       event: "Breakout Sessions: Circular Economy and Waste Reduction",
        //     },
        //     {
        //       time: "2:30 PM - 3:30 PM",
        //       event: "Hands-on Workshop: Sustainable Product Design",
        //     },
        //     {
        //       time: "3:45 PM - 4:00 PM",
        //       event: "Closing Remarks and Next Steps",
        //     },
        //   ],
        //   speakers: [
        //     {
        //       name: "David Kim",
        //       profession: "Sustainability Consultant",
        //       twitter: "@davidkim",
        //       linkedin: "linkedin.com/in/davidkim",
        //     },
        //     {
        //       name: "Olivia Nguyen",
        //       profession: "Environmental Engineer",
        //       twitter: "@olivianguyen",
        //       linkedin: "linkedin.com/in/olivianguyen",
        //     },
        //     {
        //       name: "Tom Wilson",
        //       profession: "Renewable Energy Specialist",
        //       twitter: "@tomwilson",
        //       linkedin: "linkedin.com/in/tomwilson",
        //     },
        //   ],
        //   hotTopics: [
        //     "Renewable Energy",
        //     "Circular Economy",
        //     "Sustainable Practices",
        //   ],
        // },
    ];
    return (
        <SectionObserver id="events" >
            <section id="events" className="">
                {events.length > 0 ? (
                    <div className="flex flex-col md:flex-row h-content">
                        <div className="w-full md:w-1/3 bg-background space-y-8">
                            <div className="md:text-left text-center">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-2">
                                    Upcoming Events
                                </div>
                                <h2 className="text-3xl font-bold">Events Calendar</h2>
                            </div>
                            {events.map((event, index) => (
                                <div
                                    key={index}
                                    className={`bg-card p-4 rounded-lg shadow-md cursor-pointer transition-all hover:shadow-lg ${index === expandedCard ? "bg-card-foreground text-card" : ""
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
                                    <div className="flex items-center justify-between">
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
                                                    <div className="flex items-center gap-2">
                                                        <ClockIcon className="w-5 h-5 text-muted-foreground" />
                                                        <span>{events[expandedCard].time}</span>
                                                    </div>
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
                                            <div className="mt-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    {events[expandedCard].schedule.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className="bg-muted p-4 rounded-lg"
                                                        >
                                                            <div className="font-semibold">{item.time}</div>
                                                            <div>{item.event}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </TabsContent>
                                        <TabsContent value="speakers">
                                            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                                                {events[expandedCard].speakers.map((speaker, index) => (
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
                                                            <div className="text-muted-foreground">
                                                                {speaker.profession}
                                                            </div>
                                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                                <TwitterIcon className="w-4 h-4" />
                                                                <a
                                                                    href="#"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="hover:underline"
                                                                >
                                                                    {speaker.twitter}
                                                                </a>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                                <LinkedinIcon className="w-4 h-4" />
                                                                <a
                                                                    href="#"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="hover:underline"
                                                                >
                                                                    {speaker.linkedin}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </TabsContent>
                                    </Tabs>
                                    <div className="mt-4 flex gap-2">
                                        <Button>RSVP</Button>
                                        <Button variant="secondary">Add to Calendar</Button>
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
