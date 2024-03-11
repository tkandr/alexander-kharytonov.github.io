import Quests from "app/components/quests";

export default function LaunchJoyQuestsPageLoading(): React.ReactElement {
  return <Quests title="LaunchJoy Quests" useSkeleton={true} questsSize={10} />;
}
