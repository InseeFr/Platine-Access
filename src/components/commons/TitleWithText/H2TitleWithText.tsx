type Props = {
  title: string;
  text: string;
};

export const H2TitleWithText = ({ title, text }: Props) => {
  return (
    <div>
      <h2 className="fr-mb-2w">{title}</h2>
      <p>{text}</p>
    </div>
  );
};
