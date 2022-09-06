import { Section } from "../Layout/Section";
import { Container } from "../Layout/Container";
import { CountUp } from "../tools/CountUp";
import { Tasks } from "../tools/Task/Tasks";

const Home = () => {
  return (
    <Section top='sm' bottom='sm'>
      <Container size=''>
        <CountUp />
        <Tasks />
      </Container>
    </Section>
  );
};

export default Home;
