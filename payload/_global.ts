import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = '김지혜의 이력서';
const description = '김지혜의 포트폴리오 및 이력서입니다.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: '김지혜의 이력서 미리보기',
        },
      ],
      type: 'profile',
      profile: {
        firstName: '지혜',
        lastName: '김',
        username: 'kjh',
        gender: 'female',
      },
    },
  },
};
