import "./Info.css";

interface Counts {
  counts: number;
}

const Info = ({ counts }: Counts): JSX.Element => {
  return (
    <section className="controls">
      <p className="info">{counts} gentlemen pointing at you</p>
    </section>
  );
};

export default Info;
