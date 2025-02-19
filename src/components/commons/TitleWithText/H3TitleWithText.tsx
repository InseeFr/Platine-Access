type Props = {
  title: string;
  text: string;
};

export const H3TitleWithText = ({ title, text }: Props) => {
  return (
    <div>
      <h3 className="fr-mb-2w">{title}</h3>
      <p>{text}</p>
    </div>
  );
};
