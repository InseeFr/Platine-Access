import Banner from "../../assets/banner.svg";

export const BannerImage = () => {
  return (
    <img
      src={Banner}
      alt=""
      role="presentation"
      width="100%"
      className={"fr-unhidden-md fr-hidden"}
    ></img>
  );
};
