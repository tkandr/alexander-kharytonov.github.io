import Quests from "app/components/quests";

async function getLatestQuests() {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "Project name",
          points: 120,
          stagesCount: 3,
          currentState: 0,
          image: "/images/quests/placeholder_10.jpg",
        },
        {
          title: "Project name",
          points: 466,
          stagesCount: 5,
          currentState: 3,
          image: "/images/quests/placeholder_11.jpg",
        },
        {
          title: "Project name",
          points: 245,
          stagesCount: 4,
          currentState: 2,
          image: "/images/quests/placeholder_12.jpg",
        },
        {
          title: "Project name",
          points: 890,
          stagesCount: 7,
          currentState: 1,
          image: "/images/quests/placeholder_4.jpg",
        },
        {
          title: "Project name",
          points: 340,
          stagesCount: 4,
          currentState: 3,
          image: "/images/quests/placeholder_5.jpg",
        },
      ]);
    }, 1500);
  });

  return data;
}

export default async function LatestQuestsPage(): Promise<React.ReactElement> {
  return (
    <Quests title="Latest Quests" quests={(await getLatestQuests()) as []} />
  );
}
