import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Section } from "../Layout/Section";
import { Container } from "../Layout/Container";

type DateType = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const ReactQuery = () => {
  const [resDate, setResDate] = useState([]);
  const { isLoading, error, data } = useQuery(["jsonplaceholderUser"], () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
  );

  if (isLoading) {
    return <p className='text-indigo-500 font-mono text-xl'>loading.....</p>;
  }

  if (error) {
    return <p className='text-red-400 font-mono text-xl'>error</p>;
  }
  return (
    <Section top='sm' bottom='sm'>
      <Container size=''>
        <ul>
          {data &&
            data.map((data: DateType) => <li key={data.id}>{data.name}</li>)}
        </ul>
      </Container>
    </Section>
  );
};

export default ReactQuery;
