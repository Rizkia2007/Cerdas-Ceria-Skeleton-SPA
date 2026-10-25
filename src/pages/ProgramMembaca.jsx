import ProgramDetail from '../components/program/ProgramDetail.jsx';
import { membaca } from '../data/programDetails.js';

export default function ProgramMembaca() {
  return <ProgramDetail data={membaca} />;
}