/**
 * Here should reside the code to fetch the data from the database
 * But for now, we manually put the data
 */

const project_count = 1; // set this
const contributors_count = 1; // this as well

// populate this as this shall provide everything for the rest of the website
const contributor_list = {
    "John Doe": {
        link_to_img: "/contributors/c1.jpg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "Krish Raul": {
        link_to_img: "/contributors/c2.jpg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "Boxer Aashish": {
        link_to_img: "/contributors/c3.jpg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "a": {
        link_to_img: "/contributors/c3.jpg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "b": {
        link_to_img: "/contributors/c3.jpg",
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
        link_to_img: "/contributors/c3.jpg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "e": {
        link_to_img: "/contributors/c3.jpg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "f": {
        link_to_img: "/contributors/c3.jpg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "g": {
        link_to_img: "/contributors/c3.jpg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "h": {
        link_to_img: "/contributors/c3.jpg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "i": {
        link_to_img: "/contributors/c3.jpg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "j": {
        link_to_img: "/contributors/c3.jpg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
    "k": {
        link_to_img: "/contributors/c3.jpg",
        socials: {
            // Links to social medias(could be useful in future)
        }
    },
};

// get this data as well
const projects_list = {
    0: {
        "Website": {
            github_link: "www.xyz.com",
            link_to_img: "/images/logo.png",
            site_link: "www.pqr.com",
            contributors: ["John Doe", "Krish Raul", "Boxer Aashish", "a", "b", "c", "d", "e" , "f", "g", "h", "i", "j", "k", "k", "k", "k", "k"],
            status: "COMPLETED", // could be "IN PROGRESS or ABANDONED"
        }
    }
};

const fetchProject = (kind) => {
    let result = {};
    for (let i = 0; i < project_count; i++) {
        const project = projects_list[i];
        const projectName = Object.keys(project)[0];
        const projectDetails = project[projectName];
        if (projectDetails.status === "COMPLETED")
            result[projectName] = projectDetails;
    }
    return result;
}

const fetchContributor = (name) => {
    return contributor_list[name];
};

export { fetchProject, fetchContributor };