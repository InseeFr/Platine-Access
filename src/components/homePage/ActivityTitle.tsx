import Tile from "@codegouvfr/react-dsfr/Tile";
// import ArchivesSvg from "../../assets/pictograms/archives.svg";
// import DocumentSearchSvg from "../../assets/pictograms/document-search.svg";
import CommunitySvg from "../../assets/pictograms/community.svg";
import PictogramTest from "@codegouvfr/react-dsfr/dsfr/artwork/pictograms/digital/application.svg";
import { useTranslation } from "i18n";
import { fr } from "@codegouvfr/react-dsfr";

type Props = {
  imageUrl: string;
  title: string;
  desc: string;
  link: string;
};

const ActivityTile = ({ imageUrl, title, desc, link }: Props) => (
  <Tile
    className={fr.cx("fr-col-md", "fr-mx-2w", "fr-my-2w")}
    enlargeLinkOrButton
    imageWidth="150px"
    imageHeight="150px"
    imageUrl={imageUrl}
    desc={desc}
    linkProps={{ href: link }}
    orientation="vertical"
    title={title}
    titleAs="h2"
    imageAlt="Pictogram"
  />
);

export const ActivityTiles = () => {
  const { t } = useTranslation("HomePage");
  const tilesData: Props[] = [
    { imageUrl: PictogramTest, title: t("activitiesCollect"), desc: t("LearnMore"), link: "#" },
    // { imageUrl: DocumentSearchSvg, title: t("activitiesAnalyze"), desc: t("LearnMore"), link: "#" },
    { imageUrl: CommunitySvg, title: t("activitiesDiffuse"), desc: t("LearnMore"), link: "#" },
  ];

  return (
    <>
      {tilesData.map((tile, index) => (
        <ActivityTile key={index} {...tile} />
      ))}
    </>
  );
};

{
  /* <div id="fr-tile-:rd:" class="fr-tile fr-enlarge-link fr-tile--vertical fr-col-md fr-mx-2w fr-my-2w">
  <div class="fr-tile__body">
    <div class="fr-tile__content">
      <h2 class="fr-tile__title">
        <a href="#" class="" aria-disabled="false">Diffuser</a>
      </h2>
      <p class="fr-tile__desc">En savoir plus</p>
    </div>
  </div>
<div class="fr-tile__header">
    <div class="tile__pictogram">
      <img class="fr-responsive-img" src="/src/assets/pictograms/community.png" alt="Pictogram" width="150" height="150" data-fr-js-ratio="true">
    </div>
  </div>
</div> */
}
