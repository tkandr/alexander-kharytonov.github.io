import Quests from "app/components/quests";

export default function LatestQuestsPageLoading(): React.ReactElement {
  return <Quests title="Latest Quests" useSkeleton={true} questsSize={5} />;
}
