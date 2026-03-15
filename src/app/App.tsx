import Layout from "@components/layout/Layout";
import Header from "@components/layout/Header";
import Sidebar from "@components/layout/Sidebar";
import Content from "@components/layout/Content";
import Footer from "@components/layout/Footer";
import { ArrowsPointingOutIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ButtonIcon from "@components/ui/ButtonIcon";
import styles from "./App.module.css";

function App() {
  return (
    <Layout header={<Header>Header</Header>} footer={<Footer>Footer</Footer>}>
      <Sidebar side="left" resizable={false}>
        Left Column
      </Sidebar>
      <Sidebar side="left">Left Column</Sidebar>
      <Content bottomPanel={"Bottom Panel"}>Center Panel</Content>
      <Sidebar side="right">
        <div className={styles.iconButtonWrapper}>
          <ButtonIcon
            icon={<ArrowsPointingOutIcon />}
            onClick={() => console.log("Expand clicked")}
            title="Maximize"
          />
          <ButtonIcon
            icon={<XMarkIcon />}
            onClick={() => console.log("Close clicked")}
            title="Close"
          />
        </div>
      </Sidebar>
      <Sidebar side="right" resizable={false}>
        Right Column
      </Sidebar>
    </Layout>
  );
}

export default App;
