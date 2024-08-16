import React, { useState } from 'react';
import styles from './CssModule.module.css';
import {
  MdAdb,
  MdCrueltyFree,
  MdFace,
  MdFace2,
  MdFace3,
  MdFace4,
  MdFace5,
  MdFace6,
} from 'react-icons/md';

export default function Box() {
  return (
    <>
      <h2>CSS Module</h2>
      <div className={styles.Box}>
        <MdAdb className={styles.Box_icons} />
        <MdCrueltyFree className={styles.Box_icons} />
        <MdFace className={styles.Box_icons} />
        <MdFace2 className={styles.Box_icons} />
        <MdFace3 className={styles.Box_icons} />
        <MdFace4 className={styles.Box_icons} />
        <MdFace5 className={styles.Box_icons} />
        <MdFace6 className={styles.Box_icons} />
      </div>
    </>
  );
}
