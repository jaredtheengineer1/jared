interface TopicsProps extends React.HTMLAttributes<HTMLSpanElement> {
  topics: string[];
}
export const Topics = ({ topics, ...rest }: TopicsProps) => {
  const formattedTopics = (
    <ul
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {topics.map((topic) => (
        <li key={topic} className="case-study-topic">
          {topic}
        </li>
      ))}
    </ul>
  );
  return <span {...rest}>{formattedTopics}</span>;
};
