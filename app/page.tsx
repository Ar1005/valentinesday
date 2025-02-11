"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import NoButton from "@/components/no-button";
import valentinesImage from "@/assets/main.gif";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  // State to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleYesClick = () => {
    toast("Right answer!");
    setIsModalOpen(true); // Open the modal when "Yes" is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      <div className={styles.image}>
        <Image src={valentinesImage.src} fill alt="" />
      </div>

      <div className={styles["buttons-container"]}>
        <button className={styles["yes-button"]} onClick={handleYesClick}>
          Yes
        </button>
        <NoButton />
      </div>

      <ToastContainer position="top-center" />

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Congratulations!</h2>
            <p>You chose the right answer!</p>
            <Image src="/pudding.png" alt="Pudding Pedro Adobo Pocoyo The First" width={200} height={200} className="flex items-center just"/>
            <button onClick={closeModal} className={styles.closeButton}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
