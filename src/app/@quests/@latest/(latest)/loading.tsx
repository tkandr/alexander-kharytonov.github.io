import Quests from "app/components/quests";

export default function LatestQuestsPageLoading() {
  return <Quests title="Latest Quests" useSkeleton={true} questsSize={5} />;
}
