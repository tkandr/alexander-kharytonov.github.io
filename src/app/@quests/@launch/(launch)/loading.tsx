import Quests from "app/components/quests";

export default function LaunchJoyQuestsPageLoading() {
  return <Quests title="LaunchJoy Quests" useSkeleton={true} questsSize={10} />;
}
