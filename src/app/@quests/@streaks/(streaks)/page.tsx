import Quests from "app/components/quests";

async function getStreaksQuests() {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "Astronaut",
          points: 120,
          stagesCount: 3,
          currentState: 0,
          image: "/images/quests/placeholder_1.jpg",
        },
        {
          title: "Astronaut",
          points: 466,
          stagesCount: 5,
          currentState: 3,
          image: "/images/quests/placeholder_2.jpg",
        },
        {
          title: "Astronaut",
          points: 245,
          stagesCount: 4,
          currentState: 2,
          image: "/images/quests/placeholder_3.jpg",
        },
        {
          title: "Astronaut",
          points: 890,
          stagesCount: 7,
          currentState: 1,
          image: "/images/quests/placeholder_4.jpg",
        },
        {
          title: "Astronaut",
          points: 340,
          stagesCount: 4,
          currentState: 3,
          image: "/images/quests/placeholder_5.jpg",
        },
      ]);
    }, 1000);
  });

  return data;
}

export default async function StreaksQuestsPage(): Promise<React.ReactElement> {
  return <Quests title="Streaks" quests={(await getStreaksQuests()) as []} />;
}
