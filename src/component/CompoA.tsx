import type { headType } from "../types/headType";

const CompoA = ({ title, age ,subTitle}:headType) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{age}</p>
      <p>{subTitle}</p>
    </section>
  );
};

export default CompoA;
