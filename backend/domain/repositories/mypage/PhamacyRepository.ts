import { Phamacy } from '../../entities/mypage/Phamacy';

export interface PhamacyRepository {
  findByHpid(hpid: string): Promise<Phamacy | null>;
}