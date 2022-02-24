import React from "react";
import {
  AbsoluteFill,
  Series,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import { Code } from "../components/Code";
import { BG_COLOR } from "../helpers/colors";
import { typeWriter } from "../Reactive";

export const CheckOnGithub: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const progress = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
  });
  return (
    <AbsoluteFill
      style={{
        color: "white",
        fontSize: 70,
        fontFamily: "Cubano",
        backgroundColor: BG_COLOR,
      }}
    >
      <Series>
        <Series.Sequence durationInFrames={20}>
          <AbsoluteFill
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Menlo",
              fontSize: 160,
            }}
          >
            $ git {typeWriter("checkout", progress)}
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={40}>
          <AbsoluteFill
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ marginTop: 40, marginBottom: 40 }}>
              Fork, clone and change this video on GitHub!
            </h1>
            <h1 style={{ marginTop: 40, marginBottom: 40 }}>
              Link in Description!
            </h1>
          </AbsoluteFill>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};