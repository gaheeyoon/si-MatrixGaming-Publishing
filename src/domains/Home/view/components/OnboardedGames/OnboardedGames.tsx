import { useCustomMediaQuery } from "@/common/themes/UseCustomMediaQuery";
import { TitleSection } from "@/domains/Home/common/components/TitleSection";
import { css } from "@emotion/react";
import { GameCard } from "./elements/GameCard";
import { CardItems } from "./models/card.models";

export const OnboardedGames = () => {
  const { isMedium } = useCustomMediaQuery();
  return (
    <div css={st.root(isMedium)}>
      <TitleSection title="Onboarded Games" onClick={() => alert("click")} />
      <div css={st.container(isMedium)}>
        {CardItems.map((it, index) => (
          <GameCard key={index} src={it.src} title={it.title} desc={it.desc} />
        ))}
      </div>
    </div>
  );
};

const st = {
  root: (isMedium: boolean) => css`
    width: 100%;
    max-width: 1200px;
    padding: ${isMedium ? "0 16px" : "0 24px"};
    margin: 0 auto;
    margin-bottom: 240px;
  `,
  container: (isMedium: boolean) => css`
    width: 100%;
    display: grid;
    grid-template-columns: ${isMedium ? "1fr 1fr" : "1fr 1fr 1fr"};
    column-gap: 3%;
    row-gap: 3%;
  `,
};
