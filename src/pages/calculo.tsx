import { useState } from 'react';
import dynamic from 'next/dynamic';
// import { Modal } from '../components/Modal';

const Modal = dynamic(
  () => import('../components/Modal').then(module => module.Modal),
  {
    // eslint-disable-next-line react/display-name
    loading: () => <p>Teste</p>,
    ssr: false,
  },
);

export default function Calculo() {
  const [modalShow, setModalShow] = useState(false);

  async function handleSum() {
    const Calc = (await import('../libs/calc')).default;
    alert(Calc.sum(5, 6));
  }
  async function handleSub() {
    const Calc = (await import('../libs/calc')).default;
    alert(Calc.sub(23313, 23123));
  }

  async function handleModal() {
    setModalShow(true);
  }
  return (
    <div>
      <h1>Calculo</h1>
      <button onClick={handleSum}>Somar</button>
      <br />
      <button onClick={handleSub}>Subtrair</button>
      <br />
      <button onClick={handleModal}>Modal</button>
      {modalShow && <Modal />}
    </div>
  );
}
