import { useEffect } from "react";
import { Image, Stack } from "react-bootstrap";
import { HacksSection } from "./category";
import Bulp from "../assets/img/bulp.png";

import { data } from "../assets/data/data-biohackerlist";
import { useNavigate, useParams } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { HeaderBar } from "./header-bar";
import { supportedLocales } from "./i18n";
import { FooterBar } from "./footer-bar";

export const Main = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { trailparkSlug, locale } = useParams();

  useEffect(() => {
    if (locale && !supportedLocales.includes(locale)) {
      navigate("/", { replace: true });
    }
    // const slugs = data.flatMap((district) => district.trailparks).map((t) => t.slug);
    // if (trailparkSlug && !slugs.includes(trailparkSlug)) {
    //   navigate("/", { replace: true });
    // }
  }, [navigate, trailparkSlug, locale]);

  const biohackerList = data.map((biohackCategory, id) => (
    <HacksSection
      key={id}
      name={biohackCategory.name}
      hacks={biohackCategory.hacks}
      isFirst={id === 0}
    />
  ));

  return (
    <>
      <HeaderBar />
      <div
        style={{
          margin: "auto",
          maxWidth: "1400px",
          height: "300px",
          position: "relative",
          width: "100%",
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 92.61%), url("https://biomimicry.org/wp-content/uploads/2020/08/mitsuo-komoriya-kHp5yiWQkrg-unsplash-980x653.jpg")`,
          // "Tiia Monto, CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0, via Wikimedia Commons",
          backgroundSize: "cover",
        }}
      >
        <h1
          style={{
            color: "#195513",
            textAlign: "center",
            fontFamily: "Kaushan Script",
            zIndex: "10",
            position: "absolute",
            left: "0px",
            bottom: "30%",
            right: "0px",
            fontSize: "calc(1.975rem + 1.3vw)",
          }}
        >
          {t("titles.mainH1")}
        </h1>
      </div>

      <Stack
        gap={4}
        style={{
          alignItems: "center",
          width: "95%",
          margin: "auto",
          maxWidth: "690px",
          marginBottom: "16px",
          marginTop: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span>{t("text.introLine1")}</span>

          <span>{t("text.introLine2")}</span>
          <br />
          <span>{t("text.introLine3")}</span>
          <br />
          <span>{t("text.introLine4")}</span>
          <hr
            style={{
              width: "100px",
              color: "#0a1c08",
              border: 0,
              borderTop: "1px solid",
              opacity: "90%",
            }}
          />
        </div>

        <Stack gap={5}>{biohackerList}</Stack>

        <Image
          src={Bulp}
          style={{
            maxWidth: "300px",
            width: "100%",
          }}
        />
      </Stack>

      <FooterBar />
    </>
  );
};
