import Quests from "app/components/quests";

async function getLaunchJoyQuests() {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "Creature",
          points: 120,
          stagesCount: 3,
          currentState: 0,
          image: "/images/quests/placeholder_6.jpg",
        },
        {
          title: "Creature",
          points: 466,
          stagesCount: 5,
          currentState: 3,
          image: "/images/quests/placeholder_7.jpg",
        },
        {
          title: "Creature",
          points: 245,
          stagesCount: 4,
          currentState: 2,
          image: "/images/quests/placeholder_8.jpg",
        },
        {
          title: "Creature",
          points: 890,
          stagesCount: 7,
          currentState: 1,
          image: "/images/quests/placeholder_8.jpg",
        },
        {
          title: "Creature",
          points: 340,
          stagesCount: 4,
          currentState: 3,
          image: "/images/quests/placeholder_1.jpg",
        },
        {
          title: "Creature",
          points: 120,
          stagesCount: 3,
          currentState: 0,
          image: "/images/quests/placeholder_10.jpg",
        },
        {
          title: "Creature",
          points: 466,
          stagesCount: 5,
          currentState: 3,
          image: "/images/quests/placeholder_11.jpg",
        },
        {
          title: "Creature",
          points: 245,
          stagesCount: 4,
          currentState: 2,
          image: "/images/quests/placeholder_12.jpg",
        },
        {
          title: "Creature",
          points: 890,
          stagesCount: 7,
          currentState: 1,
          image: "/images/quests/placeholder_4.jpg",
        },
        {
          title: "Creature",
          points: 340,
          stagesCount: 4,
          currentState: 3,
          image: "/images/quests/placeholder_5.jpg",
        },
      ]);
    }, 500);
  });

  return data;
}

export default async function LaunchJoyQuestsPage() {
  return (
    <Quests
      title="LaunchJoy Quests"
      quests={(await getLaunchJoyQuests()) as []}
    />
  );
}
