import { FragmentType, useFragment } from "../../libs/gql";
import { graphql } from "../../libs/gql/gql";

import { Video } from "../../libs/gql/graphql";

type Props = {
  video: Video
}
export const VideoComponent = (props: Props): JSX.Element => {
  return (
    <video
      width="560"
      height="560"
      preload="auto"
      poster={props.video.thumbnailUrl!}
      controls={true} //"controls"
      controlsList="nodownload"
      muted={true} //"muted"
    >
      <source src={props.video.source!} type={props.video.type!} />
      <p>動画を再生するには、videoタグをサポートしたブラウザが必要です。</p>
    </video>
  )
};
