function Results({ classes }) {
  if (classes.length === 0) {
    return <p>No results found</p>;
  }
  return (
    <ul>
      {classes.map((classObj, index) => (
        <li key={index}>
          <p>{classObj.className}</p>
          <p>
            {classObj.meetingStart} - {classObj.meetingEnd}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default Results;
