import React from "react";
import ScrollableTabsButtonAuto from "../../pages/butunSayilar/tabs/Tabs";
import style from "./ButunSayilar.css";
const ButunSayilar = () => {
  return (
    <div className="tabs">
      <h2>Bütün Sayılar</h2>
      <ScrollableTabsButtonAuto></ScrollableTabsButtonAuto>
    </div>
  );
};

export default ButunSayilar;
