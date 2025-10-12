import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ContributorCard from "./ContributorCard";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const ContributorsDetails = () => {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchContributors() {
      const contributionResponse = await axios.get(
        "https://raw.githubusercontent.com/GNOME-Nepal/contributors/refs/heads/main/contributors.json",
      );
      setContributors(contributionResponse.data);
      setLoading(false);
    }

    setLoading(true);
    fetchContributors();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }

  const contributorItems = contributors.map((contributor, index) => ({
    name: contributor.name,
    content: (
      <ContributorCard contributor={contributor} key={`contributor-${index}`} />
    ),
  }));

  return (
    <div className="w-full lg:mt-12 mt-2">
      <InfiniteMovingCards
        direction="left"
        speed="slow"
        items={contributorItems}
        pauseOnHover={true}
      />
    </div>
  );
};

export default ContributorsDetails;
