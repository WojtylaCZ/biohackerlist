import React, { useCallback, useEffect, useState } from "react";
import { Col, Collapse, Container, Row, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { ChevronDownIcon } from "../assets/icons/chevronDown";
import { ChevronUpIcon } from "../assets/icons/chevronUp";
import ReactGA from "react-ga4";
import { useTranslation } from "react-i18next";

ReactGA.initialize("G-TJGECJ2MHV");

export type Trailpark = {
  id: number;
  name: string;
  slug: string;
  qrImage: string | null;
  bankAccountNumber: string | null;
  transparentBankAccountUrl: string | null;
  variableSymbol: number | null;
  url: string | null;
  facebookPageUrl: string | null;
  operator: string;
  checkedAt: string;
};

type ResourceType = "book" | "article" | "podcast";
type HackComplexity = "easy" | "medium" | "challenging" | "longterm";

type HackLocale = {
  [key: string]: {
    name_locale: string;
    annotation_locale: string;
    actionInShort: string;
    complexity: HackComplexity;
    resources: Array<{ type: ResourceType; title: string; link: string }>;
  };
};

export type Hack = {
  id: string | number;
  canonical_name: string;
  slug: string;
  locales: HackLocale;
};

export const HackCard = ({ hack, isFirst }: { hack: Hack; isFirst: boolean }) => {
  const { t } = useTranslation();

  const { trailparkSlug } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = React.useRef<HTMLInputElement>(null);

  const csResources = hack.locales.cs.resources.map((resource) => {
    let icon;
    if (resource.type === "book") {
      icon = `📗 ${resource.title}`;
    }
    if (resource.type === "article") {
      icon = `📰 ${resource.title}`;
    }
    if (resource.type === "podcast") {
      icon = `🎧 ${resource.title}`;
    }

    return (
      <>
        <a href={resource.link} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
        <br />
      </>
    );
  });

  const enResources = hack.locales.en?.resources.map((resource) => {
    let icon;
    if (resource.type === "book") {
      icon = `📗 ${resource.title}`;
    }
    if (resource.type === "article") {
      icon = `📰 ${resource.title}`;
    }
    if (resource.type === "podcast") {
      icon = `🎧 ${resource.title}`;
    }

    return (
      <>
        <a href={resource.link} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
        <br />
      </>
    );
  });

  const scrollToTarget = () => {
    if (ref && ref.current) {
      const position = ref.current.getBoundingClientRect();
      window.scrollTo({ top: position.top, left: 0 });
    }
  };

  useEffect(() => {
    if (trailparkSlug === hack.slug) {
      setIsExpanded(true);
      scrollToTarget();
      return;
    }

    if (!trailparkSlug) {
      setIsExpanded(isFirst);
      window.scrollTo(0, 0);
    }
  }, [trailparkSlug, hack.slug, setIsExpanded, isFirst]);

  const handleClick = useCallback(() => {
    if (!isExpanded) {
      // ReactGA.event("trailparkcard_expanded", {
      //   trailparkId: trailpark.id,
      // });
      // ReactGA.event({
      //   // action becomes the event name
      //   action: `trailparkcardexpanded2_${trailpark.id}`,
      //   //  "event_category" becomes a custom parameter
      //   category: `${trailpark.id}`,
      // });
    }
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "2px",
        boxShadow: "0 0 20px 0 rgba(29, 17, 86, 0.12)",
      }}
      aria-controls="example-collapse-text"
      aria-expanded={isExpanded}
      ref={ref}
    >
      <style type="text/css">
        {`
          .trailparkHeader:hover {
            background-color: #F8F8F8;
          }
          
          .trailparkHeader:hover .detailDropdown {
            text-decoration: underline
        }
          `}
      </style>
      <div className="trailparkHeader">
        <div
          style={{
            display: "flex",
            padding: "16px 16px 16px 16px ",
            alignItems: "center",
            cursor: "pointer",
            justifyContent: "space-between",
            alignContent: "center",
          }}
          onClick={handleClick}
        >
          <span>
            <h3
              style={{
                marginBottom: "0px",
              }}
            >
              {hack.locales.cs.name_locale}
            </h3>
          </span>

          <div
            className="detailDropdown"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <h6
              style={{
                fontSize: "smaller",
                paddingRight: "0.6em",
                marginBottom: "-0.2em",
                width: "95px",
                textAlign: "right",
              }}
            >
              {isExpanded ? t("trailpark.hideDetailsH6") : t("trailpark.showDetailsH6")}
            </h6>

            <div style={{ width: "10px" }}>
              {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </div>
          </div>
        </div>
      </div>
      <Collapse in={isExpanded}>
        <div id="example-collapse-text">
          <hr style={{ marginTop: "0px" }} />

          <Container>
            <div style={{ margin: "10px" }}>
              <Row>
                <Col>
                  <div style={{ margin: "10px" }}>Ve zkratce: {hack.locales.cs.actionInShort}</div>
                </Col>
                <Col xs lg="3">
                  <div>Narocnost: {hack.locales.cs.complexity}</div>
                </Col>
              </Row>
              <Row>
                <div style={{ margin: "10px" }}>{hack.locales.cs.annotation_locale}</div>
              </Row>

              <Row>
                <Col>Zdroje: </Col>
              </Row>
              <Row>
                <Col>
                  V 🇨🇿: <br /> {csResources}
                </Col>

                <Col>
                  In 🇺🇸: <br /> {enResources}{" "}
                </Col>
              </Row>
              <hr />
              {hack.slug !== "new-hack" ? (
                <Row>
                  <Col>
                    133x libi 👍 / 12x nelibi 👎
                    <br />
                    <br />
                    68 biohackeru ma v oblibenych
                  </Col>
                  <Col>
                    <Stack>
                      <span>✅ Tohle jsem vyzkousel</span>

                      <span>📈 Delam!</span>

                      <span>🆒 Vypada zajimave!</span>
                    </Stack>
                    {/* <div className="hover-text">
                    ✅
                    <span className="tooltip-text" id="fade">
                      Tohle jsem vyzkousel
                    </span>
                  </div>
                  <div className="hover-text">
                    📈
                    <span className="tooltip-text" id="fade">
                      Delam!
                    </span>
                  </div>
                  <div className="hover-text">
                    🆒
                    <span className="tooltip-text" id="fade">
                      Vypada zajimave!
                    </span>
                  </div> */}
                  </Col>
                </Row>
              ) : (
                <></>
              )}
            </div>
          </Container>
        </div>
      </Collapse>
    </div>
  );
};
