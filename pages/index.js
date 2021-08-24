import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import HowWork from "../components/HowWork";
import Download from "../components/Download";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <HowWork />
      <Download />
    </Layout>
  );
}
