import React from "react";
import styles from "./page.module.css";
import ClientQR from "@/app/ClientQR";
import ServerQR from "@/app/ServerQR";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ClientQR />
        <ServerQR />
      </main>
    </div>
  );
}
