import { graphql } from "../../libs/gql/gql";
import { VideoComponentFragment } from "../../libs/gql/graphql";

graphql(`
  fragment VideoComponent on Video {
    thumbnailUrl
    source
    type
  }
`);

export interface VideoComponentProps {
  fragment: VideoComponentFragment;
}

export const VideoComponent = ({
  fragment,
}: VideoComponentProps): JSX.Element => {
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
