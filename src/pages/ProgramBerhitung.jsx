import ProgramDetail from '../components/program/ProgramDetail.jsx';
import { berhitung } from '../data/programDetails.js';

export default function ProgramBerhitung() {
  return <ProgramDetail data={berhitung} />;
}