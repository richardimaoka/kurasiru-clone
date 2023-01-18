import { FragmentType, useFragment } from "../../libs/gql";
import { graphql } from "../../libs/gql/gql";

const VideoComponent_Fragment = graphql(`
  fragment VideoComponent_Fragment on Video {
    thumbnailUrl
    source
    type
  }
`);

export interface VideoComponentProps {
  fragment: FragmentType<typeof VideoComponent_Fragment>;
}

export const VideoComponent = (props: VideoComponentProps): JSX.Element => {
  const fragment = useFragment(VideoComponent_Fragment, props.fragment);
  return fragment.source && fragment.thumbnailUrl && fragment.type ? (
    <video
      width="560"
      height="560"
      preload="auto"
      poster={fragment.thumbnailUrl}
      controls={true} //"controls"
      controlsList="nodownload"
      muted={true} //"muted"
    >
      <source src={fragment.source} type={fragment.type} />
      <p>動画を再生するには、videoタグをサポートしたブラウザが必要です。</p>
    </video>
  ) : (
    <></>
  );
};
