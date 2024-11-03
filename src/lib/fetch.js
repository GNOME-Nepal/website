/**
 * Here should reside the code to fetch the data from the database
 * But for now, we manually put the data
 */

const project_count = 5; // set this
const contributors_count = 1; // this as well

// populate this as this shall provide everything for the rest of the website
const contributor_list = {
    "a": {
        link_to_img: "/contributors/c1.jpg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "b": {
        link_to_img: "/contributors/c2.jpg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "c": {
        link_to_img: "/contributors/c3.jpg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "d": {
        link_to_img: "/contributors/c4.jpg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "e": {
        link_to_img: "/contributors/c5.jpg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "f": {
        link_to_img: "/contributors/c6.jpg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "g": {
        link_to_img: "/contributors/c7.jpg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "h": {
        link_to_img: "/contributors/c8.webp",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "i": {
        link_to_img: "/contributors/c9.webp",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "j": {
        link_to_img: "/contributors/c10.jpeg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "k": {
        link_to_img: "/contributors/c11.jpeg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "l": {
        link_to_img: "/contributors/c12.jpeg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "m": {
        link_to_img: "/contributors/c11.jpeg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "n": {
        link_to_img: "/contributors/c10.jpeg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
};

// get this data as well
const projects_list = {
    0: {
        "Website": {
            github_link: "www.website-repo.com",
            link_to_img: "/images/logo.png",
            site_link: "www.website.com",
            contributors: ["a", "b", "c", "n", "m", "k", "f"],
            status: "COMPLETED",
            details: "A user-friendly platform designed to enhance the browsing experience with intuitive navigation, fast loading times, and responsive design.",
            more_details: "Developed with a focus on SEO and accessibility, this website features adaptive layout components, multilingual support, and custom CMS integration for easy content updates."
        }
    },
    1: {
        "Game": {
            github_link: "www.game-repo.com",
            link_to_img: "/images/logo.png",
            site_link: "www.gamehub.com",
            contributors: ["d", "e", "g", "h", "i"],
            status: "IN PROGRESS",
            details: "An action-packed RPG that combines narrative-driven gameplay with dynamic combat mechanics. Players can explore vast open-world settings and interact with various NPCs.",
            more_details: "Currently in alpha stage, focusing on level design and character mechanics, with plans for multiplayer integration and additional quests in upcoming versions."
        }
    },
    2: {
        "Mobile App": {
            github_link: "www.mobileapp-repo.com",
            link_to_img: "/images/bottom_section.webp",
            site_link: "www.mobileapphub.com",
            contributors: ["k", "l", "m", "n"],
            status: "ABANDONED",
            details: "A social networking application aimed at connecting artists and creators with their fanbase through shared galleries, live streams, and interactive comments.",
            more_details: "The project faced challenges in user retention and engagement, leading to its suspension. Plans to revisit the idea may emerge once a solid growth strategy is devised."
        }
    },
    3: {
        "AI Tool": {
            github_link: "www.aitool-repo.com",
            link_to_img: "/images/GNOMENepal.png",
            site_link: "www.aitool.com",
            contributors: ["a", "c", "e", "f", "g", "i"],
            status: "COMPLETED",
            details: "An AI-powered analytics tool that helps businesses process large datasets for insights on customer behavior, market trends, and performance metrics.",
            more_details: "Features include custom report generation, real-time analysis, and a user-friendly dashboard, making data-driven decisions accessible to companies of all sizes."
        }
    },
    4: {
        "Desktop Software": {
            github_link: "www.desktopsoft-repo.com",
            link_to_img: "/favicon.jpg",
            site_link: "www.desktopsoft.com",
            contributors: ["b", "d", "f", "h", "j"],
            status: "IN PROGRESS",
            details: "A powerful productivity suite with tools for document editing, spreadsheet management, and real-time collaboration, designed to work offline.",
            more_details: "Beta testing is currently ongoing, with a focus on improving load times and adding more document export options. Planned for public release in the next quarter."
        }
    }
};

const fetchProject = (kind) => {
    let result = {};
    for (let i = 0; i < project_count; i++) {
        const project = projects_list[i];
        const projectName = Object.keys(project)[0];
        const projectDetails = project[projectName];
        if (projectDetails.status === kind)
            result[projectName] = projectDetails;
    }
    return result;
}

const fetchContributor = (name) => {
    return contributor_list[name];
};

export { fetchProject, fetchContributor };