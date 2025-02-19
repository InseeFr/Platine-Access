import { fr } from "@codegouvfr/react-dsfr";
import SelfTrainingSvg from "./self-training.svg";
import { width } from "@mui/system";

export const SelfTrainingPictogram = () => {
  return (
    // <svg
    //   className={fr.cx("fr-artwork", "fr-responsive-img", "fr-hidden", "fr-unhidden-lg", "fr-mr-3w")}
    //   aria-hidden="true"
    //   style={{ width: "200px", height: "200px" }}
    //   viewBox="0 0 80 80"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <use xlinkHref={`#${SelfTrainingSvg}`}></use>
    // </svg>
    <img src={SelfTrainingSvg} style={{ width: "200px", height: "200px" }} />
  );
};
