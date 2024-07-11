interface PeopleData {
  name: string;
  gender: string;
  height: string;
  mass: string;
}

interface Data {
  data: PeopleData[];
}

function Render(props: Data) {
  return (
    <div>
      {props.data.map((people: PeopleData) => (
        <div className="card" key={people.name}>
          <p className="name">name: {people.name}</p>
          <p className="info"> gender: {people.gender}</p>
          <p className="info">height: {people.height}</p>
          <p className="info">mass: {people.mass}</p>
        </div>
      ))}
    </div>
  );
}

export default Render;
