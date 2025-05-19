import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요. 배재대학교 컴퓨터공학과 4학년이고, 재학중입니다. 실행력과 협업을 바탕으로, 사용자 중심의 웹 개발과 시스템 설계에 관심을 가지고 성장 중입니다.',
  ],
  sign: 'Jihye Kim',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
