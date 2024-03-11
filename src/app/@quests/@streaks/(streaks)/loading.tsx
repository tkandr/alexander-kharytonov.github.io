import Quests from "app/components/quests";

export default function StreaksQuestsPageLoading(): React.ReactElement {
  return <Quests title="Streaks" useSkeleton={true} questsSize={5} />;
}
