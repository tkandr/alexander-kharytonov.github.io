import Quests from "app/components/quests";

export default function StreaksQuestsPageLoading() {
  return <Quests title="Streaks" useSkeleton={true} questsSize={5} />;
}
